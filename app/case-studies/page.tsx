import type { Metadata } from 'next'
import CaseStudies from '@/components/pages/CaseStudies'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Case Studies - Real Results from Real Clients - Zadix',
  description: 'See how companies are using our AI automation to eliminate busywork. Real case studies with measurable outcomes and ROI.',
  openGraph: {
    title: 'Case Studies - Real Results from Real Clients - Zadix',
    description: 'See how companies are using our AI automation to eliminate busywork. Real case studies with measurable outcomes and ROI.',
  },
}

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <CaseStudies />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}