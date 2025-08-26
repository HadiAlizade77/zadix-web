import type { Metadata } from 'next'
import Process from '@/components/pages/Process'

export const metadata: Metadata = {
  title: '7-Day Delivery Process - Zadix',
  description: 'From requirements to production-ready automation in 7 days. Daily updates, sandbox access by Day 3, complete handover with documentation.',
  openGraph: {
    title: '7-Day Delivery Process - Zadix',
    description: 'From requirements to production-ready automation in 7 days. Daily updates, sandbox access by Day 3, complete handover with documentation.',
  },
}

export default function ProcessPage() {
  return <Process />
}