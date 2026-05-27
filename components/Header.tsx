import Image from 'next/image'
import { nav, whatsappUrl } from '@/lib/site'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-deep/90 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between px-5 py-3 sm:px-8">
        <a href="#top" className="flex items-center" aria-label="clinni pro">
          <Image
            src="/logo-clinnipro.png"
            alt="clinni pro"
            width={150}
            height={42}
            priority
            className="h-9 w-auto"
          />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white/80 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-teal px-5 py-2.5 text-sm font-semibold text-navy-deep transition hover:bg-teal/90"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  )
}
