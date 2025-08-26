import type { Metadata } from 'next'
import Investment from '@/components/pages/industries/Investment'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Investment & Family Office AI Automation - Zadix',
  description: 'From CIM to IC memo in minutes. Automated deal analysis, KYC workflows, and portfolio monitoring for family offices and investment firms.',
  openGraph: {
    title: 'Investment & Family Office AI Automation - Zadix',
    description: 'From CIM to IC memo in minutes. Automated deal analysis, KYC workflows, and portfolio monitoring for family offices and investment firms.',
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