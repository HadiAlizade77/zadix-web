import type { Metadata } from 'next'
import Hospitality from '@/components/pages/industries/Hospitality'

export const metadata: Metadata = {
  title: 'Hospitality AI Automation - Zadix',
  description: 'Guest joy, operational calm. AI-powered guest service automation and operational workflows for hotels and luxury retail operations.',
  openGraph: {
    title: 'Hospitality AI Automation - Zadix',
    description: 'Guest joy, operational calm. AI-powered guest service automation and operational workflows for hotels and luxury retail operations.',
  },
}

export default function HospitalityPage() {
  return <Hospitality />
}