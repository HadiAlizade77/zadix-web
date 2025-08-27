import type { Metadata } from 'next'
import Industries from '@/components/pages/Industries'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Purpose‑Built Automations for Your Sector | Zadix',
  description: 'Real Estate, Investment, Logistics, Healthcare, Legal, EPC, SaaS, Hospitality.',
  openGraph: {
    title: 'Purpose‑Built Automations for Your Sector | Zadix',
    description: 'Real Estate, Investment, Logistics, Healthcare, Legal, EPC, SaaS, Hospitality.',
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