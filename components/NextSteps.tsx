import { site, whatsappUrl } from '@/lib/site'

const cards = [
  {
    title: 'Conheça os recursos',
    desc: 'Veja tudo o que a clinni pro faz pela sua clínica.',
    cta: 'Explorar',
    href: '#recursos',
    external: false,
  },
  {
    title: 'Veja como funciona',
    desc: 'Do cadastro ao primeiro atendimento, em 3 passos.',
    cta: 'Ver',
    href: '#como-funciona',
    external: false,
  },
]

const bottom = [
  {
    title: 'Falar no WhatsApp',
    desc: 'Tire suas dúvidas direto com a nossa equipe.',
    cta: 'Conversar',
    href: whatsappUrl,
    external: true,
  },
  {
    title: 'Acessar o sistema',
    desc: 'Já é cliente? Entre na sua conta.',
    cta: 'Entrar',
    href: site.appUrl,
    external: true,
  },
]

function Card({ c }: { c: (typeof cards)[number] }) {
  return (
    <a
      href={c.href}
      target={c.external ? '_blank' : undefined}
      rel={c.external ? 'noopener noreferrer' : undefined}
      className="group rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-teal/40 hover:shadow-lg"
    >
      <h3 className="text-lg font-bold text-navy">{c.title}</h3>
      <p className="mt-2 text-[15px] text-slate-500">{c.desc}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold uppercase tracking-wide text-teal-dark">
        {c.cta}
        <span className="transition group-hover:translate-x-1">›</span>
      </span>
    </a>
  )
}

export function NextSteps() {
  return (
    <section id="contato" className="bg-slate-50 py-20 sm:py-28">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-navy sm:text-4xl">
            Escolha o próximo passo
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Comece a organizar a sua clínica do jeito que fizer mais sentido.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            {cards.map((c) => (
              <Card key={c.title} c={c} />
            ))}
          </div>

          {/* CTA destaque */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center justify-between overflow-hidden rounded-2xl bg-navy-deep p-8 text-white"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal/20 blur-3xl" />
            <div className="relative">
              <h3 className="text-xl font-bold sm:text-2xl">
                Agende uma demonstração
              </h3>
              <p className="mt-1 text-white/70">
                Veja a clinni pro funcionando na sua clínica, sem compromisso.
              </p>
            </div>
            <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-teal text-xl text-navy-deep transition group-hover:scale-110">
              ›
            </span>
          </a>

          <div className="grid gap-5 sm:grid-cols-2">
            {bottom.map((c) => (
              <Card key={c.title} c={c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
