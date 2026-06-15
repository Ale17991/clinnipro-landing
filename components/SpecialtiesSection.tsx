import { professions, specialtyModules, customModule } from '@/lib/site'
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
            Modular
          </p>
          <h2 className="display mt-4 text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
            Liga o que usa.{' '}
            <span className="font-serif italic text-ink-700">
              O que faltar, a gente cria
            </span>
            .
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
            O núcleo — agenda, prontuário, prescrição e financeiro — atende
            qualquer clínica. Os módulos abaixo entram conforme a sua rotina, e
            quando a sua especialidade pede algo único, a gente desenvolve.
          </p>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {specialtyModules.map((m) => (
            <article key={m.title}>
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white ring-1 ring-ink/10">
                <Icon name={m.icon} className="h-4 w-4 text-teal" />
              </div>
              <h3 className="mt-4 text-[16px] font-medium text-ink">{m.title}</h3>
              <p className="mt-2 max-w-sm text-[14px] leading-relaxed text-ink-500">
                {m.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Destaque: módulo personalizado */}
        <div className="mt-14 flex flex-col gap-5 rounded-2xl bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5">
              <Icon name="sparkle" className="h-4 w-4 text-teal-light" />
              <h3 className="text-[15px] font-medium uppercase tracking-[0.12em] text-white/70">
                {customModule.title}
              </h3>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-white/85">
              {customModule.desc}
            </p>
          </div>
          <a
            href="/demonstracao"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-teal px-6 py-3 text-[14px] font-medium text-white transition hover:bg-teal-dark sm:self-auto"
          >
            Falar sobre o seu fluxo
            <span aria-hidden className="text-white/60">
              →
            </span>
          </a>
        </div>

        <p className="mt-12 text-[13px] leading-relaxed text-ink-500">
          Usado por: <span className="text-ink-700">{professions}</span>.
        </p>
      </div>
    </section>
  )
}
