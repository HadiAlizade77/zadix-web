import type { Metadata } from 'next'
import CaseStudies from '@/components/pages/CaseStudies'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Case Studies — Measurable Outcomes | Zadix',
  description: 'See how teams saved hours each week and sped responses.',
  openGraph: {
    title: 'Case Studies — Measurable Outcomes | Zadix',
    description: 'See how teams saved hours each week and sped responses.',
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