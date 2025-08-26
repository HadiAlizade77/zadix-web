import type { Metadata } from 'next'
import Legal from '@/components/pages/industries/Legal'

export const metadata: Metadata = {
  title: 'Legal AI Automation - Zadix',
  description: 'Contracts and corporate changes—structured and searchable. Automated contract analysis, clause extraction, and compliance monitoring for law firms.',
  openGraph: {
    title: 'Legal AI Automation - Zadix',
    description: 'Contracts and corporate changes—structured and searchable. Automated contract analysis, clause extraction, and compliance monitoring for law firms.',
  },
}

export default function LegalPage() {
  return <Legal />
}