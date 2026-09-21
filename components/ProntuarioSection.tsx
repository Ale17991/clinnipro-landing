import { DaySection, DayHeading } from './DaySection'

const timeline = [
  { date: '28 mai', title: 'Consulta de retorno', sub: 'Dra. Helena · 30 min' },
  { date: '28 mai', title: 'Sinais vitais', sub: 'PA 120/80 · FC 72 · IMC 22,1' },
  { date: '28 mai', title: 'Prescrição digital', sub: 'via Memed · enviada ao paciente' },
  { date: '14 mai', title: 'Plano de tratamento', sub: '6 sessões · fisioterapia' },
]

// 09:00 — o paciente entrou. Prontuário.
export function ProntuarioSection() {
  return (
    <DaySection
      id="prontuario"
      hour="09:00"
      label={'Paciente\nna sala'}
      tone="deep"
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div>
          <DayHeading className="text-ink">
            Sentou na cadeira.
            <br />
            <span className="text-accent-dark">A história toda</span> já está
            aberta.
          </DayHeading>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-500">
            Consultas, sinais vitais, alergias, plano de tratamento e prescrição
            digital no mesmo fluxo cronológico. Quem atende não perde os
            primeiros cinco minutos da consulta caçando papel.
          </p>

          <p className="stamp mt-8 inline-flex items-center gap-2.5 rounded-full bg-white px-4 py-2 text-[9.5px] text-ink-700 ring-1 ring-ink/[0.08]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Receita digital pela Memed
          </p>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_-24px_rgba(20,29,35,0.2),0_0_0_1px_rgba(20,29,35,0.06)]">
            <div className="flex items-center justify-between border-b border-ink/5 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-navy text-[12px] font-semibold text-white">
                  MS
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink">Maria Santos</p>
                  <p className="text-[11px] text-ink-500">38 anos · Unimed</p>
                </div>
              </div>
              <span className="stamp rounded-full bg-rose-50 px-2.5 py-1 text-[8.5px] text-rose-700">
                Alergia: dipirona
              </span>
            </div>

            <div className="p-6">
              <ol className="relative space-y-5 pl-6">
                <span
                  aria-hidden
                  className="absolute left-[5px] top-2 h-[calc(100%-1.5rem)] w-px bg-ink/10"
                />
                {timeline.map((t, i) => (
                  <li key={i} className="group relative">
                    <span
                      className={`absolute -left-6 top-1 h-2.5 w-2.5 rounded-full ring-4 ring-white transition-transform duration-200 group-hover:scale-125 ${
                        i === 0 ? 'bg-accent' : 'bg-ink/20 group-hover:bg-accent'
                      }`}
                    />
                    <p className="stamp text-[9px] text-ink-500">{t.date}</p>
                    <p className="mt-0.5 text-[13.5px] font-medium text-ink transition-colors group-hover:text-accent-dark">
                      {t.title}
                    </p>
                    <p className="text-[12px] text-ink-500">{t.sub}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </DaySection>
  )
}
