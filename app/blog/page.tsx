import type { Metadata } from 'next'
import Blog from '@/components/pages/Blog'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Insights on AI Automation — Zadix Blog',
  description: 'Practical guides on AI workflows, ROI, and guardrails for enterprises.',
  openGraph: {
    title: 'Insights on AI Automation — Zadix Blog',
    description: 'Practical guides on AI workflows, ROI, and guardrails for enterprises.',
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Blog />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}