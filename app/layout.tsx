import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter, Instrument_Serif } from 'next/font/google'
import './globals.css'
import { site } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const serif = Instrument_Serif({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: 'clinni pro — Gestão para clínicas e consultórios',
  description: site.description,
  openGraph: {
    title: 'clinni pro — Gestão para clínicas e consultórios',
    description: site.description,
    url: site.url,
    siteName: 'clinni pro',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  )
}
