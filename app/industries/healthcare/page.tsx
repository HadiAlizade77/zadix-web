import type { Metadata } from 'next'
import Healthcare from '@/components/pages/industries/Healthcare'

export const metadata: Metadata = {
  title: 'Healthcare AI Automation - Zadix',
  description: 'Patient intake to claim draft—accurate and compliant. HIPAA-compliant automation for clinics with insurance verification and claims processing.',
  openGraph: {
    title: 'Healthcare AI Automation - Zadix',
    description: 'Patient intake to claim draft—accurate and compliant. HIPAA-compliant automation for clinics with insurance verification and claims processing.',
  },
}

export default function HealthcarePage() {
  return <Healthcare />
}