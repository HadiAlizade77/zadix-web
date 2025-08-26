import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Terms of Service | Zadix',
  description: 'Terms and conditions for using Zadix services.',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <div className="min-h-screen pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-[#111827] mb-8">Terms of Service</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#6B7280] mb-6">Last updated: January 2024</p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-[#6B7280] mb-4">
                By accessing and using Zadix services, you accept and agree to be bound by the terms 
                and provision of this agreement.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">2. Services</h2>
              <p className="text-[#6B7280] mb-4">
                Zadix provides AI automation services for business operations. We build and deploy 
                production-ready automation systems according to agreed specifications.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">3. Payment Terms</h2>
              <p className="text-[#6B7280] mb-4">
                Payment terms are specified in individual service agreements. All fees are non-refundable 
                except as specified in our 30-day value guarantee.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">4. Intellectual Property</h2>
              <p className="text-[#6B7280] mb-4">
                Upon full payment, clients receive complete ownership of custom automation code developed 
                specifically for their project.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">5. Limitation of Liability</h2>
              <p className="text-[#6B7280] mb-4">
                Zadix's liability is limited to the amount paid for services. We are not liable for 
                indirect, incidental, or consequential damages.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">6. Contact Information</h2>
              <p className="text-[#6B7280] mb-4">
                For questions about these Terms of Service, contact us at{' '}
                <a href="mailto:legal@zadix.ai" className="text-[#00B3A4] hover:underline">
                  legal@zadix.ai
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