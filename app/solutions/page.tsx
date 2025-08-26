import type { Metadata } from 'next'
import Solutions from '@/components/pages/Solutions'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'AI Automation Solutions - Production-Ready in 7-14 Days | Zadix',
  description: 'From inbox to system-of-record—automated, approved, and auditable. Enterprise-grade AI automation with full observability and human oversight.',
  openGraph: {
    title: 'AI Automation Solutions - Production-Ready in 7-14 Days | Zadix',
    description: 'From inbox to system-of-record—automated, approved, and auditable. Enterprise-grade AI automation with full observability and human oversight.',
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