import type { Metadata } from 'next'
import Blog from '@/components/pages/Blog'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Engineering Blog - Production AI Insights - Zadix',
  description: 'Deep technical content on building reliable, observable, and scalable AI automation systems. From architecture decisions to production war stories.',
  openGraph: {
    title: 'Engineering Blog - Production AI Insights - Zadix',
    description: 'Deep technical content on building reliable, observable, and scalable AI automation systems. From architecture decisions to production war stories.',
  },
}

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Blog />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}