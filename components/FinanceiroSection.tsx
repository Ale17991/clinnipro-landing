export function FinanceiroSection() {
  return (
    <section id="financeiro" className="relative overflow-hidden bg-ink py-28 text-white sm:py-36">
      <div className="mx-auto grid max-w-content gap-20 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-24">
        <div className="order-2 lg:order-1">
          <div className="relative overflow-hidden rounded-xl bg-white text-ink shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]">
            <div className="border-b border-ink/5 px-7 py-5">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-500">
                Repasse · maio 2026
              </p>
              <p className="mt-2 text-3xl font-medium tracking-tight text-ink">
                R$ 41.040<span className="text-ink-500">,00</span>
              </p>
            </div>

            <div className="divide-y divide-ink/5">
              {[
                ['Dra. Helena Martins', '42 atendimentos', 'R$ 18.420'],
                ['Dr. Rafael Costa', '31 atendimentos', 'R$ 12.940'],
                ['Dra. Carla Andrade', '24 atendimentos', 'R$ 9.680'],
              ].map(([who, n, v]) => (
                <div key={who} className="flex items-center justify-between px-7 py-4 transition-colors hover:bg-ink/[0.02]">
                  <div>
                    <p className="text-[13px] font-medium text-ink">{who}</p>
                    <p className="text-[11px] text-ink-500">{n}</p>
                  </div>
                  <p className="text-[13px] font-medium text-ink">{v}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-ink/5 px-7 py-4">
              <div className="flex items-end gap-1 h-12">
                {[40, 55, 48, 70, 60, 80, 65, 85, 72, 95].map((h, i) => (
                  <div
                    key={i}
                    className={`flex-1 rounded-t-sm transition-colors ${
                      i === 9 ? 'bg-teal' : 'bg-ink/10 hover:bg-ink/25'
                    }`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
              <p className="mt-2 text-[11px] text-ink-500">Próximos 10 dias · fluxo de caixa</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-white/50">
            Financeiro
          </p>
          <h2 className="display mt-4 text-4xl font-medium leading-[1.1] sm:text-[2.75rem]">
            O mês fecha <span className="font-serif italic text-white/80">sozinho</span>.
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-white/65">
            Comissão por procedimento, taxa por convênio, retenção de imposto e
            parcelas — tudo somado pela clinni pro. Você confere e libera.
          </p>
        </div>
      </div>
    </section>
  )
}
