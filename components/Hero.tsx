import Image from 'next/image'
import { appMenu, whatsappUrl } from '@/lib/site'

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="mx-auto max-w-content px-5 pb-0 pt-16 text-center sm:px-8 sm:pt-24">
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
                stroke="#1CB8CE"
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
            className="rounded-xl bg-teal px-8 py-4 text-sm font-bold uppercase tracking-wide text-navy-deep shadow-lg shadow-teal/25 transition hover:bg-teal/90"
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

function AppMock() {
  const rows = [
    { time: '08:00', name: 'Maria Santos', tag: 'Consulta', color: 'bg-teal' },
    { time: '09:30', name: 'João Pereira', tag: 'Retorno', color: 'bg-sky-400' },
    { time: '11:00', name: 'Ana Lima', tag: 'Avaliação', color: 'bg-emerald-400' },
    { time: '14:00', name: 'Carlos Souza', tag: 'Procedimento', color: 'bg-indigo-400' },
    { time: '15:30', name: 'Beatriz Rocha', tag: 'Consulta', color: 'bg-teal' },
  ]
  return (
    <div className="relative">
      {/* janela do navegador */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-2xl shadow-navy/20 ring-1 ring-slate-200">
        <div className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-400" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
          <div className="ml-3 hidden rounded-md bg-white px-3 py-1 text-xs text-slate-400 ring-1 ring-slate-200 sm:block">
            app.clinnipro.io
          </div>
        </div>
        <div className="flex h-[360px] sm:h-[440px]">
          {/* sidebar */}
          <aside className="hidden w-52 flex-col bg-navy-deep p-4 text-white sm:flex">
            <Image
              src="/logo-clinnipro.png"
              alt="clinni pro"
              width={120}
              height={34}
              className="mb-6 h-7 w-auto"
            />
            <nav className="space-y-1">
              {appMenu.map((item, i) => (
                <div
                  key={item}
                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm ${
                    i === 0
                      ? 'bg-teal/15 font-semibold text-teal'
                      : 'text-white/55'
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      i === 0 ? 'bg-teal' : 'bg-white/30'
                    }`}
                  />
                  {item}
                </div>
              ))}
            </nav>
          </aside>

          {/* conteúdo: agenda */}
          <div className="flex-1 bg-slate-50 p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-bold text-navy">Agenda · Hoje</p>
                <p className="text-xs text-slate-400">5 atendimentos</p>
              </div>
              <span className="rounded-lg bg-teal px-3 py-1.5 text-xs font-semibold text-navy-deep">
                + Novo
              </span>
            </div>
            <div className="space-y-2.5">
              {rows.map((r) => (
                <div
                  key={r.time}
                  className="flex items-center gap-3 rounded-xl bg-white px-3 py-3 ring-1 ring-slate-100"
                >
                  <span className="w-11 text-xs font-semibold text-slate-400">
                    {r.time}
                  </span>
                  <span className={`h-8 w-1.5 rounded-full ${r.color}`} />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-navy">
                      {r.name}
                    </p>
                    <p className="text-xs text-slate-400">{r.tag}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* celular sobreposto */}
      <div className="absolute -bottom-6 right-2 hidden w-44 rotate-3 overflow-hidden rounded-[2rem] bg-navy-900 p-2 shadow-2xl shadow-navy/40 ring-1 ring-white/10 lg:block">
        <div className="rounded-[1.6rem] bg-navy-deep p-3">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-teal">
            Lembrete enviado
          </p>
          <p className="mt-2 text-xs leading-snug text-white/85">
            Olá, Maria! Sua consulta na Clínica é amanhã às 08:00. Confirma?
          </p>
          <div className="mt-3 flex gap-1.5">
            <span className="rounded-md bg-teal px-2 py-1 text-[10px] font-semibold text-navy-deep">
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
