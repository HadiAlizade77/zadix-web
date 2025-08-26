import type { Metadata } from 'next'
import Industries from '@/components/pages/Industries'

export const metadata: Metadata = {
  title: 'Industry Solutions - Zadix',
  description: 'Purpose-built AI automation workflows for Real Estate, Investment, Logistics, Healthcare, Legal, Construction, SaaS, and Hospitality sectors.',
  openGraph: {
    title: 'Industry Solutions - Zadix',
    description: 'Purpose-built AI automation workflows for Real Estate, Investment, Logistics, Healthcare, Legal, Construction, SaaS, and Hospitality sectors.',
  },
}

export default function IndustriesPage() {
  return <Industries />
}