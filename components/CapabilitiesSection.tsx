import { capabilityGroups } from '@/lib/site'
import { Icon } from './Icon'

// Amplitude real do produto. A landing antiga mostrava 4 módulos; o sistema faz
// muito mais. Esta seção lista, agrupado e escaneável, o que já está pronto.
export function CapabilitiesSection() {
  return (
    <section
      id="recursos"
      className="border-t border-ink/5 bg-white py-28 sm:py-36"
    >
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-500">
            Tudo num só lugar
          </p>
          <h2 className="display mt-4 text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
            O sistema já faz{' '}
            <span className="font-serif italic text-ink-700">muita coisa</span>.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
            Da recepção ao repasse, do prontuário ao convênio. Esta é a lista do
            que está pronto hoje — e ela só cresce. O que faltar para a sua
            clínica, a gente desenvolve.
          </p>
        </div>

        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {capabilityGroups.map((g) => (
            <div key={g.title}>
              <div className="flex items-center gap-2.5">
                <Icon name={g.icon} className="h-4 w-4 text-teal" />
                <h3 className="text-[13px] font-semibold uppercase tracking-[0.1em] text-ink">
                  {g.title}
                </h3>
              </div>
              <ul className="mt-4 space-y-2.5">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-[13.5px] leading-snug text-ink-500"
                  >
                    <Icon
                      name="check"
                      className="mt-[2px] h-3.5 w-3.5 shrink-0 text-teal/70"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
