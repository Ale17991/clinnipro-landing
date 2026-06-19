import { BookingMockup } from './BookingMockup'

export function PublicBookingSection() {
  return (
    <section id="agendamento" className="bg-white py-28 sm:py-36">
      <div className="mx-auto grid max-w-content gap-20 px-6 sm:px-10 lg:grid-cols-2 lg:items-center lg:gap-24">
        <div>
          <p className="text-[12px] font-medium uppercase tracking-[0.18em] text-ink-500">
            Agendamento online
          </p>
          <h2 className="display mt-4 text-4xl font-medium leading-[1.1] text-ink sm:text-[2.75rem]">
            Um link.
            <br />
            <span className="font-serif italic text-ink-700">O paciente agenda sozinho.</span>
          </h2>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-500">
            A clínica recebe um endereço próprio que cai direto na agenda. Sem
            login, sem app — com confirmação e lembrete pelo WhatsApp.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <span className="inline-flex h-7 items-center gap-2 rounded-full border border-ink/10 bg-white px-3 text-[12px] font-medium text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Endereço exclusivo da clínica
            </span>
            <span className="inline-flex h-7 items-center gap-2 rounded-full border border-ink/10 bg-white px-3 text-[12px] font-medium text-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-teal" />
              Confirmação e lembrete no WhatsApp
            </span>
          </div>
        </div>

        <BookingMockup />
      </div>
    </section>
  )
}
