import { featureCards } from '@/lib/site'
import { Icon } from './Icon'

export function DarkFeatures() {
  return (
    <section id="recursos" className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="overflow-hidden rounded-[2rem] bg-navy-900 px-6 py-14 sm:px-12 sm:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-widest text-teal">
              Recursos
            </span>
            <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
              Tudo o que a sua clínica precisa
            </h2>
            <p className="mt-4 text-lg text-white/60">
              Um sistema completo para o atendimento, o financeiro e a relação
              com o paciente.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featureCards.map((f, i) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-navy-deep p-6"
              >
                <Preview index={i} />
                <div className="mt-5 flex items-center gap-2 text-teal">
                  <Icon name={f.icon} className="h-5 w-5" />
                  <h3 className="text-base font-bold text-white">{f.title}</h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>

          {/* bloco largo: agendamento online */}
          <div className="mt-5 grid items-center gap-8 rounded-2xl border border-white/10 bg-navy-deep p-6 sm:p-10 md:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-teal">
                <Icon name="globe" className="h-5 w-5" />
                <span className="text-sm font-semibold uppercase tracking-widest">
                  Agendamento online
                </span>
              </div>
              <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
                Seus pacientes agendam sozinhos, 24h por dia
              </h3>
              <p className="mt-3 text-white/60">
                Um link de agendamento integrado à sua agenda. Menos ligações,
                menos faltas com lembretes automáticos, mais consultas.
              </p>
            </div>
            <BookingPreview />
          </div>
        </div>
      </div>
    </section>
  )
}

function Bar({ w, c = 'bg-white/15' }: { w: string; c?: string }) {
  return <div className={`h-2.5 rounded-full ${c}`} style={{ width: w }} />
}

function Preview({ index }: { index: number }) {
  if (index === 0) {
    // agenda
    return (
      <div className="space-y-2 rounded-xl bg-navy-900 p-4">
        {['08:00', '09:30', '11:00'].map((t, i) => (
          <div key={t} className="flex items-center gap-2">
            <span className="w-9 text-[10px] text-white/40">{t}</span>
            <span className="h-6 w-1 rounded-full bg-teal" />
            <div className="flex-1 space-y-1">
              <Bar w={`${70 - i * 12}%`} />
            </div>
          </div>
        ))}
      </div>
    )
  }
  if (index === 1) {
    // prontuário
    return (
      <div className="space-y-2 rounded-xl bg-navy-900 p-4">
        <Bar w="40%" c="bg-teal/70" />
        <Bar w="92%" />
        <Bar w="80%" />
        <Bar w="88%" />
        <Bar w="55%" />
      </div>
    )
  }
  // financeiro: mini chart
  return (
    <div className="flex h-[88px] items-end gap-2 rounded-xl bg-navy-900 p-4">
      {[40, 65, 50, 80, 60, 95].map((h, i) => (
        <div
          key={i}
          className={`flex-1 rounded-t ${i === 5 ? 'bg-teal' : 'bg-white/15'}`}
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  )
}

function BookingPreview() {
  const slots = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30']
  return (
    <div className="rounded-2xl bg-white p-5 shadow-xl">
      <p className="text-sm font-bold text-navy">Agendar consulta</p>
      <p className="mt-1 text-xs text-slate-400">Quarta, 28 de maio</p>
      <div className="mt-4 grid grid-cols-3 gap-2">
        {slots.map((s, i) => (
          <span
            key={s}
            className={`rounded-lg px-2 py-2 text-center text-xs font-semibold ${
              i === 3
                ? 'bg-teal text-navy-deep'
                : 'bg-slate-100 text-slate-500'
            }`}
          >
            {s}
          </span>
        ))}
      </div>
      <div className="mt-4 rounded-lg bg-navy py-2.5 text-center text-xs font-semibold text-white">
        Confirmar agendamento
      </div>
    </div>
  )
}
