import Image from 'next/image'
import { nav, site, whatsappUrl } from '@/lib/site'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#top" className="flex items-center" aria-label="clinni pro">
          <Image
            src="/logo-clinnipro-dark.png"
            alt="clinni pro"
            width={150}
            height={42}
            priority
            className="h-8 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] font-medium text-slate-600 transition hover:text-navy"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-5">
          <a
            href={site.appUrl}
            className="hidden text-[15px] font-medium text-slate-600 transition hover:text-navy sm:inline"
          >
            Entrar
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-navy px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-navy-deep"
          >
            Agendar demonstração
          </a>
        </div>
      </div>
    </header>
  )
}
