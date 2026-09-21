import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { DayClose } from '@/components/DaySection'
import { PublicBookingSection } from '@/components/PublicBookingSection'
import { AgendaSection } from '@/components/AgendaSection'
import { ProntuarioSection } from '@/components/ProntuarioSection'
import { MobileShowcase } from '@/components/MobileShowcase'
import { FinanceiroSection } from '@/components/FinanceiroSection'
import { PartnerSection } from '@/components/PartnerSection'
import { SpecialtiesSection } from '@/components/SpecialtiesSection'
import { CapabilitiesSection } from '@/components/CapabilitiesSection'
import { SecuritySection } from '@/components/SecuritySection'
import { PricingSection } from '@/components/PricingSection'
import { FAQSection } from '@/components/FAQSection'
import { CtaFinal } from '@/components/CtaFinal'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        {/* O trilho: um dia de clínica, das 07:40 às 18:20. Cada seção é um
            horário, e a linha vertical que as costura é a própria grade da
            agenda. Substitui o antigo "tour de módulos" — o dia é o tour. */}
        <div id="sistema">
          <PublicBookingSection />
          <AgendaSection />
          <ProntuarioSection />
          <MobileShowcase />
          <FinanceiroSection />
          <DayClose />
        </div>

        <PartnerSection />
        <SpecialtiesSection />
        <CapabilitiesSection />
        <SecuritySection />
        <PricingSection />
        <FAQSection />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
