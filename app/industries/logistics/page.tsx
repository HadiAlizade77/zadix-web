import type { Metadata } from 'next'
import Logistics from '@/components/pages/industries/Logistics'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Logistics & Freight AI Automation - Zadix',
  description: 'RFQ in, quote out—profit-guarded. Automated freight forwarding with rate lookup, margin protection, and CRM integration.',
  openGraph: {
    title: 'Logistics & Freight AI Automation - Zadix',
    description: 'RFQ in, quote out—profit-guarded. Automated freight forwarding with rate lookup, margin protection, and CRM integration.',
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