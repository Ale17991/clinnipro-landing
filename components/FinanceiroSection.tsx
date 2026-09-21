import { DaySection, DayHeading } from './DaySection'

// 18:20 — último paciente saiu, a luz da recepção apaga. A seção escurece
// junto: é a única faixa escura do trilho e marca o fim do expediente.
export function FinanceiroSection() {
  return (
    <DaySection
      id="financeiro"
      hour="18:20"
      label={'Último paciente\nsaiu'}
      tone="ink"
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-xl bg-white text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <div className="border-b border-ink/5 px-7 py-5">
              <p className="stamp text-[9.5px] text-ink-500">
                Repasse · maio 2026
              </p>
              <p className="mt-2 text-3xl font-medium tracking-tight text-ink">
                R$ 41.040<span className="text-ink-400">,00</span>
              </p>
            </div>

            <div className="divide-y divide-ink/5">
              {[
                ['Dra. Helena Martins', '42 atendimentos', 'R$ 18.420'],
                ['Dr. Rafael Costa', '31 atendimentos', 'R$ 12.940'],
                ['Dra. Carla Andrade', '24 atendimentos', 'R$ 9.680'],
              ].map(([who, n, v]) => (
                <div
                  key={who}
                  className="flex items-center justify-between px-7 py-4 transition-colors hover:bg-paper"
                >
                  <div>
                    <p className="text-[13px] font-medium text-ink">{who}</p>
                    <p className="text-[11px] text-ink-500">{n}</p>
                  </div>
                  <p className="text-[13px] font-medium text-ink">{v}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-ink/5 px-7 py-4">
              <div className="flex h-12 items-end gap-1">
                {[40, 55, 48, 70, 60, 80, 65, 85, 72, 95].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-sm transition-colors ${
                      i === 9 ? 'bg-accent' : 'bg-ink/10 hover:bg-ink/25'
                    }`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <p className="stamp mt-2.5 text-[8.5px] text-ink-500">
                Próximos 10 dias · fluxo de caixa
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <DayHeading className="text-white">
            O dia fechou.
            <br />
            <span className="text-accent-light">O mês também.</span>
          </DayHeading>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/65">
            Comissão por procedimento, taxa por convênio, retenção de imposto
            e parcelas, tudo somado enquanto você atendia. Ninguém abre planilha
            no fim do mês. Você confere e libera.
          </p>

          <ul className="mt-10 max-w-sm divide-y divide-white/10 border-y border-white/10">
            {closing.map((c) => (
              <li key={c.label} className="flex items-baseline justify-between py-3.5">
                <span className="stamp text-[9px] text-white/45">{c.label}</span>
                <span className="text-[14px] font-medium text-white">
                  {c.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DaySection>
  )
}

const closing = [
  { label: 'Fechamento manual', value: 'Zero' },
  { label: 'Cálculo de repasse', value: 'Automático' },
  { label: 'Conferência', value: 'Um clique' },
]
