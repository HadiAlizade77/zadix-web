import type { Metadata } from 'next'
import About from '@/components/pages/About'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'About Us - Engineers First, Outcomes Always - Zadix',
  description: 'Built by senior engineers with enterprise microservices and AI orchestration backgrounds. Headquartered in Dubai Free Zone, serving global clients.',
  openGraph: {
    title: 'About Us - Engineers First, Outcomes Always - Zadix',
    description: 'Built by senior engineers with enterprise microservices and AI orchestration backgrounds. Headquartered in Dubai Free Zone, serving global clients.',
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