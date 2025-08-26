import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Data Processing Agreement (DPA) | Zadix',
  description: 'Data Processing Agreement covering GDPR requirements and data handling procedures.',
}

export default function DPAPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <div className="min-h-screen pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-[#111827] mb-8">Data Processing Agreement</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#6B7280] mb-6">Last updated: January 2024</p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">1. Definitions</h2>
              <p className="text-[#6B7280] mb-4">
                This Data Processing Agreement ("DPA") forms part of the service agreement between 
                Zadix ("Processor") and the Client ("Controller").
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">2. Processing of Personal Data</h2>
              <p className="text-[#6B7280] mb-4">
                Zadix will process personal data only on documented instructions from the Controller, 
                including transfers to third countries or international organizations.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">3. Security Measures</h2>
              <p className="text-[#6B7280] mb-4">
                Zadix implements appropriate technical and organizational measures to ensure a level 
                of security appropriate to the risk, including:
              </p>
              <ul className="list-disc pl-6 text-[#6B7280] mb-4">
                <li>Encryption of personal data</li>
                <li>Ongoing confidentiality, integrity, availability and resilience</li>
                <li>Regular testing and evaluation of effectiveness</li>
                <li>Incident response procedures</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">4. Data Subject Rights</h2>
              <p className="text-[#6B7280] mb-4">
                Zadix will assist the Controller in fulfilling data subject requests, including 
                access, rectification, erasure, and portability rights.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">5. Data Retention</h2>
              <p className="text-[#6B7280] mb-4">
                Personal data will be deleted or returned to the Controller upon termination of 
                services, unless retention is required by law.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">6. Contact</h2>
              <p className="text-[#6B7280] mb-4">
                For DPA-related inquiries, contact our Data Protection Officer at{' '}
                <a href="mailto:dpo@zadix.ai" className="text-[#00B3A4] hover:underline">
                  dpo@zadix.ai
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  );
}