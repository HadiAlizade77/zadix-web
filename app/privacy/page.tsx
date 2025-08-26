import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Privacy Policy | Zadix',
  description: 'How we collect, use, and protect your personal information.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <div className="min-h-screen pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-[#111827] mb-8">Privacy Policy</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#6B7280] mb-6">Last updated: January 2024</p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">1. Information We Collect</h2>
              <p className="text-[#6B7280] mb-4">
                We collect information you provide directly to us, such as when you create an account, 
                contact us, or use our services.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">2. How We Use Your Information</h2>
              <p className="text-[#6B7280] mb-4">
                We use the information we collect to provide, maintain, and improve our services, 
                communicate with you, and comply with legal obligations.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">3. Information Sharing</h2>
              <p className="text-[#6B7280] mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">4. Data Security</h2>
              <p className="text-[#6B7280] mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">5. Your Rights</h2>
              <p className="text-[#6B7280] mb-4">
                You have the right to access, update, or delete your personal information. 
                You may also object to certain processing of your data.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">6. Contact Us</h2>
              <p className="text-[#6B7280] mb-4">
                If you have any questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@zadix.ai" className="text-[#00B3A4] hover:underline">
                  privacy@zadix.ai
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