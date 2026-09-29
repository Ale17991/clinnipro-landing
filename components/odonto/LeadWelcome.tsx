'use client'

import { useEffect, useState } from 'react'
import { ODONTO_LEAD_KEY } from '@/lib/site'

// Quem chega pelo formulário de demonstração já deixou os dados: aqui só
// confirmamos o recebimento e seguimos para os planos. O primeiro nome vem do
// sessionStorage que o formulário gravou; se não houver (storage bloqueado ou
// link compartilhado), a saudação fica neutra.
const MAX_AGE_MS = 2 * 60 * 60 * 1000

function readLead(): { firstName?: string } | null {
  try {
    const raw = sessionStorage.getItem(ODONTO_LEAD_KEY)
    if (!raw) return null
    const lead = JSON.parse(raw) as { firstName?: unknown; at?: unknown }
    if (typeof lead.at !== 'number' || Date.now() - lead.at > MAX_AGE_MS) return null
    return { firstName: typeof lead.firstName === 'string' ? lead.firstName : undefined }
  } catch {
    return null
  }
}

export function LeadWelcome() {
  const [lead, setLead] = useState<{ firstName?: string } | null>(null)

  useEffect(() => {
    setLead(readLead())
  }, [])

  return (
    <div className="flex items-start gap-4 sm:gap-5">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent-dark sm:h-12 sm:w-12">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      </div>
      <div>
        <h1 className="display text-[1.9rem] font-medium leading-[1.08] text-ink sm:text-[2.5rem]">
          {lead ? (
            <>
              Recebemos seus dados
              {lead.firstName ? <>, {lead.firstName}</> : null}.
            </>
          ) : (
            <>ClinniPro para odontologia.</>
          )}
        </h1>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-500">
          {lead ? (
            <>
              Nossa equipe fala com você em até{' '}
              <strong className="text-ink">1 dia útil</strong>. Se quiser
              começar agora, escolha o plano do seu consultório abaixo.
            </>
          ) : (
            <>Escolha o plano do seu consultório abaixo.</>
          )}
        </p>
      </div>
    </div>
  )
}
