import type { Metadata } from 'next'
import Contact from '@/components/pages/Contact'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Book a Free AI Automation Demo — Scoped in 20 Minutes | Zadix',
  description: 'Tell us your workflow, systems, and goals. We will scope your automation and deliver a fixed-price proposal in 24 hours. No commitment, no sales pressure.',
  keywords: 'book AI automation demo, hire AI automation agency, AI automation consultation, workflow automation quote, automate my business, AI workflow scoping call',
  alternates: { canonical: 'https://zadix.ai/contact' },
  openGraph: {
    title: 'Book a Free AI Automation Demo — Scoped in 20 Minutes | Zadix',
    description: 'Tell us your workflow, systems, and goals. We will scope your automation and deliver a fixed-price proposal in 24 hours.',
    url: 'https://zadix.ai/contact',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Contact />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}