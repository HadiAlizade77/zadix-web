import type { Metadata } from 'next'
import Contact from '@/components/pages/Contact'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Book a Demo — Qualify Your Project | Zadix',
  description: 'Tell us about your process, systems, and goals. We\'ll scope a 7–14 day build.',
  openGraph: {
    title: 'Book a Demo — Qualify Your Project | Zadix',
    description: 'Tell us about your process, systems, and goals. We\'ll scope a 7–14 day build.',
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