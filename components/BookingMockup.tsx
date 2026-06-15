'use client'

import { useState } from 'react'

const slots = [
  { h: '08:00' },
  { h: '08:30', taken: true },
  { h: '09:00' },
  { h: '09:30' },
  { h: '10:00' },
  { h: '10:30', taken: true },
]

export function BookingMockup() {
  const [selected, setSelected] = useState('09:30')
  const [confirmed, setConfirmed] = useState(false)

  return (
    <div className="relative">
      <div className="relative overflow-hidden rounded-xl bg-white shadow-[0_24px_60px_-24px_rgba(11,27,38,0.18),0_0_0_1px_rgba(11,27,38,0.06)]">
        <div className="bg-gradient-to-b from-[#FAFAFB] to-white p-8">
          <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-ink-500">
            Clínica Bem-Estar
          </p>
          <p className="display mt-2 text-2xl font-medium text-ink">
            Agendar consulta
          </p>

          <div className="mt-8 space-y-3 text-[13px]">
            <Row label="Profissional" value="Dra. Helena Martins" />
            <Row label="Procedimento" value="Consulta · 30 min" />
            <Row label="Data" value="Quarta, 28 de maio" />
          </div>

          <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-500">
            Horários
          </p>
          <div className="mt-3 grid grid-cols-3 gap-2 sm:grid-cols-6">
            {slots.map((s) => {
              const isSelected = s.h === selected && !s.taken
              return (
                <button
                  key={s.h}
                  type="button"
                  disabled={s.taken}
                  onClick={() => {
                    setSelected(s.h)
                    setConfirmed(false)
                  }}
                  className={`rounded-md py-2 text-center text-[12px] font-medium transition ${
                    isSelected
                      ? 'bg-ink text-white'
                      : s.taken
                        ? 'cursor-not-allowed bg-ink/5 text-ink-500/40 line-through'
                        : 'border border-ink/10 bg-white text-ink hover:border-teal hover:text-teal-dark'
                  }`}
                >
                  {s.h}
                </button>
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => setConfirmed(true)}
            className={`mt-8 flex w-full items-center justify-center gap-2 rounded-full py-3 text-[13px] font-medium text-white transition ${
              confirmed ? 'bg-teal' : 'bg-ink hover:bg-ink-900'
            }`}
          >
            {confirmed ? (
              <>
                Confirmado
                <span aria-hidden>✓</span>
              </>
            ) : (
              'Confirmar'
            )}
          </button>
        </div>
      </div>

      {/* Bolha WhatsApp — reage à seleção e à confirmação */}
      <div className="absolute -bottom-10 -left-4 hidden w-64 rotate-[-2deg] rounded-2xl bg-white p-4 shadow-[0_24px_60px_-24px_rgba(11,27,38,0.25),0_0_0_1px_rgba(11,27,38,0.06)] transition sm:block lg:-left-10">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-[10px] font-bold text-white">
            W
          </span>
          <p className="text-[11px] font-medium text-ink">WhatsApp · Clínica</p>
          <span className="ml-auto text-[10px] text-ink-500">
            {confirmed ? 'agora' : 'prévia'}
          </span>
        </div>
        <p className="mt-2 text-[12.5px] leading-snug text-ink">
          Olá Maria! Sua consulta está{' '}
          {confirmed ? 'confirmada' : 'pré-agendada'} para quarta às {selected}{' '}
          com Dra. Helena.{confirmed ? ' ✓' : ''}
        </p>
      </div>
    </div>
  )
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-ink/5 py-2.5">
      <span className="text-ink-500">{label}</span>
      <span className="font-medium text-ink">{value}</span>
    </div>
  )
}
