'use client'

import { useState } from 'react'
import { Icon } from './Icon'

// Demonstração do sistema rodando no celular — minimamente interativa:
// a barra inferior troca de tela e os atendimentos da agenda são selecionáveis.
// Tudo client-side, sem dados reais (mesma estética do app).

const tabs = [
  { id: 'agenda', label: 'Agenda', icon: 'calendar' },
  { id: 'pacientes', label: 'Pacientes', icon: 'users' },
  { id: 'prontuario', label: 'Prontuário', icon: 'clipboard' },
  { id: 'financeiro', label: 'Financeiro', icon: 'wallet' },
] as const

type TabId = (typeof tabs)[number]['id']

const toneMap: Record<string, string> = {
  teal: 'bg-teal',
  sky: 'bg-sky',
  amber: 'bg-amber-400',
}

export function MobileShowcase() {
  const [tab, setTab] = useState<TabId>('agenda')

  return (
    <section
      id="celular"
      className="border-t border-ink/5 bg-[#FAFAFB] py-28 sm:py-36"
    >
      <div className="mx-auto grid max-w-content items-center gap-16 px-6 sm:px-10 lg:grid-cols-2 lg:gap-12">
        {/* Texto */}
        <div className="order-2 max-w-md lg:order-1">
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-500">
            No celular
          </p>
          <h2 className="display mt-4 text-4xl font-medium leading-[1.1] text-ink sm:text-5xl">
            A clínica inteira cabe{' '}
            <span className="font-serif italic text-ink-700">no seu bolso</span>.
          </h2>
          <p className="mt-6 text-[15px] leading-relaxed text-ink-500">
            Atenda, agende, abra o prontuário e confira o repasse do celular ou
            do tablet. Sem instalar nada — só abrir e usar.
          </p>

          <p className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[13px] font-medium text-ink-700 ring-1 ring-ink/10">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal/60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-teal" />
            </span>
            Toque na barra de baixo para navegar
          </p>
        </div>

        {/* Celular */}
        <div className="order-1 flex justify-center lg:order-2">
          <Phone tab={tab} onTab={setTab} />
        </div>
      </div>
    </section>
  )
}

