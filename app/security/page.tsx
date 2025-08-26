import type { Metadata } from 'next'
import Security from '@/components/pages/Security'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Security & Compliance - SOC-Aligned Controls | Zadix',
  description: 'Enterprise-grade security with audit trails, RBAC, encryption, and full observability. SOC-aligned controls for production AI automation.',
  openGraph: {
    title: 'Security & Compliance - SOC-Aligned Controls | Zadix',
    description: 'Enterprise-grade security with audit trails, RBAC, encryption, and full observability. SOC-aligned controls for production AI automation.',
  },
}

export default function SecurityPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Security />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  )
}