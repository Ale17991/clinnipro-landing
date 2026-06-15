import { Icon } from './Icon'

const timeline = [
  { date: '28 mai', title: 'Consulta de retorno', sub: 'Dra. Helena · 30 min' },
  { date: '28 mai', title: 'Sinais vitais', sub: 'PA 120/80 · FC 72 · IMC 22,1' },
  { date: '28 mai', title: 'Prescrição digital', sub: 'via Memed · enviada ao paciente' },
  { date: '14 mai', title: 'Plano de tratamento', sub: '6 sessões · fisioterapia' },
]

export function ProntuarioSection() {
  return (
    <section id="prontuario" className="bg-[#FAFAFB] py-28 sm:py-36">
      <div className="mx-auto grid max-w-content gap-20 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-24">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-500">
            Prontuário
          </p>
          <h2 className="display mt-4 text-4xl font-medium leading-[1.1] text-ink sm:text-[2.75rem]">
            Tudo do paciente em <span className="font-serif italic text-ink-700">uma linha do tempo</span>.
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-500">
            Consultas, sinais vitais, alergias, plano de tratamento e prescrição
            digital no mesmo fluxo cronológico. Quem atende não precisa caçar
            nada.
          </p>

          <p className="mt-6 inline-flex items-center gap-3 text-[13px] text-ink-500">
            <span className="inline-flex h-7 items-center gap-2 rounded-full border border-ink/10 bg-white px-3 font-medium text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Receita digital pela Memed
            </span>
          </p>
        </div>

        {/* Mockup: clean, sem 3 colunas, sem sidebar lateral */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_-24px_rgba(11,27,38,0.18),0_0_0_1px_rgba(11,27,38,0.06)]">
            <div className="flex items-center justify-between border-b border-ink/5 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-[12px] font-semibold text-white">
                  MS
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink">Maria Santos</p>
                  <p className="text-[11px] text-ink-500">38 anos · Unimed</p>
                </div>
              </div>
              <span className="rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-medium text-rose-700">
                Alergia: dipirona
              </span>
            </div>

            <div className="p-6">
              <ol className="relative space-y-5 pl-6">
                <span aria-hidden className="absolute left-[5px] top-2 h-[calc(100%-1.5rem)] w-px bg-ink/10" />
                {timeline.map((t, i) => (
                  <li key={i} className="group relative">
                    <span
                      className={`absolute -left-6 top-1 h-2.5 w-2.5 rounded-full ring-4 ring-white transition-transform duration-200 group-hover:scale-125 ${
                        i === 0 ? 'bg-teal' : 'bg-ink/20 group-hover:bg-teal'
                      }`}
                    />
                    <p className="text-[10.5px] font-medium uppercase tracking-[0.14em] text-ink-500">
                      {t.date}
                    </p>
                    <p className="mt-0.5 text-[13.5px] font-medium text-ink transition-colors group-hover:text-teal-dark">
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
    </section>
  )
}
