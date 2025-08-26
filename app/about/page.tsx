import type { Metadata } from 'next'
import About from '@/components/pages/About'

export const metadata: Metadata = {
  title: 'About Us - Engineers First, Outcomes Always - Zadix',
  description: 'Built by senior engineers with enterprise microservices and AI orchestration backgrounds. Headquartered in Dubai Free Zone, serving global clients.',
  openGraph: {
    title: 'About Us - Engineers First, Outcomes Always - Zadix',
    description: 'Built by senior engineers with enterprise microservices and AI orchestration backgrounds. Headquartered in Dubai Free Zone, serving global clients.',
  },
}

export default function AboutPage() {
  return <About />
}