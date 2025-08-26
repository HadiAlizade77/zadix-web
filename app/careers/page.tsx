import type { Metadata } from 'next'
import Careers from '@/components/pages/Careers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Careers - Join Our Team | Zadix',
  description: 'Join our team of senior engineers building production-ready AI automation systems. Remote-first culture with competitive compensation.',
  openGraph: {
    title: 'Careers - Join Our Team | Zadix',
    description: 'Join our team of senior engineers building production-ready AI automation systems. Remote-first culture with competitive compensation.',
  },
}

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Careers />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}