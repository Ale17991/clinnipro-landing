import type { ReactNode } from 'react'

// O trilho do dia.
//
// Toda seção do miolo da landing é um horário de uma clínica real: o paciente
// que agenda às 07:40, a recepção que abre a agenda às 08:15, a consulta das
// 09:00, o fechamento das 18:20. A linha vertical que atravessa a página é a
// mesma grade de horário da agenda — é o que a ClinniPro tem e um CRM genérico
// não tem. A hora fica grudada (sticky) enquanto a seção rola.

type Tone = 'paper' | 'deep' | 'white' | 'ink'

const tones: Record<
  Tone,
  { bg: string; rail: string; ring: string; hour: string; label: string; dot: string }
> = {
  paper: {
    bg: 'bg-paper',
    rail: 'border-paper-line',
    ring: 'ring-paper',
    hour: 'text-ink',
    label: 'text-ink-500',
    dot: 'bg-accent',
  },
  deep: {
    bg: 'bg-paper-deep',
    rail: 'border-ink/[0.12]',
    ring: 'ring-paper-deep',
    hour: 'text-ink',
    label: 'text-ink-500',
    dot: 'bg-accent',
  },
  white: {
    bg: 'bg-white',
    rail: 'border-ink/10',
    ring: 'ring-white',
    hour: 'text-ink',
    label: 'text-ink-500',
    dot: 'bg-accent',
  },
  ink: {
    bg: 'bg-ink text-white',
    rail: 'border-white/15',
    ring: 'ring-ink',
    hour: 'text-white',
    label: 'text-white/45',
    dot: 'bg-accent',
  },
}

type DaySectionProps = {
  id?: string
  hour: string
  label: string
  tone?: Tone
  children: ReactNode
}

export function DaySection({ id, hour, label, tone = 'paper', children }: DaySectionProps) {
  const t = tones[tone]

  return (
    <section id={id} className={`relative ${t.bg}`}>
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="lg:grid lg:grid-cols-[132px_1fr]">
          {/* Coluna da hora — some no mobile, vira carimbo inline lá embaixo */}
          <div className="hidden pt-24 sm:pt-28 lg:block">
            <div className="sticky top-28">
              <p className={`stamp text-[17px] font-medium leading-none ${t.hour}`}>
                {hour}
              </p>
              <p className={`stamp mt-2 whitespace-pre-line text-[9.5px] leading-[1.6] ${t.label}`}>
                {label}
              </p>
            </div>
          </div>

          <div
            className={`relative py-16 sm:py-24 lg:border-l lg:py-28 lg:pl-14 ${t.rail}`}
          >
            <span
              aria-hidden
              className={`absolute -left-[4px] top-[7.35rem] hidden h-[8px] w-[8px] rounded-full ring-4 lg:block ${t.dot} ${t.ring}`}
            />

            {/* Carimbo de hora no mobile */}
            <p className="mb-7 flex items-center gap-2.5 lg:hidden">
              <span className={`stamp text-[13px] font-medium ${t.hour}`}>{hour}</span>
              <span aria-hidden className={`h-px w-5 ${t.dot} opacity-60`} />
              <span className={`stamp text-[9.5px] ${t.label}`}>
                {label.split('\n').join(' ')}
              </span>
            </p>

            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

// Fecha o trilho: a linha morre num traço horizontal com o fim do expediente.
export function DayClose() {
  return (
    <section className="relative bg-paper">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="lg:grid lg:grid-cols-[132px_1fr]">
          <div className="hidden lg:block" />
          <div className="relative pb-20 lg:border-l lg:border-paper-line lg:pl-14">
            <span
              aria-hidden
              className="absolute -left-[13px] top-0 hidden h-px w-[26px] bg-paper-line lg:block"
            />
            <p className="stamp pt-8 text-[9.5px] text-ink-500">
              19:00 — fim do expediente · nenhuma planilha aberta
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Título de seção no padrão novo: sem eyebrow em caixa alta (a hora já faz esse
// papel), sem itálico serifado — o destaque é uma palavra em laranja, no máximo.
export function DayHeading({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <h2
      className={`display text-[2rem] font-medium leading-[1.08] sm:text-[2.6rem] ${className}`}
    >
      {children}
    </h2>
  )
}
