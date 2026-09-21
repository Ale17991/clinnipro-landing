import { partnerPillars } from '@/lib/site'

// O dia acabou — aqui a landing sai do trilho e fala de marca.
// Faixa azul-marinho (a cor principal, que antes quase não aparecia) e os
// pilares como lista numerada editorial, não como grade de 4 cards com ícone.
export function PartnerSection() {
  return (
    <section id="parceria" className="bg-navy py-24 sm:py-32">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.95fr_1fr] lg:items-start lg:gap-24">
          <div className="lg:sticky lg:top-28">
            <p className="stamp text-[9.5px] text-accent-light">
              O que não cabe numa tela
            </p>
            <h2 className="display mt-6 text-[2rem] font-medium leading-[1.06] text-white sm:text-[2.7rem]">
              Software resolve metade.
              <br />
              <span className="font-serif italic text-accent-light">
                A outra metade é gente.
              </span>
            </h2>
            <p className="mt-7 max-w-md text-[16px] leading-relaxed text-white/65">
              Um dia inteiro rodando liso não é sorte — é implantação bem feita,
              ajuste no fluxo da sua clínica e alguém do outro lado quando algo
              trava. A ClinniPro não é só a plataforma: é o time.
            </p>
          </div>

          <ol className="divide-y divide-white/[0.12] border-y border-white/[0.12]">
            {partnerPillars.map((p, i) => (
              <li
                key={p.title}
                className="group grid grid-cols-[38px_1fr] gap-5 py-6 transition-colors"
              >
                <span className="stamp pt-1 text-[11px] text-white/35 transition-colors group-hover:text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-[17px] font-medium text-white">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 max-w-sm text-[14.5px] leading-relaxed text-white/60">
                    {p.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
