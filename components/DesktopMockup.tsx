'use client'

import { useState } from 'react'
import { site } from '@/lib/site'
import { Icon } from './Icon'

// Mockup do app no desktop — interativo: a sidebar troca a tela principal,
// igual ao celular. Sem dados reais, mesma estética do sistema.

type ScreenId =
  | 'agenda'
  | 'pacientes'
  | 'prontuario'
  | 'tarefas'
  | 'repasse'
  | 'fluxo'
  | 'relatorios'

const opMenu: { id: ScreenId; label: string; icon: string }[] = [
  { id: 'agenda', label: 'Agenda', icon: 'calendar' },
  { id: 'pacientes', label: 'Pacientes', icon: 'users' },
  { id: 'prontuario', label: 'Prontuário', icon: 'clipboard' },
  { id: 'tarefas', label: 'Tarefas', icon: 'check' },
]
const anMenu: { id: ScreenId; label: string; icon: string }[] = [
  { id: 'repasse', label: 'Repasse médico', icon: 'wallet' },
  { id: 'fluxo', label: 'Fluxo de caixa', icon: 'trending' },
  { id: 'relatorios', label: 'Relatórios', icon: 'scroll' },
]
const titles: Record<ScreenId, string> = {
  agenda: 'Agenda',
  pacientes: 'Pacientes',
  prontuario: 'Prontuário',
  tarefas: 'Tarefas',
  repasse: 'Repasse médico',
  fluxo: 'Fluxo de caixa',
  relatorios: 'Relatórios',
}

const toneMap: Record<string, string> = {
  teal: 'bg-teal',
  sky: 'bg-sky',
  amber: 'bg-amber-400',
}

export function DesktopMockup() {
  const [active, setActive] = useState<ScreenId>('agenda')

  return (
    <div className="relative">
      <div
        aria-hidden
        className="absolute inset-x-12 -bottom-6 h-24 rounded-[100%] bg-ink/15 blur-3xl"
      />
      <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_-24px_rgba(11,27,38,0.25),0_0_0_1px_rgba(11,27,38,0.06)]">
        {/* Top bar */}
        <div className="flex h-9 items-center gap-2 border-b border-ink/5 bg-[#FAFAFB] px-4 text-[11px] text-ink-500">
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="h-2 w-2 rounded-full bg-ink/15" />
          <span className="ml-3">{site.appUrl.replace('https://', '')}</span>
          <span className="ml-auto hidden text-[10px] text-ink-500/70 sm:block">
            Clique nos menus →
          </span>
        </div>

        <div className="flex h-[440px] sm:h-[480px]">
          {/* Sidebar interativa */}
          <aside className="hidden w-48 shrink-0 flex-col bg-navy-900 p-3.5 sm:flex">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded bg-teal text-[10px] font-bold text-navy-900">
                C
              </div>
              <span className="text-[11px] font-semibold text-white">
                Clínica Bem-Estar
              </span>
            </div>

            <SideGroup label="Operação" items={opMenu} active={active} onPick={setActive} />
            <div className="mt-5">
              <SideGroup label="Análise" items={anMenu} active={active} onPick={setActive} />
            </div>

            <div className="mt-auto flex items-center gap-2 border-t border-white/5 pt-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold text-white">
                H
              </div>
              <p className="truncate text-[10.5px] font-medium text-white">
                Dra. Helena
              </p>
            </div>
          </aside>

          {/* Área principal */}
          <div className="flex min-w-0 flex-1 flex-col bg-white">
            <div className="flex h-12 items-center justify-between border-b border-ink/5 px-5">
              <p className="text-[13px] font-semibold text-ink">{titles[active]}</p>
              <Icon name="search" className="h-3.5 w-3.5 text-ink-500" />
            </div>
            <div className="flex-1 overflow-y-auto px-5 py-5">
              {active === 'agenda' && <Agenda />}
              {active === 'pacientes' && <Pacientes />}
              {active === 'prontuario' && <Prontuario />}
              {active === 'tarefas' && <Tarefas />}
              {active === 'repasse' && <Repasse />}
              {active === 'fluxo' && <Fluxo />}
              {active === 'relatorios' && <Relatorios />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SideGroup({
  label,
  items,
  active,
  onPick,
}: {
  label: string
  items: { id: ScreenId; label: string; icon: string }[]
  active: ScreenId
  onPick: (id: ScreenId) => void
}) {
  return (
    <>
      <p className="mb-1 px-3 text-[9px] font-medium uppercase tracking-[0.15em] text-white/30">
        {label}
      </p>
      <div className="space-y-0.5">
        {items.map((m) => {
          const on = m.id === active
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => onPick(m.id)}
              className={`flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-left text-[12.5px] font-medium transition ${
                on
                  ? 'bg-white/10 text-white'
                  : 'text-white/55 hover:bg-white/[0.06] hover:text-white/80'
              }`}
            >
              <Icon name={m.icon} className="h-3.5 w-3.5 shrink-0 opacity-80" />
              <span className="truncate">{m.label}</span>
            </button>
          )
        })}
      </div>
    </>
  )
}

