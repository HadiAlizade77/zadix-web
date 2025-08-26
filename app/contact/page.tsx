import type { Metadata } from 'next'
import Contact from '@/components/pages/Contact'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Book a Demo - See Your Automation in Action | Zadix',
  description: 'Tell us about your workflow challenge and we\'ll show you exactly how our automation would handle it—with real data and your specific business rules.',
  openGraph: {
    title: 'Book a Demo - See Your Automation in Action | Zadix',
    description: 'Tell us about your workflow challenge and we\'ll show you exactly how our automation would handle it—with real data and your specific business rules.',
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