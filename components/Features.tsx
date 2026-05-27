import { features } from '@/lib/site'
import { Icon } from './Icon'

export function Features() {
  return (
    <section id="recursos" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-teal-dark">
            Recursos
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-navy sm:text-4xl">
            Tudo o que a sua clínica precisa
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Um sistema completo para organizar o atendimento, o financeiro e a
            relação com o paciente.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-slate-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-teal/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-light text-teal-dark transition group-hover:bg-teal group-hover:text-white">
                <Icon name={f.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-navy">{f.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-slate-500">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
