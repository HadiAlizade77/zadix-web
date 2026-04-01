import type { Metadata } from 'next'
import Solutions from '@/components/pages/Solutions'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'AI Automation Solutions — Document Processing, Lead Routing & Approvals | Zadix',
  description: 'Production-ready AI automation solutions: document intake and extraction, email-to-CRM workflows, multi-step approval chains, and live system updates. Built for Dubai, UAE, and global businesses.',
  keywords: 'AI automation solutions, document processing automation, email to CRM automation, approval workflow automation, business process automation Dubai, AI workflow solutions UAE',
  alternates: { canonical: 'https://zadix.ai/solutions' },
  openGraph: {
    title: 'AI Automation Solutions — Document Processing, Lead Routing & Approvals | Zadix',
    description: 'Production-ready AI automation solutions: document intake, email-to-CRM workflows, multi-step approvals, and live system updates.',
    url: 'https://zadix.ai/solutions',
  },
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Solutions />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}