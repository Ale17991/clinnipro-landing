import { Logo } from './Logo'
import { site, whatsappUrl } from '@/lib/site'

const links: { label: string; href: string; external?: boolean }[][] = [
  [
    { label: 'Sistema', href: '#sistema' },
    { label: 'Prontuário', href: '#prontuario' },
    { label: 'Financeiro', href: '#financeiro' },
    { label: 'Agendamento online', href: '#agendamento' },
  ],
  [
    { label: 'Segurança', href: '#seguranca' },
    { label: 'Perguntas', href: '#faq' },
    // A política mora no APP, não aqui: é o app que pede os dados, e o domínio
    // dele é o mesmo do OAuth do Google. Uma cópia na landing seria uma segunda
    // versão do mesmo documento, condenada a divergir.
    {
      label: 'Privacidade',
      href: `${site.appUrl}/politica-de-privacidade`,
      external: true,
    },
  ],
  [
    { label: 'Demonstração', href: '/demonstracao' },
    { label: 'Entrar', href: site.appUrl, external: true },
    { label: 'WhatsApp', href: whatsappUrl, external: true },
  ],
]

export function Footer() {
  return (
    <footer className="border-t border-ink/5 bg-white">
      <div className="mx-auto max-w-content px-6 py-20 sm:px-10">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <Logo className="h-5 w-auto text-ink" />
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-ink-500">
              Mais que um sistema: o parceiro da sua clínica. Feito no Brasil,
              para clínicas e consultórios.
            </p>
          </div>
          {links.map((col, i) => (
            <ul key={i} className="space-y-3">
              {col.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? '_blank' : undefined}
                    rel={l.external ? 'noopener noreferrer' : undefined}
                    className="text-[14px] text-ink-500 transition hover:text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-ink/5 pt-6 text-[12px] text-ink-500 sm:flex-row sm:items-center sm:justify-between">
          <span>{site.domain}</span>
          <span>© {new Date().getFullYear()} ClinniPro</span>
        </div>
      </div>
    </footer>
  )
}
