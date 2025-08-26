import type { Metadata } from 'next'
import Healthcare from '@/components/pages/industries/Healthcare'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Healthcare AI Automation - Zadix',
  description: 'Patient intake to claim draft—accurate and compliant. HIPAA-compliant automation for clinics with insurance verification and claims processing.',
  openGraph: {
    title: 'Healthcare AI Automation - Zadix',
    description: 'Patient intake to claim draft—accurate and compliant. HIPAA-compliant automation for clinics with insurance verification and claims processing.',
  },
}

export default function HealthcarePage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Healthcare />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}