'use client';

import React from 'react';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { VideoModal, useVideoModal } from '@/components/ui/video-modal';
import { Locale, isRtlLocale } from '@/lib/i18n';
import { getTranslation } from '@/lib/translations';
import { cn, getLocaleFromCookie } from '@/lib/utils';

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const { isOpen, openModal, closeModal } = useVideoModal();
  const [currentLocale, setCurrentLocale] = useState<Locale>('en');

  // Initialize locale from cookie on client side
  useEffect(() => {
    const cookieLocale = getLocaleFromCookie();
    setCurrentLocale(cookieLocale);
  }, []);

  return (
    <section className={cn(
      "relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-ink via-gray-900 to-dark-ink",
      isRtlLocale(currentLocale) && "rtl"
    )}>
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-teal/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className={cn(
        "relative max-w-container mx-auto px-4 sm:px-6 lg:px-8",
        isRtlLocale(currentLocale) && "dir-rtl"
      )}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-h1 font-sora text-white mb-6 leading-tight">
              Automate your operations with AI—fast.
            </h1>
            
            <p className="text-body text-gray-300 mb-8 leading-relaxed max-w-2xl">
              We deploy production‑ready automations that cut manual work <strong>50–80%</strong> and speed up response times to <strong>under a minute</strong>—with clear scope and delivery in <strong>7–14 days</strong>.
            </p>

            {/* Key Benefits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-gray-300">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                <span className="text-sm">Fixed scope, fixed timeline</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                <span className="text-sm">30-day value guarantee</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                <span className="text-sm">Full source code handover</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Book a 20‑min demo
                  <ArrowRight className={cn(
                    "h-5 w-5",
                    isRtlLocale(currentLocale) ? "mr-2" : "ml-2"
                  )} />
                </Link>
              </Button>
              <Button 
                size="xl" 
                variant="outline" 
                className="bg-white/10 border-white/20 text-white hover:bg-white/20" 
                onClick={openModal}
              >
                <Play className={cn(
                  "h-5 w-5",
                  isRtlLocale(currentLocale) ? "ml-2" : "mr-2"
                )} />
                Watch 2‑min overview
              </Button>
            </div>

            {/* Trust Logos Row */}
            <div className="text-gray-400 text-sm">
              Trusted by companies in Dubai, London, and New York
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px]">
              {/* Abstract workflow visualization */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {/* Central node */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-accent-teal to-accent-blue rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Surrounding nodes */}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <motion.div
                      key={i}
                      className="absolute w-12 h-12 bg-gradient-to-br from-accent-teal/20 to-accent-blue/20 rounded-full border-2 border-accent-teal/30"
                      style={{
                        top: `${50 + 35 * Math.sin((i * Math.PI) / 3)}%`,
                        left: `${50 + 35 * Math.cos((i * Math.PI) / 3)}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.3,
                        repeat: Infinity,
                        repeatType: 'reverse',
                      }}
                    >
                      <div className="w-full h-full bg-white/10 rounded-full"></div>
                    </motion.div>
                  ))}
                  
                  {/* Connection lines */}
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <div
                      key={`line-${i}`}
                      className="absolute w-0.5 bg-gradient-to-b from-accent-teal/30 to-transparent"
                      style={{
                        height: '35%',
                        top: '50%',
                        left: '50%',
                        transformOrigin: 'top center',
                        transform: `translate(-50%, 0) rotate(${i * 60}deg)`,
                      }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
        </div>
      </motion.div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isOpen}
        onClose={closeModal}
        title="Zadix AI Automation Overview"
        // videoUrl="https://www.youtube.com/embed/your-video-id" // Add when video is ready
      />
    </section>
  );
}