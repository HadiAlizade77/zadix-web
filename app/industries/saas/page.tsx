import type { Metadata } from 'next'
import SaaS from '@/components/pages/industries/SaaS'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'B2B SaaS AI Automation - Zadix',
  description: 'Clean pipeline. Faster revenue. Intelligent lead qualification, automated sales operations, and customer success workflows for B2B SaaS companies.',
  openGraph: {
    title: 'B2B SaaS AI Automation - Zadix',
    description: 'Clean pipeline. Faster revenue. Intelligent lead qualification, automated sales operations, and customer success workflows for B2B SaaS companies.',
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