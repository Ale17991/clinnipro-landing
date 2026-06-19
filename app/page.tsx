import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { MobileShowcase } from '@/components/MobileShowcase'
import { PartnerSection } from '@/components/PartnerSection'
import { ProductTour } from '@/components/ProductTour'
import { ProntuarioSection } from '@/components/ProntuarioSection'
import { FinanceiroSection } from '@/components/FinanceiroSection'
import { PublicBookingSection } from '@/components/PublicBookingSection'
import { CapabilitiesSection } from '@/components/CapabilitiesSection'
import { SpecialtiesSection } from '@/components/SpecialtiesSection'
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
        <MobileShowcase />
        <PartnerSection />
        <ProductTour />
        <ProntuarioSection />
        <FinanceiroSection />
        <PublicBookingSection />
        <CapabilitiesSection />
        <SpecialtiesSection />
        <SecuritySection />
        <PricingSection />
        <FAQSection />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
