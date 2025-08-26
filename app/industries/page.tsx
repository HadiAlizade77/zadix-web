import type { Metadata } from 'next'
import Industries from '@/components/pages/Industries'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Industry Solutions - Zadix',
  description: 'Purpose-built AI automation workflows for Real Estate, Investment, Logistics, Healthcare, Legal, Construction, SaaS, and Hospitality sectors.',
  openGraph: {
    title: 'Industry Solutions - Zadix',
    description: 'Purpose-built AI automation workflows for Real Estate, Investment, Logistics, Healthcare, Legal, Construction, SaaS, and Hospitality sectors.',
  },
}

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Industries />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}