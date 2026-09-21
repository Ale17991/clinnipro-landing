import { DaySection, DayHeading } from './DaySection'
import { DesktopMockup } from './DesktopMockup'

// 08:15 — a recepção abre o sistema. É aqui que o mockup grande do desktop
// aparece: fora do hero, no momento do dia em que ele realmente acontece.
export function AgendaSection() {
  return (
    <DaySection id="agenda" hour="08:15" label={'A recepção\nabre o dia'} tone="white">
      <div className="max-w-2xl">
        <DayHeading className="text-ink">
          A agenda do dia abre <span className="text-accent-dark">pronta</span>.
        </DayHeading>
        <p className="mt-6 max-w-lg text-[16px] leading-relaxed text-ink-500">
          Quem está na recepção vê a sala inteira numa tela: quem confirmou, quem
          chegou, quem está em atendimento e onde cabe um encaixe. Arrastar
          remarca. Conflito de horário não existe.
        </p>
      </div>

      <div className="mt-12">
        <DesktopMockup />
      </div>

      <p className="stamp mt-5 text-[9.5px] text-ink-400">
        Clique nos itens do menu para trocar de tela
      </p>
    </DaySection>
  )
}
