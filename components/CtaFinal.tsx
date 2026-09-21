import Link from 'next/link'
import { whatsappUrl } from '@/lib/site'

// Fecha o círculo: a página começou na agenda da clínica e termina com um
// horário livre na agenda da ClinniPro. O CTA é o encaixe.
export function CtaFinal() {
  return (
    <section id="contato" className="relative overflow-hidden bg-paper-deep py-24 sm:py-32">
      <div
        aria-hidden
        className="time-grid pointer-events-none absolute inset-0 opacity-70"
      />

      <div className="relative mx-auto max-w-content px-6 sm:px-10">
        <div className="mx-auto grid max-w-4xl items-center gap-12 lg:grid-cols-[1fr_0.85fr] lg:gap-16">
          <div>
            <p className="stamp text-[9.5px] text-accent-dark">
              Próximo horário livre
            </p>
            <h2 className="display mt-6 text-[2.1rem] font-medium leading-[1.04] text-ink sm:text-[2.9rem]">
              Uma hora.
              <br />
              <span className="font-serif italic text-navy">
                Você sai com a clínica configurada.
              </span>
            </h2>
            <p className="mt-7 max-w-md text-[16px] leading-relaxed text-ink-500">
              Mostramos a ClinniPro com os dados da sua clínica — convênios,
              profissionais, procedimentos. Sem compromisso e sem cartão.
            </p>
          </div>

          {/* O encaixe: um bloco de agenda igual ao do hero, mas com o seu nome */}
          <div className="rounded-2xl bg-white p-6 shadow-[0_24px_60px_-28px_rgba(20,29,35,0.35),0_0_0_1px_rgba(20,29,35,0.06)]">
            <div className="flex items-center justify-between">
              <p className="stamp text-[9px] text-ink-500">Agenda ClinniPro</p>
              <span className="stamp rounded-full bg-accent/10 px-2 py-1 text-[8.5px] text-accent-dark">
                Livre
              </span>
            </div>

            <div className="mt-5 flex gap-4">
              <span className="stamp w-[38px] shrink-0 pt-[11px] text-[9.5px] text-ink-400">
                hoje
              </span>
              <div className="flex flex-1 items-center gap-3 rounded-lg bg-paper py-3 pr-3 ring-1 ring-ink/[0.05]">
                <span className="h-[34px] w-[3px] shrink-0 rounded-full bg-accent" />
                <div>
                  <p className="text-[12.5px] font-semibold leading-tight text-ink">
                    Demonstração · sua clínica
                  </p>
                  <p className="text-[11px] leading-tight text-ink-500">
                    1 hora · online · com um consultor
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/demonstracao"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-navy px-6 py-3.5 text-[14px] font-medium text-white transition hover:bg-navy-deep"
            >
              Reservar esse horário
              <span aria-hidden className="text-white/60">
                →
              </span>
            </Link>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-center text-[13px] font-medium text-ink-500 transition hover:text-ink"
            >
              Ou tirar uma dúvida rápida no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
