import Image from 'next/image'
import { nav, site } from '@/lib/site'

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white/70">
      <div className="mx-auto max-w-content px-5 py-14 sm:px-8">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <Image
              src="/logo-clinnipro.png"
              alt="clinni pro"
              width={150}
              height={42}
              className="h-9 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              Sistema de gestão para clínicas e consultórios.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <span>{site.domain}</span>
          <span>© {new Date().getFullYear()} clinni pro. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
