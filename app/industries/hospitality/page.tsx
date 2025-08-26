import type { Metadata } from 'next'
import Hospitality from '@/components/pages/industries/Hospitality'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Hospitality AI Automation - Zadix',
  description: 'Guest joy, operational calm. AI-powered guest service automation and operational workflows for hotels and luxury retail operations.',
  openGraph: {
    title: 'Hospitality AI Automation - Zadix',
    description: 'Guest joy, operational calm. AI-powered guest service automation and operational workflows for hotels and luxury retail operations.',
  },
}

export default function HospitalityPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Hospitality />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}