function Phone({ tab, onTab }: { tab: TabId; onTab: (t: TabId) => void }) {
  return (
    <div className="relative w-[300px] sm:w-[330px]">
      {/* Sombra ambiente */}
      <div
        aria-hidden
        className="absolute inset-x-8 -bottom-4 h-24 rounded-[100%] bg-ink/20 blur-3xl"
      />

      {/* Botões laterais (volume + ação) */}
      <span
        aria-hidden
        className="absolute -left-[2px] top-[108px] h-7 w-[2.5px] rounded-l bg-ink/70"
      />
      <span
        aria-hidden
        className="absolute -left-[2px] top-[150px] h-12 w-[2.5px] rounded-l bg-ink/70"
      />
      <span
        aria-hidden
        className="absolute -left-[2px] top-[206px] h-12 w-[2.5px] rounded-l bg-ink/70"
      />
      {/* Botão de bloqueio (direita) */}
      <span
        aria-hidden
        className="absolute -right-[2px] top-[170px] h-16 w-[2.5px] rounded-r bg-ink/70"
      />

      {/* Moldura externa metálica */}
      <div className="relative rounded-[3rem] bg-gradient-to-b from-[#33454f] via-ink to-[#19262f] p-[3px] shadow-[0_44px_90px_-26px_rgba(11,27,38,0.6)]">
        {/* Bisel preto */}
        <div className="rounded-[2.85rem] bg-black p-[7px] ring-1 ring-white/[0.06]">
          <div className="relative overflow-hidden rounded-[2.4rem] bg-white">
            {/* Reflexo sutil na tela */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-br from-white/10 via-transparent to-transparent"
            />

            {/* Dynamic island */}
            <div className="absolute left-1/2 top-2.5 z-30 flex h-[26px] w-[90px] -translate-x-1/2 items-center justify-end rounded-full bg-black pr-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#1c2b33] ring-1 ring-white/10" />
            </div>

            {/* Status bar */}
            <div className="relative z-10 flex h-11 items-end justify-between bg-white px-6 pb-1.5 text-[11px] font-semibold tracking-tight text-ink">
              <span>9:41</span>
              <StatusIcons />
            </div>

          {/* App header */}
          <div className="flex items-center justify-between border-b border-ink/5 px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-md bg-teal text-[10px] font-bold text-navy-900">
                C
              </div>
              <span className="text-[12px] font-semibold text-ink">
                Clínica Bem-Estar
              </span>
            </div>
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-ink/[0.06] text-[9px] font-semibold text-ink-700">
              H
            </div>
          </div>

          {/* Tela ativa */}
          <div className="h-[420px] overflow-hidden bg-[#FAFAFB]">
            {tab === 'agenda' && <AgendaScreen />}
            {tab === 'pacientes' && <PacientesScreen />}
            {tab === 'prontuario' && <ProntuarioScreen />}
            {tab === 'financeiro' && <FinanceiroScreen />}
          </div>

          {/* Barra inferior interativa */}
          <div className="flex items-center justify-around border-t border-ink/5 bg-white px-2 pb-2 pt-2">
            {tabs.map((t) => {
              const active = t.id === tab
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => onTab(t.id)}
                  className="flex flex-1 flex-col items-center gap-1 rounded-lg py-1.5 transition active:scale-95"
                  aria-pressed={active}
                  aria-label={t.label}
                >
                  <Icon
                    name={t.icon}
                    className={`h-[18px] w-[18px] transition ${
                      active ? 'text-teal' : 'text-ink-500/45'
                    }`}
                  />
                  <span
                    className={`text-[9px] font-medium transition ${
                      active ? 'text-teal' : 'text-ink-500/45'
                    }`}
                  >
                    {t.label}
                  </span>
                </button>
              )
            })}
          </div>

            {/* Home indicator */}
            <div className="flex justify-center bg-white pb-2 pt-1.5">
              <span className="h-1 w-28 rounded-full bg-ink/75" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatusIcons() {
  return (
    <div className="flex items-center gap-1.5 text-ink">
      {/* Sinal */}
      <svg width="17" height="11" viewBox="0 0 17 11" fill="currentColor" aria-hidden>
        <rect x="0" y="7" width="3" height="4" rx="1" />
        <rect x="4.5" y="5" width="3" height="6" rx="1" />
        <rect x="9" y="2.5" width="3" height="8.5" rx="1" />
        <rect x="13.5" y="0" width="3" height="11" rx="1" opacity="0.3" />
      </svg>
      {/* Wi-Fi */}
      <svg
        width="15"
        height="11"
        viewBox="0 0 16 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        aria-hidden
      >
        <path d="M1 4.2a10 10 0 0 1 14 0" />
        <path d="M3.6 6.9a6.2 6.2 0 0 1 8.8 0" />
        <path d="M6.1 9.4a2.7 2.7 0 0 1 3.8 0" />
      </svg>
      {/* Bateria */}
      <span className="flex items-center">
        <span className="relative flex h-[11px] w-[22px] items-center rounded-[3px] border border-ink/40 p-[1.5px]">
          <span className="h-full w-[72%] rounded-[1.5px] bg-ink" />
        </span>
        <span className="ml-[1px] h-[4px] w-[1.5px] rounded-r bg-ink/40" />
      </span>
    </div>
  )
}

const appts = [
  { time: '08:00', name: 'Maria Santos', proc: 'Consulta · Dra. Helena', tone: 'teal' },
  { time: '09:30', name: 'João Pereira', proc: 'Retorno · Dr. Rafael', tone: 'sky' },
  { time: '11:00', name: 'Ana Lima', proc: 'Avaliação · Dra. Carla', tone: 'amber' },
  { time: '14:00', name: 'Carlos Souza', proc: 'Procedimento · Dra. Helena', tone: 'teal' },
]

function AgendaScreen() {
  const [selected, setSelected] = useState<string | null>('08:00')
  return (
    <div className="px-4 pt-4">
      <div className="flex items-baseline justify-between">
        <p className="text-[13px] font-semibold text-ink">Quarta, 28 mai</p>
        <span className="text-[10px] text-ink-500">4 atendimentos</span>
      </div>
      <div className="mt-3 space-y-2">
        {appts.map((a) => {
          const on = selected === a.time
          return (
            <button
              key={a.time}
              type="button"
              onClick={() => setSelected(on ? null : a.time)}
              className={`flex w-full items-center gap-2.5 rounded-xl border bg-white px-3 py-2.5 text-left transition active:scale-[0.99] ${
                on ? 'border-teal/50 ring-1 ring-teal/30' : 'border-ink/5'
              }`}
            >
              <span className="w-9 text-[10px] font-medium text-ink-500">
                {a.time}
              </span>
              <span className={`h-7 w-[2px] rounded-full ${toneMap[a.tone]}`} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11.5px] font-medium text-ink">
                  {a.name}
                </p>
                <p className="truncate text-[9.5px] text-ink-500">{a.proc}</p>
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

function PacientesScreen() {
  return (
    <div className="px-4 pt-4">
      <div className="flex items-center gap-2 rounded-xl bg-white px-3 py-2 ring-1 ring-ink/5">
        <Icon name="search" className="h-3.5 w-3.5 text-ink-500/60" />
        <span className="text-[11px] text-ink-500/60">Buscar paciente</span>
      </div>
      <div className="mt-3 space-y-1.5">
        {patients.map((p) => (
          <div
            key={p.name}
            className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 ring-1 ring-ink/5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal/10 text-[10px] font-semibold text-teal-dark">
              {p.init}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[11.5px] font-medium text-ink">
                {p.name}
              </p>
              <p className="text-[9.5px] text-ink-500">{p.tag}</p>
            </div>
            <Icon name="link" className="h-3.5 w-3.5 text-ink-500/30" />
          </div>
        ))}
      </div>
    </div>
  )
}

const timeline = [
  { date: '28 mai', title: 'Consulta de retorno', sub: 'Dra. Helena · 30 min', on: true },
  { date: '28 mai', title: 'Sinais vitais', sub: 'PA 120/80 · FC 72 · IMC 22,1', on: true },
  { date: '28 mai', title: 'Prescrição digital', sub: 'via Memed · enviada', on: true },
  { date: '14 mai', title: 'Plano de tratamento', sub: '6 sessões · fisioterapia', on: false },
]

function ProntuarioScreen() {
  return (
    <div className="px-4 pt-4">
      <div className="rounded-xl bg-white p-3 ring-1 ring-ink/5">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[12.5px] font-semibold text-ink">Maria Santos</p>
            <p className="text-[9.5px] text-ink-500">38 anos · Unimed</p>
          </div>
          <span className="rounded-full bg-rose-50 px-2 py-0.5 text-[9px] font-medium text-rose-600">
            Alergia: dipirona
          </span>
        </div>
      </div>
      <div className="mt-3 space-y-3 pl-1">
        {timeline.map((t, i) => (
          <div key={i} className="flex gap-3">
            <div className="flex flex-col items-center">
              <span
                className={`mt-1 h-2 w-2 rounded-full ${
                  t.on ? 'bg-teal' : 'bg-ink/20'
                }`}
              />
              {i < timeline.length - 1 && (
                <span className="my-0.5 w-[1.5px] flex-1 bg-ink/10" />
              )}
            </div>
            <div className="-mt-0.5 pb-1">
              <p className="text-[10px] font-medium text-ink-500">{t.date}</p>
              <p className="text-[11.5px] font-medium text-ink">{t.title}</p>
              <p className="text-[9.5px] text-ink-500">{t.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const repasse = [
  { name: 'Dra. Helena Martins', n: 42, v: 'R$ 18.420' },
  { name: 'Dr. Rafael Costa', n: 31, v: 'R$ 12.940' },
  { name: 'Dra. Carla Andrade', n: 24, v: 'R$ 9.680' },
]
const bars = [40, 55, 35, 70, 50, 80, 45, 65, 60, 90]

function FinanceiroScreen() {
  return (
    <div className="px-4 pt-4">
      <div className="rounded-xl bg-navy-900 p-4 text-white">
        <p className="text-[10px] text-white/60">Repasse · maio 2026</p>
        <p className="mt-1 text-[22px] font-semibold tracking-tight">
          R$ 41.040,00
        </p>
        <div className="mt-3 flex items-end gap-1">
          {bars.map((h, i) => (
            <span
              key={i}
              className={`flex-1 rounded-sm ${
                i === bars.length - 1 ? 'bg-teal' : 'bg-white/15'
              }`}
              style={{ height: `${h * 0.32}px` }}
            />
          ))}
        </div>
        <p className="mt-2 text-[9px] text-white/45">
          Próximos 10 dias · fluxo de caixa
        </p>
      </div>
      <div className="mt-3 space-y-1.5">
        {repasse.map((r) => (
          <div
            key={r.name}
            className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5 ring-1 ring-ink/5"
          >
            <div className="min-w-0">
              <p className="truncate text-[11px] font-medium text-ink">
                {r.name}
              </p>
              <p className="text-[9px] text-ink-500">{r.n} atendimentos</p>
            </div>
            <span className="text-[11.5px] font-semibold text-ink">{r.v}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
