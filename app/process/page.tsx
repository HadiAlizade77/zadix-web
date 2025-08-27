import type { Metadata } from 'next'
import Process from '@/components/pages/Process'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: '7‑Day Delivery — Acceptance Criteria & Rollback | Zadix',
  description: 'From scope to production with guardrails, observability, and training.',
  openGraph: {
    title: '7‑Day Delivery — Acceptance Criteria & Rollback | Zadix',
    description: 'From scope to production with guardrails, observability, and training.',
  },
}

export default function ProcessPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Process />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}