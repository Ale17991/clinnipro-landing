import { modules } from '@/lib/site'
import { Icon } from './Icon'

export function ProductTour() {
  return (
    <section id="sistema" className="border-t border-ink/5 bg-white py-28 sm:py-36">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-500">
            O sistema
          </p>
          <h2 className="display mt-4 text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
            Quatro coisas, <span className="font-serif italic text-ink-700">bem feitas</span>.
          </h2>
        </div>

        <div className="mt-20 grid gap-x-12 gap-y-16 sm:grid-cols-2 lg:gap-y-20">
          {modules.map((m) => (
            <article key={m.id} className="group">
              <div className="flex items-center gap-3">
                <Icon name={m.icon} className="h-4 w-4 text-ink-500" />
                <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-500">
                  {m.eyebrow}
                </p>
              </div>
              <h3 className="display mt-5 text-2xl font-medium text-ink sm:text-[1.75rem]">
                {m.title}
              </h3>
              <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-500">
                {m.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
