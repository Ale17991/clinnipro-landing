import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ProductTour } from '@/components/ProductTour'
import { ProntuarioSection } from '@/components/ProntuarioSection'
import { FinanceiroSection } from '@/components/FinanceiroSection'
import { PublicBookingSection } from '@/components/PublicBookingSection'
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
        <ProductTour />
        <ProntuarioSection />
        <FinanceiroSection />
        <PublicBookingSection />
        <SecuritySection />
        <PricingSection />
        <FAQSection />
        <CtaFinal />
      </main>
      <Footer />
    </>
  )
}
