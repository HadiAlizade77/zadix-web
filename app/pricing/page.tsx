import type { Metadata } from 'next'
import Pricing from '@/components/pages/Pricing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Pricing & Packages — Fixed Scope, Fixed Timeline | Zadix',
  description: 'Starter $3,900 • Pro $12,900 • Enterprise $28k+. Add‑ons and SLAs available.',
  openGraph: {
    title: 'Pricing & Packages — Fixed Scope, Fixed Timeline | Zadix',
    description: 'Starter $3,900 • Pro $12,900 • Enterprise $28k+. Add‑ons and SLAs available.',
  },
}

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Pricing />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}