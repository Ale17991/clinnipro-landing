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

  // 2) Aciona a Edge Function que cria o lead no GHL.
  //    Falha aqui NÃO derruba a request — o lead já está salvo.
  //    A própria Edge Function pode ser reprocessada a partir do Supabase.
  const ghlFnUrl = process.env.GHL_EDGE_FUNCTION_URL
  if (ghlFnUrl) {
    const fnKey = process.env.GHL_EDGE_FUNCTION_KEY
    try {
      const fnRes = await fetch(ghlFnUrl, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          ...(fnKey ? { authorization: `Bearer ${fnKey}` } : {}),
        },
        body: JSON.stringify({ leadId: lead.id, ...data }),
        // Não trava a UX: se o GHL não responder em 8s, soltamos.
        signal: AbortSignal.timeout(8000),
      })
      if (!fnRes.ok) {
        console.warn('[api/lead] edge function non-2xx', {
          status: fnRes.status,
          leadId: lead.id,
        })
      }
    } catch (e) {
      console.warn('[api/lead] edge function dispatch failed', {
        leadId: lead.id,
        message: e instanceof Error ? e.message : String(e),
      })
    }
  }

  return NextResponse.json({ ok: true, id: lead.id })
}
