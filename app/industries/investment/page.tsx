import type { Metadata } from 'next'
import Investment from '@/components/pages/industries/Investment'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Investment & Family Office AI Automation — Deal Memos in Minutes | Zadix',
  description: 'AI automation for investment firms, VCs, and family offices. Turn CIMs into IC memos in minutes, automate KYC and AML workflows, and track portfolio performance across systems.',
  keywords: 'investment firm automation, family office AI automation, deal memo automation, KYC automation investment, IC memo AI, investment workflow automation, private equity automation, VC automation, portfolio monitoring automation',
  alternates: { canonical: 'https://zadix.ai/industries/investment' },
  openGraph: {
    title: 'Investment & Family Office AI Automation — Deal Memos in Minutes | Zadix',
    description: 'AI automation for investment firms, VCs, and family offices. Turn CIMs into IC memos in minutes, automate KYC and AML workflows.',
    url: 'https://zadix.ai/industries/investment',
  },
}

export default function InvestmentPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Investment />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}