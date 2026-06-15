import { professions, professionModules } from '@/lib/site'
import { Icon } from './Icon'

export function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="border-t border-ink/5 bg-[#FAFAFB] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-500">
            Especialidades
          </p>
          <h2 className="display mt-4 text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
            Um núcleo. Cada especialidade{' '}
            <span className="font-serif italic text-ink-700">do seu jeito</span>.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
            Agenda, prontuário e financeiro servem qualquer clínica. A partir
            daí, cada profissional liga só os módulos que usa — sem pagar pelo
            que não precisa.
          </p>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {professionModules.map((p) => (
            <article key={p.pro}>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white ring-1 ring-ink/10">
                <Icon name={p.icon} className="h-4 w-4 text-teal" />
              </div>
              <h3 className="mt-4 text-[16px] font-medium text-ink">{p.pro}</h3>
              <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-ink-500">
                {p.desc}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-16 border-t border-ink/10 pt-6 text-[13px] leading-relaxed text-ink-500">
          Já atende: <span className="text-ink-700">{professions}</span>.
        </p>
      </div>
    </section>
  )
}
