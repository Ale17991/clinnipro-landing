import Link from 'next/link'
import { AgendaLive } from './AgendaLive'

// Hero assimétrico: o texto ocupa a esquerda e a agenda do dia ocupa a direita,
// já rodando. Sem pílula centralizada, sem glow radial, sem mockup de dashboard
// pendurado embaixo — que é o template que toda SaaS usa. O fundo é a própria
// grade de horário, quase invisível.
export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper">
      <div aria-hidden className="time-grid pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-content px-6 pb-20 pt-12 sm:px-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-20">
          {/* Texto */}
          <div className="max-w-xl">
            <p className="stamp flex items-center gap-3 text-[10px] text-ink-500">
              <span className="font-medium text-accent-dark">07:00</span>
              <span aria-hidden className="h-px w-8 bg-accent/50" />
              A clínica abre
            </p>

            <h1 className="display mt-6 text-[2.7rem] font-medium leading-[1.03] text-ink sm:text-[3.4rem] lg:text-[3.7rem]">
              Mais que um sistema.
              <br />
              <span className="font-serif italic text-navy">
                O parceiro da sua clínica.
              </span>
            </h1>

            <p className="mt-7 max-w-md text-[17px] leading-relaxed text-ink-500">
              Agenda, prontuário, financeiro e agendamento online num só
              lugar, configurado do jeito que a sua clínica trabalha.
            </p>

            <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/demonstracao"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-navy px-7 py-3.5 text-[14px] font-medium text-white transition hover:bg-navy-deep"
              >
                Agendar demonstração
                <span aria-hidden className="text-white/60">
                  →
                </span>
              </Link>
              <a
                href="#sistema"
                className="group inline-flex items-center gap-2 text-[14px] font-medium text-ink transition hover:text-accent-dark"
              >
                Ver um dia na clínica
                <span
                  aria-hidden
                  className="transition-transform group-hover:translate-y-0.5"
                >
                  ↓
                </span>
              </a>
            </div>

            <p className="stamp mt-10 max-w-md text-[9.5px] leading-[2] text-ink-500">
              {trustBadges.join('  ·  ')}
            </p>
          </div>

          {/* A agenda rodando */}
          <div className="lg:pl-4">
            <AgendaLive />
          </div>
        </div>
      </div>
    </section>
  )
}

const trustBadges = [
  'Conforme a LGPD',
  'Dados hospedados no Brasil',
  'Teste sem cartão',
]
