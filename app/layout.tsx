import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { Inter, Instrument_Serif, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { site } from '@/lib/site'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const mono = IBM_Plex_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-mono',
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
  title: 'ClinniPro — Gestão para clínicas e consultórios',
  description: site.description,
  openGraph: {
    title: 'ClinniPro — Gestão para clínicas e consultórios',
    description: site.description,
    url: site.url,
    siteName: 'ClinniPro',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${serif.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
