import { compromissos } from '@/lib/site'

export function SecuritySection() {
  return (
    <section id="seguranca" className="bg-paper-deep py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="grid gap-20 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <div>
            <p className="stamp text-[9.5px] text-ink-500">Segurança</p>
            <h2 className="display mt-6 text-[2rem] font-medium leading-[1.06] text-ink sm:text-[2.6rem]">
              LGPD não é checkbox no{' '}
              <span className="text-accent-dark">rodapé</span>.
            </h2>
          </div>

          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-3">
            {compromissos.map((c, i) => (
              <div key={c.title}>
                <p className="stamp text-[13px] font-medium text-accent-dark">
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
