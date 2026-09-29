import Link from 'next/link'
import { Logo } from './Logo'
import { nav, site } from '@/lib/site'

type NavItem = { label: string; href: string }

// Na home, as âncoras rolam a própria página. Em outra rota (ex.: a campanha
// de odontologia), quem chama passa a navegação e o destino do logo.
export function Header({
  items = nav,
  logoHref = '#top',
}: {
  items?: readonly NavItem[]
  logoHref?: string
} = {}) {
  return (
    <header className="sticky top-0 z-50 border-b border-paper-line/70 bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
        <a href={logoHref} className="flex items-center" aria-label="ClinniPro">
          <Logo className="h-5 w-auto text-ink" />
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {items.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[13.5px] font-medium text-ink-500 transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a
            href={site.appUrl}
            className="hidden text-[13.5px] font-medium text-ink-500 transition hover:text-ink sm:inline"
          >
            Entrar
          </a>
          <Link
            href="/demonstracao"
            className="rounded-full bg-navy px-5 py-2 text-[13px] font-medium text-white transition hover:bg-navy-deep"
          >
            Demonstração
          </Link>
        </div>
      </div>
    </header>
  )
}
