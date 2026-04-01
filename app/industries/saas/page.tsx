import type { Metadata } from 'next'
import SaaS from '@/components/pages/industries/SaaS'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'B2B SaaS AI Automation — Lead Qualification & Sales Ops | Zadix',
  description: 'AI automation for B2B SaaS companies. Qualify inbound leads instantly, automate trial-to-paid sequences, and keep your CRM clean — so your sales team focuses on closing.',
  keywords: 'B2B SaaS automation, SaaS lead qualification AI, sales automation SaaS, CRM automation SaaS, trial conversion automation, SaaS workflow automation, inbound lead automation',
  alternates: { canonical: 'https://zadix.ai/industries/saas' },
  openGraph: {
    title: 'B2B SaaS AI Automation — Lead Qualification & Sales Ops | Zadix',
    description: 'AI automation for B2B SaaS companies. Qualify inbound leads instantly, automate trial-to-paid sequences, and keep your CRM clean.',
    url: 'https://zadix.ai/industries/saas',
  },
}

export default function SaaSPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <SaaS />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}