import type { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileCTABar from '@/components/layout/MobileCTABar'

export const metadata: Metadata = {
  title: 'Privacy Policy | Zadix',
  description: 'How Zadix AI Ltd collects, uses, and protects your personal information in compliance with GDPR.',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <div className="min-h-screen pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-[#111827] mb-8">Privacy Policy (GDPR Compliance)</h1>
            <div className="prose prose-lg max-w-none">
              <p className="text-[#6B7280] mb-6">Last updated: January 2025</p>
              
              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">1. Introduction</h2>
              <p className="text-[#6B7280] mb-4">
                Zadix AI Ltd ("Zadix", "we", "our", or "us") respects your privacy and is committed to protecting your personal data.
                This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
                Zadix AI Ltd is registered in England and Wales (No. 16792922) and complies with the UK GDPR, EU GDPR, and Data Protection Act 2018.
              </p>

              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">2. Information We Collect</h2>
              <p className="text-[#6B7280] mb-4">
                We collect information that you provide directly to us (such as when you create an account or contact support),
                as well as data automatically collected through cookies and analytics tools.
                This may include your name, email address, account credentials, IP address, browser type, and usage information.
              </p>

              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-[#6B7280] mb-4">
                We process your personal data for the following purposes and lawful bases:
                to provide and operate our services (contractual necessity),
                to communicate with you and improve our platform (legitimate interest),
                to send marketing messages where permitted (consent),
                and to comply with legal and regulatory obligations (legal obligation).
              </p>

              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">4. Information Sharing</h2>
              <p className="text-[#6B7280] mb-4">
                We do not sell or rent your personal data.
                We may share information with trusted third parties that help us operate our business—such as hosting providers, analytics partners, and payment processors—
                all of which are bound by strict confidentiality and data processing agreements.
                Data may also be disclosed if required by law or to protect our legal rights.
              </p>

              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">5. International Transfers</h2>
              <p className="text-[#6B7280] mb-4">
                If we transfer your personal data outside the UK or EEA, we ensure it is protected using approved safeguards
                such as Standard Contractual Clauses or adequacy decisions recognised by the UK and EU authorities.
              </p>

              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">6. Data Retention</h2>
              <p className="text-[#6B7280] mb-4">
                We retain personal data only as long as necessary for the purposes described in this policy,
                unless a longer retention period is required by law.
                When data is no longer needed, it is securely deleted or anonymised.
              </p>

              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">7. Your Rights</h2>
              <p className="text-[#6B7280] mb-4">
                Under the UK and EU GDPR, you have the right to access, correct, delete, or restrict the processing of your personal data.
                You may also object to processing or withdraw consent where applicable.
                To exercise these rights, please contact us at{' '}
                <a href="mailto:privacy@zadix.ai" className="text-[#00B3A4] hover:underline">
                  privacy@zadix.ai
                </a>.
                You also have the right to lodge a complaint with the UK Information Commissioner’s Office (ICO) at <a href="https://ico.org.uk" target="_blank" className="text-[#00B3A4] hover:underline">ico.org.uk</a>.
              </p>

              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">8. Data Security</h2>
              <p className="text-[#6B7280] mb-4">
                We use technical and organisational measures to protect your data,
                including encryption, secure storage, access controls, and regular system monitoring to prevent unauthorised access or misuse.
              </p>

              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">9. Contact Us</h2>
              <p className="text-[#6B7280] mb-4">
                Zadix AI Ltd<br />
                71–75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom<br />
                Registered in England and Wales No. 16792922<br />
                Email:{' '}
                <a href="mailto:privacy@zadix.ai" className="text-[#00B3A4] hover:underline">
                  privacy@zadix.ai
                </a>
              </p>

              <h2 className="text-2xl font-bold text-[#111827] mt-8 mb-4">10. Changes to This Policy</h2>
              <p className="text-[#6B7280] mb-4">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.
                The latest version will always be available on this page, and the "Last updated" date above will indicate the most recent revision.
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
