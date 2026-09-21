import { BookingMockup } from './BookingMockup'
import { DaySection, DayHeading } from './DaySection'

// 07:40 — a clínica ainda está fechada e a agenda já encheu sozinha.
// Abrir o dia por aqui é o argumento mais forte do produto: trabalho
// acontecendo sem ninguém trabalhando.
export function PublicBookingSection() {
  return (
    <DaySection
      id="agendamento"
      hour="07:40"
      label={'Ninguém\nchegou ainda'}
      tone="paper"
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-20">
        <div>
          <DayHeading className="text-ink">
            A clínica está fechada.
            <br />
            <span className="text-accent-dark">A agenda, não.</span>
          </DayHeading>
          <p className="mt-6 max-w-md text-[16px] leading-relaxed text-ink-500">
            A clínica ganha um endereço próprio que cai direto na agenda. O
            paciente escolhe o horário de madrugada, no domingo, no feriado, e
            recebe confirmação e lembrete no WhatsApp sem ninguém digitar nada.
          </p>

          <dl className="mt-10 grid max-w-md grid-cols-2 gap-x-8 gap-y-6 border-t border-paper-line pt-8">
            {facts.map((f) => (
              <div key={f.label}>
                <dt className="stamp text-[9px] text-ink-500">{f.label}</dt>
                <dd className="mt-1.5 text-[15px] font-medium leading-snug text-ink">
                  {f.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <BookingMockup />
      </div>
    </DaySection>
  )
}

const facts = [
  { label: 'Tempo pra agendar', value: '90 segundos' },
  { label: 'Login exigido', value: 'Nenhum' },
  { label: 'Endereço', value: 'Da sua clínica' },
  { label: 'Confirmação', value: 'WhatsApp automático' },
]
