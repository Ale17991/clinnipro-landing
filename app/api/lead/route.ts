import { NextResponse, type NextRequest } from 'next/server'
import { leadSchema } from '@/lib/lead-schema'
import { getSupabaseAdmin } from '@/lib/supabase-admin'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  let parsed
  try {
    const body = await req.json()
    parsed = leadSchema.safeParse(body)
  } catch {
    return NextResponse.json({ error: 'Payload inválido.' }, { status: 400 })
  }

  if (!parsed.success) {
    const issues = parsed.error.flatten().fieldErrors
    return NextResponse.json(
      { error: 'Dados inválidos.', issues },
      { status: 422 },
    )
  }

  const data = parsed.data

  // Metadados úteis pra atribuição e antifraude leve.
  const ip =
    req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ??
    req.headers.get('x-real-ip') ??
    null
  const userAgent = req.headers.get('user-agent') ?? null
  const referer = req.headers.get('referer') ?? null

  const supabase = getSupabaseAdmin()

  // 1) Persiste o lead.
  const baseRow = {
    clinic_name: data.clinicName,
    contact_name: data.contactName,
    clinic_type: data.clinicType,
    phone: data.phone,
    email: data.email,
    professionals: data.professionals,
    source: data.source ?? 'landing',
    utm_source: data.utm?.source ?? null,
    utm_medium: data.utm?.medium ?? null,
    utm_campaign: data.utm?.campaign ?? null,
    utm_term: data.utm?.term ?? null,
    utm_content: data.utm?.content ?? null,
    ip,
    user_agent: userAgent,
    referer,
  }

  // A coluna intended_plan vem da migration 0002. Tentamos inserir com ela;
  // se o banco ainda não a tiver, reinserimos sem ela — o plano segue para o
  // GHL pelo payload da Edge Function de qualquer forma. Assim o deploy nunca
  // quebra a captura de leads, mesmo antes da migration ser aplicada.
  let result = await supabase
    .from('leads')
    .insert({ ...baseRow, intended_plan: data.intendedPlan })
    .select('id')
    .single()

  if (
    result.error &&
    (result.error.code === '42703' || result.error.code === 'PGRST204')
  ) {
    console.warn(
      '[api/lead] coluna intended_plan ausente — inserindo sem ela. Aplique a migration 0002.',
    )
    result = await supabase
      .from('leads')
      .insert(baseRow)
      .select('id')
      .single()
  }

  const { data: lead, error } = result

  if (error) {
    console.error('[api/lead] supabase insert failed', {
      message: error.message,
      code: error.code,
    })
    return NextResponse.json(
      { error: 'Não foi possível registrar agora. Tente novamente em instantes.' },
      { status: 500 },
    )
  }

  // 2) Cria o contato no Go High Level (API v2 / LeadConnector).
  //    Best-effort: falha aqui NÃO derruba a request — o lead já está salvo no
  //    Supabase e fica com ghl_status='failed' para reprocessar depois. Só roda
  //    se as credenciais existirem (token de Private Integration + locationId).
  const ghlToken = process.env.GHL_API_TOKEN
  const ghlLocationId = process.env.GHL_LOCATION_ID

  if (ghlToken && ghlLocationId) {
    // "Dra. Helena Martins" -> firstName "Dra." ... melhor: primeiro nome + resto.
    const nameParts = data.contactName.trim().split(/\s+/)
    const firstName = nameParts[0]
    const lastName = nameParts.slice(1).join(' ') || undefined

    // Dados estruturados como tags — prontos para automações no GHL,
    // sem precisar de custom fields configurados de antemão.
    const tags = [
      'landing',
      `plano: ${data.intendedPlan}`,
      `tipo: ${data.clinicType}`,
      `porte: ${data.professionals}`,
    ]
    if (data.utm?.campaign) tags.push(`campanha: ${data.utm.campaign}`)

    try {
      const ghlRes = await fetch(
        'https://services.leadconnectorhq.com/contacts/',
        {
          method: 'POST',
          headers: {
            authorization: `Bearer ${ghlToken}`,
            version: '2021-07-28',
            'content-type': 'application/json',
          },
          body: JSON.stringify({
            locationId: ghlLocationId,
            firstName,
            lastName,
            email: data.email,
            phone: data.phone,
            companyName: data.clinicName,
            source: data.utm?.source ?? data.source ?? 'landing',
            tags,
          }),
          // Não trava a UX: se o GHL não responder em 8s, soltamos.
          signal: AbortSignal.timeout(8000),
        },
      )

      if (ghlRes.ok) {
        const json = (await ghlRes.json().catch(() => null)) as
          | { contact?: { id?: string } }
          | null
        await supabase
          .from('leads')
          .update({
            ghl_status: 'sent',
            ghl_contact_id: json?.contact?.id ?? null,
            ghl_synced_at: new Date().toISOString(),
          })
          .eq('id', lead.id)
      } else {
        const errText = await ghlRes.text().catch(() => '')
        console.warn('[api/lead] GHL non-2xx', {
          status: ghlRes.status,
          leadId: lead.id,
        })
        await supabase
          .from('leads')
          .update({
            ghl_status: 'failed',
            ghl_error: `HTTP ${ghlRes.status} ${errText}`.slice(0, 500),
          })
          .eq('id', lead.id)
      }
    } catch (e) {
      const message = e instanceof Error ? e.message : String(e)
      console.warn('[api/lead] GHL dispatch failed', { leadId: lead.id, message })
      await supabase
        .from('leads')
        .update({ ghl_status: 'failed', ghl_error: message.slice(0, 500) })
        .eq('id', lead.id)
    }
  }

  return NextResponse.json({ ok: true, id: lead.id })
}
