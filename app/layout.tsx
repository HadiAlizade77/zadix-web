import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import CookieBanner from '@/components/ui/cookie-banner';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'AI Automation Agency — Production-Ready in 7–14 Days | Zadix',
  description: 'We build AI automation that cuts manual work 50–80% and responds in under a minute. Fixed scope, fixed timeline, 30-day value guarantee. Serving businesses worldwide.',
  keywords: 'AI automation agency, workflow automation service, business process automation, agentic AI for business, n8n automation, make.com automation, automate business workflows, AI workflow developer, hire AI automation, real estate automation, logistics automation, SaaS automation',
  authors: [{ name: 'Zadix' }],
  creator: 'Zadix',
  publisher: 'Zadix',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://zadix.ai'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'AI Automation Agency — Production-Ready in 7–14 Days | Zadix',
    description: 'We build AI automation that cuts manual work 50–80% and responds in under a minute. Fixed scope, fixed timeline, 30-day value guarantee. Worldwide.',
    url: 'https://zadix.ai',
    siteName: 'Zadix',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zadix - AI Automation Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Automation Agency — Production-Ready in 7–14 Days | Zadix',
    description: 'We build AI automation that cuts manual work 50–80% and responds in under a minute. Fixed scope, fixed timeline, 30-day value guarantee.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(cormorant.variable, dmSans.variable)} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Zadix',
              url: 'https://zadix.ai',
              logo: 'https://zadix.ai/logo.png',
              image: 'https://zadix.ai/og-image.jpg',
              description: 'AI automation agency building production-ready workflows that cut manual work 50–80% in 7–14 days. Specialising in real estate, logistics, SaaS, investment, healthcare, and legal automation for businesses worldwide.',
              priceRange: '$$',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '71-75 Shelton Street',
                addressLocality: 'London',
                addressRegion: 'Greater London',
                postalCode: 'WC2H 9JQ',
                addressCountry: 'GB',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+447418635600',
                contactType: 'sales',
                email: 'hello@zadix.ai',
                availableLanguage: ['English', 'Arabic'],
              },
              areaServed: 'Worldwide',
              knowsAbout: [
                'AI Automation',
                'Workflow Automation',
                'Business Process Automation',
                'Agentic AI',
                'n8n',
                'Make.com',
                'Real Estate Lead Automation',
                'Logistics RFQ Automation',
              ],
              sameAs: [
                'https://linkedin.com/company/zadix-ai',
              ],
            }),
          }}
        />
      </head>
      <body className={cn('min-h-screen bg-ink text-cream font-dm-sans antialiased')}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}