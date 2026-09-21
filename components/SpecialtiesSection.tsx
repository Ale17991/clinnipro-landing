import { professions, customProof, customModule } from '@/lib/site'
import { Icon } from './Icon'

// Clímax do posicionamento: a parte mais importante do negócio é "fazemos o que
// falta". Não é promessa — mostramos módulos reais que nasceram de necessidades
// de clínica (odontograma, portal endócrino, TISS) como prova.
export function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      className="bg-paper py-24 sm:py-32"
    >
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="stamp text-[9.5px] text-ink-500">
            A parte mais importante
          </p>
          <h2 className="display mt-6 text-[2rem] font-medium leading-[1.06] text-ink sm:text-[2.7rem]">
            O que falta na sua clínica,
            <br />
            <span className="text-accent-dark">a gente cria</span>.
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
              className="flex flex-col rounded-2xl bg-white p-6 ring-1 ring-ink/[0.06] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-24px_rgba(20,29,35,0.35)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10">
                  <Icon name={m.icon} className="h-5 w-5 text-accent" />
                </div>
                <span className="stamp rounded-full bg-ink/[0.04] px-2.5 py-1 text-[8.5px] text-ink-500">
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
        <div className="mt-8 flex flex-col gap-5 rounded-2xl bg-navy p-8 text-white sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div className="max-w-xl">
            <div className="flex items-center gap-2.5">
              <Icon name="sparkle" className="h-4 w-4 text-accent-light" />
              <h3 className="stamp text-[10.5px] font-medium text-white/70">
                {customModule.title}
              </h3>
            </div>
            <p className="mt-3 text-[15px] leading-relaxed text-white/85">
              {customModule.desc}
            </p>
          </div>
          <a
            href="/demonstracao"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full bg-accent px-6 py-3 text-[14px] font-medium text-white transition hover:bg-accent-dark sm:self-auto"
          >
            Contar o que falta na minha clínica
            <span aria-hidden className="text-white/60">
              →
            </span>
          </a>
        </div>

        <p className="mt-12 border-t border-paper-line pt-7 text-[13px] leading-relaxed text-ink-500">
          <span className="stamp text-[9px]">Usado por</span>{' '}
          <span className="text-ink-700">{professions}</span>.
        </p>
      </div>
    </section>
  )
}
