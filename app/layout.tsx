import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Zadix - Agentic AI Automation for Business Operations',
  description: 'We build agentic AI automations that eliminate repetitive ops. Production-ready systems with LangGraph + n8n that ship real business outcomes in days, not months.',
  keywords: 'AI automation, agentic AI, business process automation, LangGraph, n8n, Dubai AI company, workflow automation',
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
    title: 'Zadix - Agentic AI Automation for Business Operations',
    description: 'We build agentic AI automations that eliminate repetitive ops. Production-ready systems that ship real business outcomes in days, not months.',
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
    title: 'Zadix - Agentic AI Automation for Business Operations',
    description: 'We build agentic AI automations that eliminate repetitive ops. Production-ready systems that ship real business outcomes in days, not months.',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}