import type { Metadata } from 'next'
import Investment from '@/components/pages/industries/Investment'

export const metadata: Metadata = {
  title: 'Investment & Family Office AI Automation - Zadix',
  description: 'From CIM to IC memo in minutes. Automated deal analysis, KYC workflows, and portfolio monitoring for family offices and investment firms.',
  openGraph: {
    title: 'Investment & Family Office AI Automation - Zadix',
    description: 'From CIM to IC memo in minutes. Automated deal analysis, KYC workflows, and portfolio monitoring for family offices and investment firms.',
  },
}

export default function InvestmentPage() {
  return <Investment />
}