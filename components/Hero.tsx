import Link from 'next/link'
import { Icon } from './Icon'
import { DesktopMockup } from './DesktopMockup'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* Glow sutil — sem dots, sem ruído */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[640px] w-[1100px] -translate-x-1/2 bg-gradient-radial from-teal/[0.07] via-transparent to-transparent blur-3xl"
        style={{
          backgroundImage:
            'radial-gradient(ellipse at center top, rgba(28,171,176,0.10), transparent 60%)',
        }}
      />

      <div className="relative mx-auto max-w-content px-6 pb-24 pt-24 sm:px-10 sm:pt-32 lg:pb-32 lg:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <a
            href="#parceria"
            className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-teal/[0.06] px-4 py-1.5 text-[12.5px] font-medium text-teal-dark transition hover:bg-teal/10"
          >
            <Icon name="sparkle" className="h-3.5 w-3.5" />
            Cada clínica tem uma conta sob medida
          </a>

          <h1 className="display mt-6 text-[2.6rem] font-medium leading-[1.05] text-ink sm:text-[3.6rem] md:text-[4.2rem]">
            Mais que um sistema.
            <br className="hidden sm:block" />{' '}
            <span className="font-serif italic text-ink-700">
              O parceiro da sua clínica.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-500">
            Agenda, prontuário, financeiro e agendamento online num só lugar —
            configurado do jeito que a sua clínica trabalha.
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
              href="#sistema"
              className="text-[14px] font-medium text-ink-500 transition hover:text-ink"
            >
              Conhecer o sistema
            </a>
          </div>

          {/* Selos de confiança — convenção do nicho, sem números inflados */}
          <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-[12.5px] text-ink-500">
            {trustBadges.map((b) => (
              <li key={b.label} className="flex items-center gap-1.5">
                <Icon name={b.icon} className="h-3.5 w-3.5 text-teal" />
                {b.label}
              </li>
            ))}
          </ul>
        </div>

        {/* App no desktop — interativo: clique nos menus troca a tela */}
        <div className="relative mx-auto mt-20 max-w-5xl sm:mt-24">
          <DesktopMockup />
        </div>
      </div>
    </section>
  )
}

const trustBadges = [
  { label: 'Conforme a LGPD', icon: 'shield' },
  { label: 'Dados hospedados no Brasil', icon: 'database' },
  { label: 'Teste sem cartão de crédito', icon: 'check' },
]
