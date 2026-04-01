import type { Metadata } from 'next'
import Healthcare from '@/components/pages/industries/Healthcare'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Healthcare AI Automation — Patient Intake to Insurance Claims | Zadix',
  description: 'HIPAA-compliant AI automation for clinics and healthcare providers. Automate patient intake, insurance verification, claims processing, and appointment management.',
  keywords: 'healthcare AI automation, medical clinic automation, patient intake automation, insurance claims automation, HIPAA compliant automation, healthcare workflow automation, clinic management automation',
  alternates: { canonical: 'https://zadix.ai/industries/healthcare' },
  openGraph: {
    title: 'Healthcare AI Automation — Patient Intake to Insurance Claims | Zadix',
    description: 'HIPAA-compliant AI automation for clinics and healthcare providers. Automate patient intake, insurance verification, and claims processing.',
    url: 'https://zadix.ai/industries/healthcare',
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