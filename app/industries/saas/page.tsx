import type { Metadata } from 'next'
import SaaS from '@/components/pages/industries/SaaS'

export const metadata: Metadata = {
  title: 'B2B SaaS AI Automation - Zadix',
  description: 'Clean pipeline. Faster revenue. Intelligent lead qualification, automated sales operations, and customer success workflows for B2B SaaS companies.',
  openGraph: {
    title: 'B2B SaaS AI Automation - Zadix',
    description: 'Clean pipeline. Faster revenue. Intelligent lead qualification, automated sales operations, and customer success workflows for B2B SaaS companies.',
  },
}

export default function SaaSPage() {
  return <SaaS />
}