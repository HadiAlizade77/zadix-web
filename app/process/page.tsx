import type { Metadata } from 'next'
import Process from '@/components/pages/Process'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: '7-Day Delivery Process - Zadix',
  description: 'From requirements to production-ready automation in 7 days. Daily updates, sandbox access by Day 3, complete handover with documentation.',
  openGraph: {
    title: '7-Day Delivery Process - Zadix',
    description: 'From requirements to production-ready automation in 7 days. Daily updates, sandbox access by Day 3, complete handover with documentation.',
  },
}

export default function ProcessPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Process />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}