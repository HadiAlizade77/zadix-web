import type { Metadata } from 'next'
import Pricing from '@/components/pages/Pricing'

export const metadata: Metadata = {
  title: 'Pricing - Fixed Scope, Fixed Timeline - Zadix',
  description: 'Transparent pricing for production-ready AI automation. Starter ($3,900), Pro ($12,900), Enterprise ($28k+). 30-day value guarantee.',
  openGraph: {
    title: 'Pricing - Fixed Scope, Fixed Timeline - Zadix',
    description: 'Transparent pricing for production-ready AI automation. Starter ($3,900), Pro ($12,900), Enterprise ($28k+). 30-day value guarantee.',
  },
}

export default function PricingPage() {
  return <Pricing />
}