import { site } from '@/lib/site'

const slots = [
  { h: '08:00' },
  { h: '08:30', taken: true },
  { h: '09:00' },
  { h: '09:30', selected: true },
  { h: '10:00' },
  { h: '10:30', taken: true },
]

export function PublicBookingSection() {
  return (
    <section id="agendamento" className="bg-white py-28 sm:py-36">
      <div className="mx-auto grid max-w-content gap-20 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-24">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-500">
            Agendamento online
          </p>
          <h2 className="display mt-4 text-4xl font-medium leading-[1.1] text-ink sm:text-[2.75rem]">
            Um link.
            <br />
            <span className="font-serif italic text-ink-700">O paciente agenda sozinho.</span>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-500">
            A clínica recebe um endereço próprio que cai direto na agenda. Sem
            login, sem app — com confirmação e lembrete pelo WhatsApp.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <p className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-[#FAFAFB] px-4 py-2 font-mono text-[12px] text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              {site.appUrl.replace('https://', '')}/agendar/sua-clinica
            </p>
            <span className="inline-flex h-7 items-center gap-2 rounded-full border border-ink/10 bg-white px-3 text-[12px] font-medium text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Lembretes no WhatsApp
            </span>
          </div>
        </div>

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
                {slots.map((s) => (
                  <span
                    key={s.h}
                    className={`rounded-md py-2 text-center text-[12px] font-medium ${
                      s.selected
                        ? 'bg-ink text-white'
                        : s.taken
                          ? 'bg-ink/5 text-ink-500/40 line-through'
                          : 'border border-ink/10 bg-white text-ink'
                    }`}
                  >
                    {s.h}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="mt-8 w-full rounded-full bg-ink py-3 text-[13px] font-medium text-white"
              >
                Confirmar
              </button>
            </div>
          </div>

          {/* Bolha WhatsApp — confirmação enviada */}
          <div className="absolute -bottom-10 -left-4 hidden w-64 rotate-[-2deg] rounded-2xl bg-white p-4 shadow-[0_24px_60px_-24px_rgba(11,27,38,0.25),0_0_0_1px_rgba(11,27,38,0.06)] sm:block lg:-left-10">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#25D366] text-[10px] font-bold text-white">
                W
              </span>
              <p className="text-[11px] font-medium text-ink">
                WhatsApp · Clínica
              </p>
              <span className="ml-auto text-[10px] text-ink-500">agora</span>
            </div>
            <p className="mt-2 text-[12.5px] leading-snug text-ink">
              Olá Maria! Sua consulta está confirmada para quarta às 09:30 com
              Dra. Helena. ✓
            </p>
          </div>
        </div>
      </div>
    </section>
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
