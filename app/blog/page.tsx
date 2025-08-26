import type { Metadata } from 'next'
import Blog from '@/components/pages/Blog'

export const metadata: Metadata = {
  title: 'Engineering Blog - Production AI Insights - Zadix',
  description: 'Deep technical content on building reliable, observable, and scalable AI automation systems. From architecture decisions to production war stories.',
  openGraph: {
    title: 'Engineering Blog - Production AI Insights - Zadix',
    description: 'Deep technical content on building reliable, observable, and scalable AI automation systems. From architecture decisions to production war stories.',
  },
}

export default function BlogPage() {
  return <Blog />
}