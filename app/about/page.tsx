import type { Metadata } from 'next'
import About from '@/components/pages/About'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'About Zadix — Engineers First, Outcomes Always | Zadix',
  description: 'Senior engineers delivering production‑grade automations for MENA/EU.',
  openGraph: {
    title: 'About Zadix — Engineers First, Outcomes Always | Zadix',
    description: 'Senior engineers delivering production‑grade automations for MENA/EU.',
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <About />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}