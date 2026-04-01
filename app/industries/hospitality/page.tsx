import type { Metadata } from 'next'
import Hospitality from '@/components/pages/industries/Hospitality'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Hospitality AI Automation — Guest Experience & Operations | Zadix',
  description: 'AI automation for hotels, resorts, and luxury retail. Automate guest service requests, check-in workflows, inventory management, and staff scheduling.',
  keywords: 'hospitality AI automation, hotel automation, guest service automation, hotel operations automation, resort workflow automation, luxury retail automation, hotel management AI',
  alternates: { canonical: 'https://zadix.ai/industries/hospitality' },
  openGraph: {
    title: 'Hospitality AI Automation — Guest Experience & Operations | Zadix',
    description: 'AI automation for hotels, resorts, and luxury retail. Automate guest service requests, check-in workflows, inventory management, and staff scheduling.',
    url: 'https://zadix.ai/industries/hospitality',
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