/* ---------- Telas ---------- */

const appts = [
  { time: '08:00', name: 'Maria Santos', proc: 'Consulta · Dra. Helena', tone: 'teal' },
  { time: '09:30', name: 'João Pereira', proc: 'Retorno · Dr. Rafael', tone: 'sky' },
  { time: '11:00', name: 'Ana Lima', proc: 'Avaliação · Dra. Carla', tone: 'amber' },
  { time: '14:00', name: 'Carlos Souza', proc: 'Procedimento · Dra. Helena', tone: 'teal' },
]

function Agenda() {
  const [sel, setSel] = useState<string | null>('08:00')
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="text-[13px] font-medium text-ink">Quarta, 28 de maio</p>
        <p className="text-[11px] text-ink-500">4 atendimentos</p>
      </div>
      <div className="mt-4 space-y-2">
        {appts.map((a) => {
          const on = sel === a.time
          return (
            <button
              key={a.time}
              type="button"
              onClick={() => setSel(on ? null : a.time)}
              className={`flex w-full items-center gap-3 rounded-lg border bg-white px-3 py-2.5 text-left transition ${
                on ? 'border-teal/50 ring-1 ring-teal/25' : 'border-ink/5 hover:border-teal/40 hover:bg-[#FAFAFB]'
              }`}
            >
              <span className="w-10 text-[11px] font-medium text-ink-500">{a.time}</span>
              <span className={`h-7 w-[2px] rounded-full ${toneMap[a.tone]}`} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[12.5px] font-medium text-ink">{a.name}</p>
                <p className="text-[10.5px] text-ink-500">{a.proc}</p>
              </div>
              {on && <Icon name="check" className="h-3.5 w-3.5 text-teal" />}
            </button>
          )
        })}
      </div>
    </div>
  )
}

const patients = [
  { name: 'Maria Santos', tag: 'Unimed', init: 'MS' },
  { name: 'João Pereira', tag: 'Particular', init: 'JP' },
  { name: 'Ana Lima', tag: 'Bradesco Saúde', init: 'AL' },
  { name: 'Carlos Souza', tag: 'Particular', init: 'CS' },
  { name: 'Beatriz Rocha', tag: 'SulAmérica', init: 'BR' },
]

function Pacientes() {
  return (
    <div>
      <div className="flex items-center gap-2 rounded-lg border border-ink/10 px-3 py-2">
        <Icon name="search" className="h-3.5 w-3.5 text-ink-500/60" />
        <span className="text-[12px] text-ink-500/60">Buscar paciente</span>
      </div>
      <div className="mt-3 space-y-1.5">
        {patients.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 rounded-lg border border-ink/5 px-3 py-2.5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/10 text-[10px] font-semibold text-teal-dark">
              {p.init}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12.5px] font-medium text-ink">{p.name}</p>
              <p className="text-[10.5px] text-ink-500">{p.tag}</p>
            </div>
            <Icon name="clipboard" className="h-3.5 w-3.5 text-ink-500/30" />
          </div>
        ))}
      </div>
    </div>
  )
}

const timeline = [
  { date: '28 mai', title: 'Consulta de retorno', sub: 'Dra. Helena · 30 min', on: true },
  { date: '28 mai', title: 'Sinais vitais', sub: 'PA 120/80 · FC 72 · IMC 22,1', on: true },
  { date: '28 mai', title: 'Prescrição digital', sub: 'enviada ao paciente', on: true },
  { date: '14 mai', title: 'Plano de tratamento', sub: '6 sessões · fisioterapia', on: false },
]

