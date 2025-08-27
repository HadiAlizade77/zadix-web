import type { Metadata } from 'next'
import Solutions from '@/components/pages/Solutions'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'From Inbox to System of Record — Solutions | Zadix',
  description: 'Automations that understand documents and emails, route approvals, and safely update your systems.',
  openGraph: {
    title: 'From Inbox to System of Record — Solutions | Zadix',
    description: 'Automations that understand documents and emails, route approvals, and safely update your systems.',
  },
}

export default function SolutionsPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Solutions />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}