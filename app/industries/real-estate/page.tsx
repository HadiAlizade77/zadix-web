import type { Metadata } from 'next'
import RealEstate from '@/components/pages/industries/RealEstate'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Real Estate AI Automation - Zadix',
  description: 'Multilingual lead processing and qualification for Dubai\'s luxury real estate market. Every lead qualified in 60 seconds, every follow-up on time.',
  openGraph: {
    title: 'Real Estate AI Automation - Zadix',
    description: 'Multilingual lead processing and qualification for Dubai\'s luxury real estate market. Every lead qualified in 60 seconds, every follow-up on time.',
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