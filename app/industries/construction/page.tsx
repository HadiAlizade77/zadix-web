import type { Metadata } from 'next'
import Construction from '@/components/pages/industries/Construction'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Construction & EPC AI Automation - Zadix',
  description: 'Win tenders, manage submittals, protect SLAs. Automated tender analysis, BoQ processing, and project management for construction and EPC firms.',
  openGraph: {
    title: 'Construction & EPC AI Automation - Zadix',
    description: 'Win tenders, manage submittals, protect SLAs. Automated tender analysis, BoQ processing, and project management for construction and EPC firms.',
  },
}

export default function ConstructionPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Construction />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}