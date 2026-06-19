import { partnerPillars } from '@/lib/site'
import { Icon } from './Icon'

// Seção "manifesto" — afirma o posicionamento de marca: a clinni pro não é só
// um sistema, é o parceiro que resolve a clínica. Fundo escuro para dar peso e
// quebrar o ritmo das seções claras de produto.
export function PartnerSection() {
  return (
    <section id="parceria" className="border-t border-ink/5 bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="max-w-2xl">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-teal-light">
            Mais que um sistema
          </p>
          <h2 className="display mt-4 text-4xl font-medium leading-[1.1] text-white sm:text-5xl">
            A gente se adapta à sua clínica,{' '}
            <span className="font-serif italic text-teal-light">
              não o contrário
            </span>
            .
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-white/70">
            Software resolve metade — a outra metade é gente. A clinni pro não é
            só a plataforma: é o time que implanta, ajusta e cria as ferramentas
            que a sua clínica precisa. O melhor amigo de quem cuida de pessoas.
          </p>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {partnerPillars.map((p) => (
            <article key={p.title}>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.06] ring-1 ring-white/10">
                <Icon name={p.icon} className="h-4 w-4 text-teal-light" />
              </div>
              <h3 className="mt-4 text-[16px] font-medium text-white">
                {p.title}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-white/60">
                {p.desc}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
