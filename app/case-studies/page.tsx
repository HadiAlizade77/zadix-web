import type { Metadata } from 'next'
import CaseStudies from '@/components/pages/CaseStudies'

export const metadata: Metadata = {
  title: 'Case Studies - Real Results from Real Clients - Zadix',
  description: 'See how companies are using our AI automation to eliminate busywork. Real case studies with measurable outcomes and ROI.',
  openGraph: {
    title: 'Case Studies - Real Results from Real Clients - Zadix',
    description: 'See how companies are using our AI automation to eliminate busywork. Real case studies with measurable outcomes and ROI.',
  },
}

export default function CaseStudiesPage() {
  return <CaseStudies />
}