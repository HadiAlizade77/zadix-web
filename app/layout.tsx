import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const sora = Sora({ 
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Agentic AI Automation for Business — Production-Ready in 7–14 Days | Zadix',
  description: 'We build AI automations that cut manual work 50–80% and respond in under a minute. Fixed scope, fixed timeline, 30-day value guarantee.',
  keywords: 'ai automation dubai, agentic ai for business, workflow automation uae, real estate ai automation, logistics rfq automation, investment memo ai',
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
    languages: {
      'en': '/',
      'ar': '/ar',
      'tr': '/tr',
      'ru': '/ru',
    },
  },
  openGraph: {
    title: 'Agentic AI Automation for Business — Production-Ready in 7–14 Days | Zadix',
    description: 'We build AI automations that cut manual work 50–80% and respond in under a minute. Fixed scope, fixed timeline, 30-day value guarantee.',
    url: 'https://zadix.ai',
    siteName: 'Zadix',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Zadix - Agentic AI Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic AI Automation for Business — Production-Ready in 7–14 Days | Zadix',
    description: 'We build AI automations that cut manual work 50–80% and respond in under a minute. Fixed scope, fixed timeline, 30-day value guarantee.',
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
    <html lang="en" className={cn(inter.variable, sora.variable)} suppressHydrationWarning>
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
              '@type': 'Organization',
              name: 'Zadix',
              url: 'https://zadix.ai',
              logo: 'https://zadix.ai/logo.png',
              description: 'We build AI automations that cut manual work 50–80% and respond in under a minute.',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Dubai',
                addressCountry: 'UAE',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+971-4-123-4567',
                contactType: 'customer service',
                email: 'hello@zadix.ai',
              },
              sameAs: [
                'https://linkedin.com/company/zadix-ai',
              ],
            }),
          }}
        />
      </head>
      <body className={cn('min-h-screen bg-white font-inter antialiased')}>
        {children}
      </body>
    </html>
  );
}