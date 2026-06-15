import Link from 'next/link'
import { site } from '@/lib/site'
import { Icon } from './Icon'

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
        {/* Coluna única, centrado, muito espaço */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-medium uppercase tracking-[0.18em] text-ink-500">
            Sistema de gestão para clínicas
          </p>

          <h1 className="display mt-7 text-[2.6rem] font-medium leading-[1.05] text-ink sm:text-[3.6rem] md:text-[4.2rem]">
            A sua clínica,{' '}
            <span className="font-serif italic text-ink-700">
              inteira
            </span>
            ,
            <br className="hidden sm:block" />
            em um sistema só.
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-500">
            Agenda, prontuário, financeiro e agendamento online — pensados para
            a realidade da clínica brasileira.
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

        {/* Mockup grande e limpo, com o celular sobreposto (estilo homio) */}
        <div className="relative mx-auto mt-20 max-w-5xl sm:mt-24">
          <AppMockup />
          <PhoneMockup />
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

const opMenu = [
  { label: 'Agenda', icon: 'calendar', active: true },
  { label: 'Pacientes', icon: 'users' },
  { label: 'Prontuário', icon: 'clipboard' },
  { label: 'Tarefas', icon: 'check' },
]
const anMenu = [
  { label: 'Repasse médico', icon: 'wallet' },
  { label: 'Fluxo de caixa', icon: 'trending' },
  { label: 'Relatórios', icon: 'scroll' },
]

const appts = [
  { time: '08:00', name: 'Maria Santos', proc: 'Consulta · Dra. Helena', tone: 'teal' },
  { time: '09:30', name: 'João Pereira', proc: 'Retorno · Dr. Rafael', tone: 'sky' },
  { time: '11:00', name: 'Ana Lima', proc: 'Avaliação · Dra. Carla', tone: 'amber' },
  { time: '14:00', name: 'Carlos Souza', proc: 'Procedimento · Dra. Helena', tone: 'teal' },
]

const toneMap: Record<string, string> = {
  teal: 'bg-teal',
  sky: 'bg-sky',
  amber: 'bg-amber-400',
}

function SideItem({
  label,
  icon,
  active,
}: {
  label: string
  icon: string
  active?: boolean
}) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-md px-3 py-2 text-[12.5px] font-medium transition ${
        active
          ? 'bg-white/10 text-white'
          : 'text-white/55 hover:bg-white/[0.06] hover:text-white/80'
      }`}
    >
      <Icon name={icon} className="h-3.5 w-3.5 shrink-0 opacity-80" />
      <span className="truncate">{label}</span>
    </div>
  )
}

// Celular sobreposto ao canto do mockup desktop — mostra a agenda no mobile.
function PhoneMockup() {
  return (
    <div className="absolute -bottom-8 right-2 hidden w-[188px] rotate-[3deg] lg:block xl:-right-8">
      <div className="overflow-hidden rounded-[1.9rem] bg-ink p-2 shadow-[0_30px_70px_-20px_rgba(11,27,38,0.5)] ring-1 ring-white/10">
        <div className="overflow-hidden rounded-[1.5rem] bg-white">
          {/* Entalhe */}
          <div className="flex h-7 items-center justify-center">
            <span className="h-1 w-10 rounded-full bg-ink/15" />
          </div>
          <div className="flex items-center justify-between px-4 pb-2">
            <p className="text-[12px] font-semibold text-ink">Hoje</p>
            <span className="text-[9px] font-medium text-ink-500">
              4 atendimentos
            </span>
          </div>
          <div className="space-y-1.5 px-3">
            {appts.map((a) => (
              <div
                key={a.time}
                className="flex items-center gap-2 rounded-lg border border-ink/5 px-2.5 py-2"
              >
                <span className="w-7 text-[9px] font-medium text-ink-500">
                  {a.time}
                </span>
                <span className={`h-5 w-[2px] rounded-full ${toneMap[a.tone]}`} />
                <p className="truncate text-[10px] font-medium text-ink">
                  {a.name}
                </p>
              </div>
            ))}
          </div>
          {/* Barra de navegação inferior */}
          <div className="mt-2 flex items-center justify-around border-t border-ink/5 py-2.5">
            {['calendar', 'users', 'clipboard', 'wallet'].map((ic, i) => (
              <Icon
                key={ic}
                name={ic}
                className={`h-4 w-4 ${i === 0 ? 'text-teal' : 'text-ink-500/40'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function AppMockup() {
  return (
    <div className="relative">
      {/* Sombra ambiente em vez de ring berrante */}
      <div
        aria-hidden
        className="absolute inset-x-12 -bottom-6 h-24 rounded-[100%] bg-ink/15 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_-24px_rgba(11,27,38,0.25),0_0_0_1px_rgba(11,27,38,0.06)]">
        {/* Top bar discreta */}
        <div className="flex h-9 items-center gap-2 border-b border-ink/5 bg-[#FAFAFB] px-4 text-[11px] text-ink-500">
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="ml-3">{site.appUrl.replace('https://', '')}</span>
        </div>

        <div className="flex h-[440px] sm:h-[480px]">
          {/* Sidebar — sem badges, mais sóbria */}
          <aside className="hidden w-48 shrink-0 flex-col bg-navy-900 p-3.5 sm:flex">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-teal text-[10px] font-bold text-navy-900">
                C
              </div>
              <span className="text-[11px] font-semibold text-white">
                Clínica Bem-Estar
              </span>
            </div>

            <p className="mb-1 px-3 text-[9px] font-medium uppercase tracking-[0.15em] text-white/30">
              Operação
            </p>
            <div className="space-y-0.5">
              {opMenu.map((m) => (
                <SideItem key={m.label} {...m} />
              ))}
            </div>

            <p className="mb-1 mt-5 px-3 text-[9px] font-medium uppercase tracking-[0.15em] text-white/30">
              Análise
            </p>
            <div className="space-y-0.5">
              {anMenu.map((m) => (
                <SideItem key={m.label} {...m} />
              ))}
            </div>

            <div className="mt-auto flex items-center gap-2 border-t border-white/5 pt-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold text-white">
                H
              </div>
              <div className="min-w-0">
                <p className="truncate text-[10.5px] font-medium text-white">
                  Dra. Helena
                </p>
              </div>
            </div>
          </aside>

          {/* Área principal — minimal */}
          <div className="flex min-w-0 flex-1 flex-col bg-white">
            <div className="flex h-12 items-center justify-between border-b border-ink/5 px-5">
              <p className="text-[13px] font-semibold text-ink">Agenda</p>
              <Icon name="search" className="h-3.5 w-3.5 text-ink-500" />
            </div>

            <div className="flex-1 overflow-hidden px-5 pt-5">
              <div className="flex items-baseline justify-between">
                <p className="text-[13px] font-medium text-ink">
                  Quarta, 28 de maio
                </p>
                <p className="text-[11px] text-ink-500">4 atendimentos</p>
              </div>

              <div className="mt-4 space-y-2">
                {appts.map((a) => (
                  <div
                    key={a.time}
                    className="flex items-center gap-3 rounded-lg border border-ink/5 bg-white px-3 py-2.5 transition hover:border-teal/40 hover:bg-[#FAFAFB]"
                  >
                    <span className="w-10 text-[11px] font-medium text-ink-500">
                      {a.time}
                    </span>
                    <span className={`h-7 w-[2px] rounded-full ${toneMap[a.tone]}`} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12.5px] font-medium text-ink">
                        {a.name}
                      </p>
                      <p className="text-[10.5px] text-ink-500">{a.proc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
