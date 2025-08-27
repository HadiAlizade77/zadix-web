import type { Metadata } from 'next'
import Security from '@/components/pages/Security'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Security — SOC‑Aligned Controls by Default | Zadix',
  description: 'Audit trails, RBAC, encryption, observability, backups, incident response.',
  openGraph: {
    title: 'Security — SOC‑Aligned Controls by Default | Zadix',
    description: 'Audit trails, RBAC, encryption, observability, backups, incident response.',
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