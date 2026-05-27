import { whatsappUrl } from '@/lib/site'

export function FinalCTA() {
  return (
    <section id="contato" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-content px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy-deep px-8 py-16 text-center text-white sm:px-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-teal/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Pronto para organizar a sua clínica?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
              Fale com a gente no WhatsApp e veja a clinni pro funcionando na
              prática, sem compromisso.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-block rounded-full bg-teal px-8 py-4 text-base font-semibold text-navy-deep shadow-lg shadow-teal/20 transition hover:bg-teal/90"
            >
              Agende uma demonstração
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
