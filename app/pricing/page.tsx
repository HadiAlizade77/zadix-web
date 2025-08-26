import type { Metadata } from 'next'
import Pricing from '@/components/pages/Pricing'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Pricing - Fixed Scope, Fixed Timeline - Zadix',
  description: 'Transparent pricing for production-ready AI automation. Starter ($3,900), Pro ($12,900), Enterprise ($28k+). 30-day value guarantee.',
  openGraph: {
    title: 'Pricing - Fixed Scope, Fixed Timeline - Zadix',
    description: 'Transparent pricing for production-ready AI automation. Starter ($3,900), Pro ($12,900), Enterprise ($28k+). 30-day value guarantee.',
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