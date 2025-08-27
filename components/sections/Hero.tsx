'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Locale } from '@/lib/i18n';
import { getTranslation } from '@/lib/translations';
import { useVideoModal } from '@/components/ui/video-modal';

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const { openModal } = useVideoModal();

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0B1220] via-[#0F1629] to-[#0B1220] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-[#00B3A4]/20 to-[#2563EB]/20 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-br from-[#2563EB]/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-2xl"
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -20, 20, 0],
            scale: [1, 1.2, 0.8, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 10
          }}
        ></motion.div>
      </div>

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold font-sora text-white mb-8 leading-tight">
            Automate your operations with AI—
            <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
              fast.
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto mb-12 leading-relaxed">
            We deploy production‑ready automations that cut manual work <strong className="text-white">50–80%</strong> and 
            speed up response times to <strong className="text-white">under a minute</strong>—with clear scope and 
            delivery in <strong className="text-white">7–14 days</strong>.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Button size="xl" asChild>
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Book a 20‑min demo
              </Link>
            </Button>
            <Button 
              size="xl" 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={openModal}
            >
              Watch 2‑min overview
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}