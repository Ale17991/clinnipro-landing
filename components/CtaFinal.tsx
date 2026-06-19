import Link from 'next/link'
import { whatsappUrl } from '@/lib/site'

export function CtaFinal() {
  return (
    <section id="contato" className="bg-white py-28 sm:py-40">
      <div className="mx-auto max-w-content px-6 sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-teal-dark">
            Mais que um sistema, um parceiro
          </p>
          <h2 className="display mt-4 text-4xl font-medium leading-[1.05] text-ink sm:text-[3.5rem]">
            Uma hora.
            <br />
            <span className="font-serif italic text-ink-700">
              Você sai com a clínica configurada.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-lg text-[16px] leading-relaxed text-ink-500">
            Mostramos a clinni pro com os dados da sua clínica — convênios,
            profissionais, procedimentos. Sem compromisso.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/demonstracao"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-[14px] font-medium text-white transition hover:bg-ink-900"
            >
              Agendar demonstração
              <span aria-hidden className="text-white/60">→</span>
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-ink-500 transition hover:text-ink"
            >
              Tirar uma dúvida rápida
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
