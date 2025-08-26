import type { Metadata } from 'next'
import Documentation from '@/components/pages/Documentation'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Documentation - API & Integration Guides | Zadix',
  description: 'Complete documentation for integrating with Zadix AI automation systems. API references, webhooks, and system integration guides.',
  openGraph: {
    title: 'Documentation - API & Integration Guides | Zadix',
    description: 'Complete documentation for integrating with Zadix AI automation systems. API references, webhooks, and system integration guides.',
  },
}

export default function DocumentationPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Documentation />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}