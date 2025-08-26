import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Cookie Policy | Zadix',
  description: 'How we use cookies and similar technologies.',
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <div className="min-h-screen pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-[#111827] mb-8">Cookie Policy</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#6B7280] mb-6">Last updated: January 2024</p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">What Are Cookies</h2>
              <p className="text-[#6B7280] mb-4">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-semibold text-[#111827] mt-6 mb-3">Essential Cookies</h3>
              <p className="text-[#6B7280] mb-4">
                These cookies are necessary for the website to function properly. They enable basic 
                functions like page navigation and access to secure areas.
              </p>
              
              <h3 className="text-xl font-semibold text-[#111827] mt-6 mb-3">Analytics Cookies</h3>
              <p className="text-[#6B7280] mb-4">
                These cookies help us understand how visitors interact with our website by collecting 
                and reporting information anonymously.
              </p>
              
              <h3 className="text-xl font-semibold text-[#111827] mt-6 mb-3">Preference Cookies</h3>
              <p className="text-[#6B7280] mb-4">
                These cookies remember your preferences and settings to provide a more personalized 
                experience, such as language selection.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">Managing Cookies</h2>
              <p className="text-[#6B7280] mb-4">
                You can control and manage cookies through your browser settings. Please note that 
                removing or blocking cookies may impact your user experience.
              </p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">Contact Us</h2>
              <p className="text-[#6B7280] mb-4">
                If you have questions about our use of cookies, please contact us at{' '}
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