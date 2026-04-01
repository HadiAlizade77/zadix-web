import type { Metadata } from 'next'
import RealEstate from '@/components/pages/industries/RealEstate'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Real Estate AI Automation — Lead Qualification in 60 Seconds | Zadix',
  description: 'AI automation for real estate agencies. Qualify multilingual leads in 60 seconds, auto-assign agents, and follow up instantly — 24/7. Stop losing listings to slow response times.',
  keywords: 'real estate AI automation, property lead qualification automation, real estate CRM automation, real estate agency automation, multilingual lead AI, real estate workflow automation, property management automation',
  alternates: { canonical: 'https://zadix.ai/industries/real-estate' },
  openGraph: {
    title: 'Real Estate AI Automation — Lead Qualification in 60 Seconds | Zadix',
    description: 'AI automation for real estate agencies. Qualify multilingual leads in 60 seconds, auto-assign agents, and follow up instantly — 24/7.',
    url: 'https://zadix.ai/industries/real-estate',
  },
}

export default function RealEstatePage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <RealEstate />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}