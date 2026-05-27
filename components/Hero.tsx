import { whatsappUrl } from '@/lib/site'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-navy-deep text-white"
    >
      <div className="pointer-events-none absolute -right-40 -top-40 h-[520px] w-[520px] rounded-full bg-teal/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-teal/10 blur-3xl" />

      <div className="mx-auto grid max-w-content items-center gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:py-28">
        <div className="animate-fade-up">
          <span className="inline-block rounded-full border border-teal/40 bg-teal/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-teal">
            Gestão de clínicas e consultórios
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl md:text-[3.4rem]">
            A gestão da sua clínica{' '}
            <span className="text-teal">em um só lugar</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
            Agenda, prontuário eletrônico, financeiro e repasse médico, lembretes
            e agendamento online — tudo o que o seu consultório precisa, sem
            caderno e sem planilha.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-teal px-7 py-3.5 text-center text-base font-semibold text-navy-deep shadow-lg shadow-teal/20 transition hover:bg-teal/90"
            >
              Agende uma demonstração
            </a>
            <a
              href="#recursos"
              className="rounded-full border border-white/25 px-7 py-3.5 text-center text-base font-semibold text-white transition hover:bg-white/10"
            >
              Ver recursos
            </a>
          </div>
        </div>

        <div className="animate-fade-up md:justify-self-end">
          <AgendaMock />
        </div>
      </div>
    </section>
  )
}

function AgendaMock() {
  const rows = [
    { time: '08:00', name: 'Maria Santos', tag: 'Consulta', color: 'bg-teal' },
    { time: '09:30', name: 'João Pereira', tag: 'Retorno', color: 'bg-sky-400' },
    { time: '11:00', name: 'Ana Lima', tag: 'Avaliação', color: 'bg-emerald-400' },
    { time: '14:00', name: 'Carlos Souza', tag: 'Procedimento', color: 'bg-indigo-400' },
  ]
  return (
    <div className="w-full max-w-md rotate-1 rounded-2xl bg-white p-4 shadow-2xl shadow-black/40 ring-1 ring-black/5">
      <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-amber-400" />
        <span className="h-3 w-3 rounded-full bg-emerald-400" />
        <span className="ml-3 text-sm font-semibold text-navy">Agenda · Hoje</span>
      </div>
      <div className="mt-3 space-y-2.5">
        {rows.map((r) => (
          <div
            key={r.time}
            className="flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-3"
          >
            <span className="w-12 text-xs font-semibold text-slate-400">
              {r.time}
            </span>
            <span className={`h-9 w-1.5 rounded-full ${r.color}`} />
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-navy">{r.name}</p>
              <p className="text-xs text-slate-400">{r.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
