import type { Metadata } from 'next'
import Contact from '@/components/pages/Contact'

export const metadata: Metadata = {
  title: 'Contact Us - Book a Demo - Zadix',
  description: 'Tell us about your workflow challenge and we\'ll show you exactly how our automation would handle it—with real data and your specific business rules.',
  openGraph: {
    title: 'Contact Us - Book a Demo - Zadix',
    description: 'Tell us about your workflow challenge and we\'ll show you exactly how our automation would handle it—with real data and your specific business rules.',
  },
}

export default function ContactPage() {
  return <Contact />
}