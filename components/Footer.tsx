import Image from 'next/image'
import { site, whatsappUrl } from '@/lib/site'

const columns = [
  {
    title: 'Produto',
    links: [
      { label: 'Recursos', href: '#recursos' },
      { label: 'Como funciona', href: '#como-funciona' },
      { label: 'Agendamento online', href: '#recursos' },
    ],
  },
  {
    title: 'Acesso',
    links: [
      { label: 'Entrar', href: site.appUrl },
      { label: 'Agendar demonstração', href: whatsappUrl },
      { label: 'Falar no WhatsApp', href: whatsappUrl },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="mx-auto max-w-content px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Image
              src="/logo-clinnipro.png"
              alt="clinni pro"
              width={150}
              height={42}
              className="h-8 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/55">
              Sistema de gestão para clínicas e consultórios. Agenda, prontuário,
              financeiro e agendamento online em um só lugar.
            </p>
          </div>
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-white/60 transition hover:text-teal"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span>{site.domain}</span>
          <span>
            © {new Date().getFullYear()} clinni pro. Todos os direitos
            reservados.
          </span>
        </div>
      </div>
    </footer>
  )
}
