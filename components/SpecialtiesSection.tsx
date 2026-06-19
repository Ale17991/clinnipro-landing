import { professions, customProof, customModule } from '@/lib/site'
import { Icon } from './Icon'

// Clímax do posicionamento: a parte mais importante do negócio é "fazemos o que
// falta". Não é promessa — mostramos módulos reais que nasceram de necessidades
// de clínica (odontograma, portal endócrino, TISS) como prova.
export function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="border-t border-ink/5 bg-[#FAFAFB] py-28 sm:py-36"
    >
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-500">
            A parte mais importante
          </p>
          <h2 className="display mt-4 text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
            O que falta na sua clínica,{' '}
            <span className="font-serif italic text-ink-700">a gente cria</span>.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
            Agenda e prontuário são só o começo. Quando a sua especialidade
            precisa de um fluxo que ainda não existe, a clinni desenvolve — sem
            você trocar de plataforma. E isso não é promessa: já fizemos. Estes
            módulos nasceram de necessidades reais de clínica e hoje rodam no
            produto.
          </p>
        </div>

        {/* Provas concretas */}
        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {customProof.map((m) => (
            <article
              key={m.title}
              className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-ink/5"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal/10">
                  <Icon name={m.icon} className="h-5 w-5 text-teal" />
                </div>
                <span className="rounded-full bg-ink/[0.04] px-2.5 py-1 text-[11px] font-medium text-ink-500">
                  {m.tag}
                </span>
              </div>
              <h3 className="mt-5 text-[16px] font-medium text-ink">
                {m.title}
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-ink-500">
                {m.desc}
              </p>
            </article>
          ))}
        </div>

        {/* Destaque: módulo sob medida */}
        <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-ink p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
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
            Contar o que falta na minha clínica
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
