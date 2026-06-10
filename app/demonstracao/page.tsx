import type { Metadata } from 'next'
import { Suspense } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { LeadForm } from './LeadForm'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Demonstração · clinni pro',
  description:
    'Trinta minutos com a nossa equipe. Mostramos a clinni pro com os dados da sua clínica — convênios, profissionais, procedimentos.',
  robots: { index: false, follow: true },
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-ink/5">
        <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
          <Link href="/" className="flex items-center" aria-label="clinni pro">
            <Image
              src="/logo-clinnipro-dark.png"
              alt="clinni pro"
              width={150}
              height={42}
              className="h-7 w-auto"
              priority
            />
          </Link>
          <Link
            href="/"
            className="text-[13.5px] font-medium text-ink-500 transition hover:text-ink"
          >
            ← Voltar
          </Link>
        </div>
      </header>

      <main className="mx-auto grid max-w-content gap-16 px-6 py-20 sm:px-10 sm:py-28 lg:grid-cols-[1fr_1.1fr] lg:gap-24 lg:py-32">
        <section className="lg:pt-6">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-500">
            Demonstração
          </p>
          <h1 className="display mt-4 text-4xl font-medium leading-[1.05] text-ink sm:text-[3rem]">
            Uma hora.
            <br />
            <span className="font-serif italic text-ink-700">
              A clínica configurada.
            </span>
          </h1>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-500">
            Mostramos a clinni pro com os dados da sua clínica — convênios,
            profissionais, procedimentos. Sem compromisso, sem cartão.
          </p>

          <ol className="mt-10 space-y-5">
            {[
              ['01', 'Conversa de 10 min sobre a sua rotina'],
              ['02', 'Configuramos a clinni pro com seus dados'],
              ['03', 'Você atende um paciente de teste — ponta a ponta'],
              ['04', 'Decide com tudo na mão'],
            ].map(([n, t]) => (
              <li key={n} className="flex items-start gap-4">
                <span className="font-serif text-xl italic text-ink-700">
                  {n}
                </span>
                <span className="text-[15px] leading-relaxed text-ink">{t}</span>
              </li>
            ))}
          </ol>

          <p className="mt-12 text-[13px] text-ink-500">
            Ao enviar, você concorda com nossa Política de Privacidade.
            Tratamos seus dados conforme a LGPD.
          </p>
        </section>

        <section>
          <div className="rounded-2xl border border-ink/10 bg-[#FAFAFB] p-6 sm:p-10">
            <Suspense fallback={<div className="h-96" />}>
              <LeadForm />
            </Suspense>
          </div>
        </section>
      </main>

      <footer className="border-t border-ink/5 py-8 text-center text-[12px] text-ink-500">
        © {new Date().getFullYear()} clinni pro · {site.domain}
      </footer>
    </div>
  )
}
