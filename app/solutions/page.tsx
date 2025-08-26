import type { Metadata } from 'next'
import Solutions from '@/components/pages/Solutions'

export const metadata: Metadata = {
  title: 'AI Automation Solutions - Zadix',
  description: 'Production-ready agentic AI systems built with LangGraph and n8n. From inbox to system-of-record—automated, approved, and auditable.',
  openGraph: {
    title: 'AI Automation Solutions - Zadix',
    description: 'Production-ready agentic AI systems built with LangGraph and n8n. From inbox to system-of-record—automated, approved, and auditable.',
  },
}

export default function SolutionsPage() {
  return <Solutions />
}