function Prontuario() {
  return (
    <div>
      <div className="flex items-center justify-between rounded-lg border border-ink/5 bg-[#FAFAFB] px-4 py-3">
        <div>
          <p className="text-[13px] font-semibold text-ink">Maria Santos</p>
          <p className="text-[10.5px] text-ink-500">38 anos · Unimed</p>
        </div>
        <span className="rounded-full bg-rose-50 px-2.5 py-1 text-[10px] font-medium text-rose-600">
          Alergia: dipirona
        </span>
      </div>
      <div className="mt-4 space-y-3 pl-1">
        {timeline.map((t, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span className={`mt-1 h-2 w-2 rounded-full ${t.on ? 'bg-teal' : 'bg-ink/20'}`} />
              {i < timeline.length - 1 && <span className="my-0.5 w-[1.5px] flex-1 bg-ink/10" />}
            </div>
            <div className="-mt-0.5 pb-1">
              <p className="text-[10.5px] font-medium text-ink-500">{t.date}</p>
              <p className="text-[12.5px] font-medium text-ink">{t.title}</p>
              <p className="text-[10.5px] text-ink-500">{t.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const tasks = [
  { t: 'Confirmar exames da Maria Santos', who: 'Recepção', status: 'Hoje', tone: 'amber' },
  { t: 'Enviar orçamento — João Pereira', who: 'Dra. Helena', status: 'Atrasada', tone: 'rose' },
  { t: 'Retorno de ligação — Ana Lima', who: 'Recepção', status: 'Amanhã', tone: 'sky' },
  { t: 'Fechar repasse de maio', who: 'Financeiro', status: 'Concluída', tone: 'teal' },
]
const taskTone: Record<string, string> = {
  amber: 'bg-amber-50 text-amber-700',
  rose: 'bg-rose-50 text-rose-600',
  sky: 'bg-sky/10 text-sky',
  teal: 'bg-teal/10 text-teal-dark',
}

function Tarefas() {
  return (
    <div className="space-y-2">
      {tasks.map((k) => (
        <div
          key={k.t}
          className="flex items-center gap-3 rounded-lg border border-ink/5 px-3 py-2.5"
        >
          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-ink/15" />
          <div className="min-w-0 flex-1">
            <p className="truncate text-[12.5px] font-medium text-ink">{k.t}</p>
            <p className="text-[10.5px] text-ink-500">{k.who}</p>
          </div>
          <span className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${taskTone[k.tone]}`}>
            {k.status}
          </span>
        </div>
      ))}
    </div>
  )
}

const repasse = [
  { name: 'Dra. Helena Martins', n: 42, v: 'R$ 18.420' },
  { name: 'Dr. Rafael Costa', n: 31, v: 'R$ 12.940' },
  { name: 'Dra. Carla Andrade', n: 24, v: 'R$ 9.680' },
]

function Repasse() {
  return (
    <div>
      <div className="rounded-xl bg-navy-900 px-5 py-4 text-white">
        <p className="text-[10.5px] text-white/60">Repasse · maio 2026</p>
        <p className="mt-1 text-[24px] font-semibold tracking-tight">R$ 41.040,00</p>
        <p className="mt-1 text-[10px] text-white/45">3 profissionais · fechamento automático</p>
      </div>
      <div className="mt-3 space-y-1.5">
        {repasse.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between rounded-lg border border-ink/5 px-3 py-2.5"
          >
            <div className="min-w-0">
              <p className="truncate text-[12px] font-medium text-ink">{r.name}</p>
              <p className="text-[10px] text-ink-500">{r.n} atendimentos</p>
            </div>
            <span className="text-[12.5px] font-semibold text-ink">{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const bars = [40, 55, 35, 70, 50, 80, 45, 65, 60, 90, 72, 84]

function Fluxo() {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <p className="text-[13px] font-medium text-ink">Próximos 12 dias</p>
        <p className="text-[11px] text-ink-500">saldo projetado</p>
      </div>
      <div className="mt-6 flex h-44 items-end gap-2">
        {bars.map((h, i) => (
          <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
            <span
              className={`w-full rounded-sm ${i === bars.length - 1 ? 'bg-teal' : 'bg-ink/10'}`}
              style={{ height: `${h * 1.4}px` }}
            />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-4 text-[10.5px] text-ink-500">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-ink/10" /> entradas
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-sm bg-teal" /> hoje
        </span>
      </div>
    </div>
  )
}

const kpis = [
  { label: 'Faturamento', value: 'R$ 128k', delta: '+12%' },
  { label: 'Atendimentos', value: '312', delta: '+8%' },
  { label: 'Ticket médio', value: 'R$ 410', delta: '+3%' },
]
const repBars = [55, 70, 48, 82, 64, 90]

function Relatorios() {
  return (
    <div>
      <div className="grid grid-cols-3 gap-2.5">
        {kpis.map((k) => (
          <div key={k.label} className="rounded-lg border border-ink/5 px-3 py-3">
            <p className="text-[10px] text-ink-500">{k.label}</p>
            <p className="mt-1 text-[15px] font-semibold text-ink">{k.value}</p>
            <p className="text-[10px] font-medium text-teal-dark">{k.delta}</p>
          </div>
        ))}
      </div>
      <p className="mt-5 text-[11px] font-medium text-ink-500">Receita por mês</p>
      <div className="mt-3 flex h-28 items-end gap-3">
        {repBars.map((h, i) => (
          <span
            key={i}
            className={`flex-1 rounded-t-sm ${i === repBars.length - 1 ? 'bg-teal' : 'bg-ink/10'}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  )
}
