'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Locale } from '@/lib/i18n';
import { useVideoModal } from '@/components/ui/video-modal';

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const { openModal } = useVideoModal();

  return (
    <section className="relative min-h-screen bg-ink flex flex-col justify-end pb-20 lg:pb-28 overflow-hidden">

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #E8963C 1px, transparent 1px), linear-gradient(to bottom, #E8963C 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          opacity: 0.03,
        }}
      />

      {/* Vertical accent line (desktop) */}
      <div className="hidden lg:block absolute right-[12%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-amber/25 to-transparent pointer-events-none" />

      {/* Glow behind headline */}
      <div className="absolute left-0 bottom-1/3 w-[600px] h-[600px] bg-amber/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2" />

      <div className="relative z-10 max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center gap-4 mb-10"
        >
          <span className="w-10 h-px bg-amber inline-block" />
          <span className="text-amber text-xs font-dm-sans font-medium tracking-[0.25em] uppercase">
            AI Automation Agency
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-cormorant font-light text-cream mb-14 leading-[0.88]"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)' }}
        >
          Automate<br />
          your operations<br />
          <em className="text-amber not-italic">fast.</em>
        </motion.h1>

        {/* Sub + CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35, ease: 'easeOut' }}
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10"
        >
          <p className="text-muted font-dm-sans text-xl leading-relaxed max-w-md">
            Production‑ready automations that cut manual work{' '}
            <span className="text-cream font-medium">50–80%</span> and go live in{' '}
            <span className="text-cream font-medium">7–14 days</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Button size="xl" asChild>
              <Link href="/contact">Book a 20‑min demo</Link>
            </Button>
            <Button size="xl" variant="outline" onClick={openModal}>
              Watch 2‑min overview
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-16 flex items-center gap-3 text-muted/50"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-border-warm" />
          <span className="text-xs font-dm-sans tracking-[0.2em] uppercase">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
