import { compromissos } from '@/lib/site'

export function SecuritySection() {
  return (
    <section id="seguranca" className="border-t border-ink/5 bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="grid gap-20 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <div>
            <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-500">
              Segurança
            </p>
            <h2 className="display mt-4 text-4xl font-medium leading-[1.1] text-ink sm:text-[2.75rem]">
              LGPD não é checkbox no <span className="font-serif italic text-ink-700">rodapé</span>.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-3">
            {compromissos.map((c, i) => (
              <div key={c.title}>
                <p className="font-serif text-3xl italic text-ink-700">
                  0{i + 1}
                </p>
                <h3 className="mt-3 text-[15px] font-medium text-ink">
                  {c.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-ink-500">
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
