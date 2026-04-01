import type { Metadata } from 'next'
import Logistics from '@/components/pages/industries/Logistics'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Logistics & Freight AI Automation — RFQ to Quote in Minutes | Zadix',
  description: 'AI automation for freight forwarders and logistics companies. Auto-process RFQs, look up rates, protect margins, and respond to customers in minutes — not hours. Works with any TMS.',
  keywords: 'logistics AI automation, freight forwarding automation, RFQ automation logistics, freight quote automation, logistics workflow automation, shipping automation, TMS automation, freight broker automation',
  alternates: { canonical: 'https://zadix.ai/industries/logistics' },
  openGraph: {
    title: 'Logistics & Freight AI Automation — RFQ to Quote in Minutes | Zadix',
    description: 'AI automation for freight forwarders and logistics companies. Auto-process RFQs, look up rates, protect margins, and respond in minutes.',
    url: 'https://zadix.ai/industries/logistics',
  },
}

export default function LogisticsPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Logistics />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}