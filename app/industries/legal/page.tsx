import type { Metadata } from 'next'
import Legal from '@/components/pages/industries/Legal'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Legal AI Automation — Contract Analysis & Compliance Monitoring | Zadix',
  description: 'AI automation for law firms and legal teams. Automate contract review, clause extraction, compliance monitoring, and document management — reducing manual review time by 70%.',
  keywords: 'legal AI automation, contract analysis automation, law firm automation, clause extraction AI, legal document automation, compliance monitoring automation, contract review AI, legal workflow automation',
  alternates: { canonical: 'https://zadix.ai/industries/legal' },
  openGraph: {
    title: 'Legal AI Automation — Contract Analysis & Compliance Monitoring | Zadix',
    description: 'AI automation for law firms and legal teams. Automate contract review, clause extraction, compliance monitoring, and document management.',
    url: 'https://zadix.ai/industries/legal',
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