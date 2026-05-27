import { steps } from '@/lib/site'

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-dark">
            Como funciona
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            Comece em 3 passos
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Do cadastro ao primeiro atendimento, sem complicação.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl bg-white p-8 shadow-sm">
              <span className="text-5xl font-extrabold text-teal/30">{s.n}</span>
              <h3 className="mt-3 text-xl font-bold text-navy">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-slate-500">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
