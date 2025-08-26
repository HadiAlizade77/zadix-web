import type { Metadata } from 'next'
import Construction from '@/components/pages/industries/Construction'

export const metadata: Metadata = {
  title: 'Construction & EPC AI Automation - Zadix',
  description: 'Win tenders, manage submittals, protect SLAs. Automated tender analysis, BoQ processing, and project management for construction and EPC firms.',
  openGraph: {
    title: 'Construction & EPC AI Automation - Zadix',
    description: 'Win tenders, manage submittals, protect SLAs. Automated tender analysis, BoQ processing, and project management for construction and EPC firms.',
  },
}

export default function ConstructionPage() {
  return <Construction />
}