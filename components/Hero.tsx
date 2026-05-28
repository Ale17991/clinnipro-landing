import { whatsappUrl } from '@/lib/site'
import { Icon } from './Icon'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="mx-auto max-w-content px-5 pt-16 text-center sm:px-8 sm:pt-24">
        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold uppercase leading-[0.98] tracking-tight text-navy sm:text-6xl md:text-[4.6rem]">
          Toda a sua clínica
          <br />
          <span className="relative inline-block">
            em um só lugar.
            <svg
              className="absolute -bottom-3 left-0 w-full"
              viewBox="0 0 300 16"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M3 11C60 4 130 3 297 8"
                stroke="#1CABB0"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h1>

        <p className="mx-auto mt-9 max-w-2xl text-lg leading-relaxed text-slate-500 sm:text-xl">
          Agenda, prontuário, financeiro e agendamento online. Substitua caderno,
          planilha e WhatsApp por um sistema só — feito para clínicas e
          consultórios.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-teal px-8 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-teal/25 transition hover:bg-teal-dark"
          >
            Agendar demonstração
          </a>
          <a
            href="#recursos"
            className="group inline-flex items-center gap-1.5 px-4 py-4 text-sm font-bold uppercase tracking-wide text-navy"
          >
            Ver recursos
            <span className="transition group-hover:translate-x-1">›</span>
          </a>
        </div>
      </div>

      <div className="relative mx-auto mt-16 max-w-5xl px-5 pb-24 sm:px-8">
        <AppMock />
      </div>
    </section>
  )
}

const opMenu = [
  { label: 'Agenda', icon: 'calendar', active: true },
  { label: 'Pacientes', icon: 'users' },
  { label: 'Tarefas', icon: 'clipboard' },
]
const anMenu = [
  { label: 'Relatórios', icon: 'scroll' },
  { label: 'Repasse Médico', icon: 'wallet' },
  { label: 'Fluxo de Caixa', icon: 'trending' },
]

const appts = [
  { time: '08:00', name: 'Maria Santos', proc: 'Consulta', status: 'Confirmado', chip: 'bg-teal/15 text-teal-dark', bar: 'bg-teal' },
  { time: '09:30', name: 'João Pereira', proc: 'Retorno', status: 'Aguardando', chip: 'bg-sky/15 text-sky', bar: 'bg-sky' },
  { time: '11:00', name: 'Ana Lima', proc: 'Avaliação', status: 'Confirmado', chip: 'bg-teal/15 text-teal-dark', bar: 'bg-teal' },
  { time: '14:00', name: 'Carlos Souza', proc: 'Procedimento', status: 'Em atendimento', chip: 'bg-amber-100 text-amber-700', bar: 'bg-amber-400' },
]

function SideItem({ label, icon, active }: { label: string; icon: string; active?: boolean }) {
  return (
    <div
      className={`flex items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium ${
        active ? 'bg-sky/20 text-sky-light' : 'text-white/70'
      }`}
    >
      <Icon name={icon} className="h-4 w-4 shrink-0 opacity-90" />
      <span className="truncate">{label}</span>
    </div>
  )
}

