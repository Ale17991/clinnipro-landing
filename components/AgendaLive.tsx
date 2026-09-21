'use client'

import { useEffect, useState } from 'react'

// A agenda do dia, viva.
//
// É o retrato do produto que nenhum concorrente genérico consegue copiar sem
// ser uma clínica: grade de horário, status de cada atendimento, encaixe no
// buraco das 09:20 e a linha do "agora". Os blocos entram em cascata no load
// e o relógio do cabeçalho é a hora real de quem está olhando.

type Slot = {
  time: string
  patient?: string
  type?: string
  pro?: string
  status?: 'confirmado' | 'atendendo' | 'aguardando' | 'online'
  free?: boolean
}

const slots: Slot[] = [
  {
    time: '08:00',
    patient: 'Ana Beatriz Lemos',
    type: 'Avaliação inicial',
    pro: 'Dra. Helena',
    status: 'confirmado',
  },
  {
    time: '08:40',
    patient: 'João P. Ramos',
    type: 'Retorno · 2ª sessão',
    pro: 'Dra. Helena',
    status: 'atendendo',
  },
  { time: '09:20', free: true },
  {
    time: '09:40',
    patient: 'Marcos Vinícius Sá',
    type: 'Consulta · Unimed',
    pro: 'Dr. Rafael',
    status: 'aguardando',
  },
  {
    time: '10:20',
    patient: 'Lúcia Fernandes',
    type: 'Sessão 3 de 6',
    pro: 'Dra. Carla',
    status: 'confirmado',
  },
  {
    time: '11:00',
    patient: 'Pedro Henrique M.',
    type: 'Primeira vez',
    pro: 'Dr. Rafael',
    status: 'online',
  },
]

const statusStyle: Record<
  NonNullable<Slot['status']>,
  { bar: string; chip: string; label: string }
> = {
  confirmado: {
    bar: 'bg-sky',
    chip: 'bg-sky-light text-navy',
    label: 'Confirmado',
  },
  atendendo: {
    bar: 'bg-accent',
    chip: 'bg-accent/10 text-accent-dark',
    label: 'Em atendimento',
  },
  aguardando: {
    bar: 'bg-amber-400',
    chip: 'bg-amber-50 text-amber-700',
    label: 'Na recepção',
  },
  online: {
    bar: 'bg-navy',
    chip: 'bg-navy/10 text-navy',
    label: 'Agendou online',
  },
}

export function AgendaLive() {
  const [now, setNow] = useState<string | null>(null)

  useEffect(() => {
    const tick = () =>
      setNow(
        new Intl.DateTimeFormat('pt-BR', {
          hour: '2-digit',
          minute: '2-digit',
        }).format(new Date()),
      )
    tick()
    const id = setInterval(tick, 20000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-2xl bg-white shadow-[0_32px_80px_-36px_rgba(20,29,35,0.35),0_0_0_1px_rgba(20,29,35,0.06)]">
        {/* Cabeçalho da agenda */}
        <div className="flex items-center justify-between border-b border-ink/[0.07] px-5 py-4">
          <div>
            <p className="stamp text-[9.5px] text-ink-500">Agenda do dia</p>
            <p className="mt-1 text-[14px] font-semibold tracking-tight text-ink">
              Segunda-feira, 22 de setembro
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-paper px-3 py-1.5">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-breathe rounded-full bg-accent" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="stamp text-[9.5px] text-ink-700">
              {now ?? '--:--'}
            </span>
          </div>
        </div>

        {/* Grade */}
        <div className="px-5 py-4">
          {slots.map((s, i) => (
            <div key={s.time}>
              <div
                className="group flex animate-slot-in gap-4 py-1.5"
                style={{ animationDelay: `${150 + i * 110}ms` }}
              >
                <span className="stamp w-[38px] shrink-0 pt-[11px] text-[9.5px] text-ink-400">
                  {s.time}
                </span>

                {s.free ? (
                  <div className="flex h-[38px] flex-1 cursor-default items-center justify-center rounded-lg border border-dashed border-ink/15 text-[11.5px] font-medium text-ink-400 transition group-hover:border-accent/50 group-hover:bg-accent/[0.04] group-hover:text-accent-dark">
                    <span className="group-hover:hidden">Horário livre</span>
                    <span className="hidden group-hover:inline">
                      + Encaixar paciente
                    </span>
                  </div>
                ) : (
                  <div className="flex flex-1 items-center gap-3 rounded-lg bg-paper/80 py-2 pr-3 ring-1 ring-ink/[0.05] transition duration-200 group-hover:-translate-y-px group-hover:bg-white group-hover:shadow-[0_8px_20px_-10px_rgba(20,29,35,0.3)]">
                    <span
                      className={`h-[38px] w-[3px] shrink-0 rounded-full ${
                        statusStyle[s.status!].bar
                      } ${s.status === 'atendendo' ? 'animate-breathe' : ''}`}
                    />
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12.5px] font-semibold leading-tight text-ink">
                        {s.patient}
                      </p>
                      <p className="truncate text-[11px] leading-tight text-ink-500">
                        {s.type} · {s.pro}
                      </p>
                    </div>
                    <span
                      className={`stamp hidden shrink-0 rounded-full px-2 py-1 text-[8.5px] sm:inline ${
                        statusStyle[s.status!].chip
                      }`}
                    >
                      {statusStyle[s.status!].label}
                    </span>
                  </div>
                )}
              </div>

              {/* A linha do agora, logo depois de quem está em atendimento */}
              {s.status === 'atendendo' && (
                <div
                  aria-hidden
                  className="relative flex origin-left animate-now-in items-center gap-2 py-1 pl-[38px]"
                >
                  <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-accent" />
                  <span className="h-px flex-1 bg-accent/40" />
                  <span className="stamp text-[8.5px] text-accent-dark">
                    agora
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Rodapé: o que o sistema já resolveu sozinho */}
        <div className="flex items-center justify-between gap-4 border-t border-ink/[0.07] bg-paper/60 px-5 py-3">
          <p className="stamp text-[8.5px] text-ink-500">
            6 lembretes enviados no WhatsApp
          </p>
          <p className="stamp text-[8.5px] text-ink-500">1 encaixe livre</p>
        </div>
      </div>

      <p className="stamp mt-4 text-center text-[9px] text-ink-400 lg:text-left">
        Tela do sistema · dados ilustrativos
      </p>
    </div>
  )
}
