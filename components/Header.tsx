import Image from 'next/image'
import Link from 'next/link'
import { nav, site } from '@/lib/site'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 sm:px-10">
        <a href="#top" className="flex items-center" aria-label="clinni pro">
          <Image
            src="/logo-clinnipro-dark.png"
            alt="clinni pro"
            width={150}
            height={42}
            priority
            className="h-7 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-10 md:flex">
          {nav.map((item) => (
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
            className="rounded-full bg-ink px-5 py-2 text-[13px] font-medium text-white transition hover:bg-ink-900"
          >
            Demonstração
          </Link>
        </div>
      </div>
    </header>
  )
}
