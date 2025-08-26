import type { Metadata } from 'next'
import Legal from '@/components/pages/industries/Legal'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Legal AI Automation - Zadix',
  description: 'Contracts and corporate changes—structured and searchable. Automated contract analysis, clause extraction, and compliance monitoring for law firms.',
  openGraph: {
    title: 'Legal AI Automation - Zadix',
    description: 'Contracts and corporate changes—structured and searchable. Automated contract analysis, clause extraction, and compliance monitoring for law firms.',
  },
}

export default function LegalPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Legal />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}