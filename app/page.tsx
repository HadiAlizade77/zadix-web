import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import TrustStrip from '@/components/sections/TrustStrip';
import VideoOverview from '@/components/sections/VideoOverview';
import MetricsStrip from '@/components/sections/MetricsStrip';
import WhatWeDeliver from '@/components/sections/WhatWeDeliver';
import HowItWorks from '@/components/sections/HowItWorks';
import IndustriesGrid from '@/components/sections/IndustriesGrid';
import PricingSnapshot from '@/components/sections/PricingSnapshot';
import GuaranteeBanner from '@/components/sections/GuaranteeBanner';
import SecuritySnippet from '@/components/sections/SecuritySnippet';
import FinalCTA from '@/components/sections/FinalCTA';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MobileCTABar from '@/components/layout/MobileCTABar';

export const metadata: Metadata = {
  title: 'AI Automation Agency — Production-Ready Workflows in 7–14 Days | Zadix',
  description: 'Zadix builds AI automation for businesses worldwide. Cut manual work 50–80%, respond to leads in under 60 seconds. Fixed scope, fixed timeline, 30-day value guarantee. Serving UAE, UK, US, Europe and globally.',
  keywords: 'AI automation agency, workflow automation service, agentic AI for business, automate business processes, AI automation consultant, n8n automation agency, make.com automation, business process automation, AI workflow agency, hire AI automation developer, AI automation company, automate repetitive tasks',
  alternates: {
    canonical: 'https://zadix.ai',
  },
  openGraph: {
    title: 'AI Automation Agency — Production-Ready Workflows in 7–14 Days | Zadix',
    description: 'Zadix builds AI automation for businesses worldwide. Cut manual work 50–80%, respond to leads in under 60 seconds. Fixed scope, fixed timeline, 30-day value guarantee.',
    url: 'https://zadix.ai',
    type: 'website',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How long does it take to build an AI automation?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most production-ready automations are delivered in 7–14 business days. Day 1–2 is scoping and access setup, Day 3–5 is the core build, Day 6 is UAT, Day 7 is handover. Complex multi-system integrations may take 14 days.',
      },
    },
    {
      '@type': 'Question',
      name: 'What types of businesses does Zadix automate?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We specialise in AI automation for real estate agencies in Dubai, freight and logistics companies in UAE, B2B SaaS companies, investment and family offices, healthcare providers, legal firms, and construction companies. We serve clients globally with a strong focus on the UAE and Middle East.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I own the automation after delivery?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes — full source code ownership is transferred on delivery day. No vendor lock-in, no ongoing platform fees to Zadix. You own everything.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is your guarantee?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We offer a 30-day value guarantee. If the automation does not demonstrably reduce manual work within 30 days of going live, we will fix it at no additional charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'How much does AI automation cost?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every project is scoped and priced individually based on complexity and integrations required. Contact us for a free 20-minute scoping call where we will assess your workflow and provide a fixed-price proposal.',
      },
    },
    {
      '@type': 'Question',
      name: 'What regions do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We work with clients globally. Our primary markets include the UAE (Dubai, Abu Dhabi), Saudi Arabia, the United Kingdom, United States, Europe, and Southeast Asia. Remote delivery means location is never a barrier.',
      },
    },
  ],
};

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header locale="en" />
      <main>
        <Hero locale="en" />
        <TrustStrip />
        <VideoOverview />
        <MetricsStrip locale="en" />
        <WhatWeDeliver locale="en" />
        <HowItWorks locale="en" />
        <IndustriesGrid locale="en" />
        <PricingSnapshot locale="en" />
        <GuaranteeBanner locale="en" />
        <SecuritySnippet locale="en" />
        <FinalCTA locale="en" />
      </main>
      <Footer locale="en" />
      <MobileCTABar locale="en" />
    </div>
  );
}