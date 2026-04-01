import type { Metadata } from 'next'
import Industries from '@/components/pages/Industries'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'AI Automation by Industry — Real Estate, Logistics, SaaS, Legal & More | Zadix',
  description: 'Purpose-built AI automation for every industry. Real estate, investment, logistics, healthcare, legal, construction, SaaS, and hospitality — each with pre-built patterns and 7-day delivery.',
  keywords: 'AI automation by industry, industry specific automation, vertical AI automation, AI workflow by sector, business automation solutions, sector specific AI',
  alternates: { canonical: 'https://zadix.ai/industries' },
  openGraph: {
    title: 'AI Automation by Industry — Real Estate, Logistics, SaaS, Legal & More | Zadix',
    description: 'Purpose-built AI automation for every industry. Real estate, investment, logistics, healthcare, legal, construction, SaaS, and hospitality.',
    url: 'https://zadix.ai/industries',
  },
}

export default function IndustriesPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Industries />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}