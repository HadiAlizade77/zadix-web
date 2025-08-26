import Hero from '@/components/sections/Hero';
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

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header locale="en" />
      <main>
        <Hero locale="en" />
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