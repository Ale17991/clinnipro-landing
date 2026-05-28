import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { DarkFeatures } from '@/components/DarkFeatures'
import { HowItWorks } from '@/components/HowItWorks'
import { NextSteps } from '@/components/NextSteps'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <DarkFeatures />
        <HowItWorks />
        <NextSteps />
      </main>
      <Footer />
    </>
  )
}
