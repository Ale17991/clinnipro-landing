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

  const { data: lead, error } = await supabase
    .from('leads')
    .insert(baseRow)
    .select('id')
    .single()

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
      'veio-da-lp',
      'landing',
      `tipo: ${data.clinicType}`,
      `porte: ${data.professionals}`,
    ]
    if (data.utm?.campaign) tags.push(`campanha: ${data.utm.campaign}`)

    // Campos personalizados criados na subconta (fieldKey exatamente como a GHL
    // gerou — inclusive o "tipo_de_clnica" sem o "i").
    const customFields = [
      { key: 'contact.nome_da_clinica', field_value: data.clinicName },
      { key: 'contact.tipo_de_clnica', field_value: data.clinicType },
      {
        key: 'contact.quantos_profissionais_atendem',
        field_value: data.professionals,
      },
    ]

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
            customFields,
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
        // 400 com meta.contactId = contato já existe na subconta. Tratamos como
        // sincronizado (não é erro) para não ficar reprocessando duplicado.
        const json = (await ghlRes.json().catch(() => null)) as
          | { message?: string; meta?: { contactId?: string } }
          | null
        const dupId = json?.meta?.contactId

        if (dupId) {
          await supabase
            .from('leads')
            .update({
              ghl_status: 'sent',
              ghl_contact_id: dupId,
              ghl_synced_at: new Date().toISOString(),
            })
            .eq('id', lead.id)
        } else {
          console.warn('[api/lead] CRM non-2xx', {
            status: ghlRes.status,
            leadId: lead.id,
          })
          await supabase
            .from('leads')
            .update({
              ghl_status: 'failed',
              ghl_error: `HTTP ${ghlRes.status} ${json?.message ?? ''}`.slice(0, 500),
            })
            .eq('id', lead.id)
        }
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
