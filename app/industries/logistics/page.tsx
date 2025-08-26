import type { Metadata } from 'next'
import Logistics from '@/components/pages/industries/Logistics'

export const metadata: Metadata = {
  title: 'Logistics & Freight AI Automation - Zadix',
  description: 'RFQ in, quote out—profit-guarded. Automated freight forwarding with rate lookup, margin protection, and CRM integration.',
  openGraph: {
    title: 'Logistics & Freight AI Automation - Zadix',
    description: 'RFQ in, quote out—profit-guarded. Automated freight forwarding with rate lookup, margin protection, and CRM integration.',
  },
}

export default function LogisticsPage() {
  return <Logistics />
}