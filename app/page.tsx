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
import { VideoModal, useVideoModal } from '@/components/ui/video-modal';

export default function Home() {
  const { isOpen, closeModal } = useVideoModal();

  return (
    <div className="min-h-screen">
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
      <VideoModal 
        isOpen={isOpen} 
        onClose={closeModal}
        videoUrl="https://youtu.be/XXXXXXXXXXX"
        title="Zadix AI Automation Overview"
      />
    </div>
  );
}