function AppMock() {
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl bg-white shadow-2xl shadow-navy/20 ring-1 ring-slate-200">
        {/* barra do navegador */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-100 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <div className="ml-3 hidden rounded-md bg-white px-3 py-1 text-xs text-slate-400 ring-1 ring-slate-200 sm:block">
            app.clinnipro.io
          </div>
        </div>

        <div className="flex h-[400px] sm:h-[470px]">
          {/* sidebar fiel ao app */}
          <aside className="hidden w-56 flex-col bg-navy p-4 sm:flex">
            <div className="mb-6 flex items-center gap-2.5">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-primary text-white">
                <Icon name="stethoscope" className="h-4 w-4" />
              </div>
              <span className="truncate text-sm font-bold tracking-tight text-white">
                Clínica Bem-Estar
              </span>
            </div>

            <div className="mb-1 px-3 text-[9px] font-bold uppercase tracking-widest text-white/40">
              Operação
            </div>
            <div className="space-y-0.5">
              {opMenu.map((m) => (
                <SideItem key={m.label} {...m} />
              ))}
            </div>

            <div className="mb-1 mt-4 px-3 text-[9px] font-bold uppercase tracking-widest text-white/40">
              Análise
            </div>
            <div className="space-y-0.5">
              {anMenu.map((m) => (
                <SideItem key={m.label} {...m} />
              ))}
            </div>

            <div className="mt-4 border-t border-white/10 pt-3">
              <SideItem label="Configurações" icon="settings" />
            </div>

            <div className="mt-auto flex items-center gap-2 rounded-xl bg-white/5 p-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-[11px] font-bold text-white">
                H
              </div>
              <div className="min-w-0">
                <p className="truncate text-xs font-semibold text-white">Dra. Helena</p>
                <p className="text-[10px] text-white/45">Administradora</p>
              </div>
            </div>
          </aside>

          {/* área principal */}
          <div className="flex min-w-0 flex-1 flex-col bg-slate-50">
            {/* header branco */}
            <div className="flex h-14 items-center justify-between border-b border-slate-200 bg-white px-5">
              <span className="text-base font-bold tracking-tight text-slate-900">Agenda</span>
              <div className="flex items-center gap-3 text-slate-400">
                <div className="hidden items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-xs lg:flex">
                  <Icon name="search" className="h-3.5 w-3.5" />
                  <span>Buscar paciente…</span>
                </div>
                <Icon name="bell" className="h-4 w-4" />
                <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                  Sair
                </span>
              </div>
            </div>

            {/* conteúdo: agenda */}
            <div className="flex-1 overflow-hidden p-5">
              <div className="mb-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-slate-900">Hoje · 28 de maio</p>
                  <p className="text-xs text-slate-400">4 atendimentos</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="hidden rounded-lg bg-white p-0.5 text-xs ring-1 ring-slate-200 sm:flex">
                    <span className="rounded-md bg-primary px-2.5 py-1 font-semibold text-white">Dia</span>
                    <span className="px-2.5 py-1 text-slate-500">Semana</span>
                  </div>
                  <span className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-white">
                    + Novo atendimento
                  </span>
                </div>
              </div>

              <div className="space-y-2.5">
                {appts.map((a) => (
                  <div
                    key={a.time}
                    className="flex items-center gap-3 rounded-xl bg-white px-3.5 py-3 ring-1 ring-slate-100"
                  >
                    <span className="w-11 text-xs font-bold text-slate-400">{a.time}</span>
                    <span className={`h-9 w-1.5 rounded-full ${a.bar}`} />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-slate-900">{a.name}</p>
                      <p className="text-xs text-slate-400">{a.proc}</p>
                    </div>
                    <span className={`hidden rounded-full px-2.5 py-1 text-[11px] font-semibold sm:inline ${a.chip}`}>
                      {a.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* celular sobreposto — lembrete */}
      <div className="absolute -bottom-6 right-2 hidden w-44 rotate-3 overflow-hidden rounded-[2rem] bg-navy-900 p-2 shadow-2xl shadow-navy/40 ring-1 ring-white/10 lg:block">
        <div className="rounded-[1.6rem] bg-navy-deep p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-teal">
            Lembrete enviado
          </p>
          <p className="mt-2 text-xs leading-snug text-white/85">
            Olá, Maria! Sua consulta é amanhã às 08:00. Confirma?
          </p>
          <div className="mt-3 flex gap-1.5">
            <span className="rounded-md bg-teal px-2 py-1 text-[10px] font-semibold text-white">
              Confirmar
            </span>
            <span className="rounded-md bg-white/10 px-2 py-1 text-[10px] text-white/70">
              Remarcar
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
