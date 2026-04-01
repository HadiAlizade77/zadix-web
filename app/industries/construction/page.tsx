import type { Metadata } from 'next'
import Construction from '@/components/pages/industries/Construction'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Construction & EPC AI Automation — Tender Analysis & BoQ Processing | Zadix',
  description: 'AI automation for construction firms and EPC contractors. Automate tender analysis, BoQ extraction, submittal management, and SLA tracking — win more bids with less effort.',
  keywords: 'construction AI automation, EPC automation, tender analysis automation, BoQ processing automation, construction workflow automation, submittal management automation, project management automation construction',
  alternates: { canonical: 'https://zadix.ai/industries/construction' },
  openGraph: {
    title: 'Construction & EPC AI Automation — Tender Analysis & BoQ Processing | Zadix',
    description: 'AI automation for construction firms and EPC contractors. Automate tender analysis, BoQ extraction, submittal management, and SLA tracking.',
    url: 'https://zadix.ai/industries/construction',
  },
}

export default function ConstructionPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Construction />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}