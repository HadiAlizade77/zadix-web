'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Locale } from '@/lib/i18n';
import { useVideoModal } from '@/components/ui/video-modal';

// Load 3-D scene client-side only (no SSR)
const NeuralLattice = dynamic(
  () => import('@/components/3d/NeuralLattice'),
  { ssr: false, loading: () => null }
);

interface HeroProps {
  locale: Locale;
}

export default function Hero({ locale }: HeroProps) {
  const { openModal } = useVideoModal();

  return (
    <section className="relative min-h-screen bg-ink overflow-hidden flex flex-col justify-end pb-20 lg:pb-28">

      {/* ── 3-D neural lattice ── right 65% on desktop, full bg on mobile */}
      <div className="absolute inset-0 lg:left-[32%] pointer-events-none">
        <NeuralLattice />
      </div>

      {/* left gradient — blends 3D into text area */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[58%] bg-gradient-to-r from-ink via-ink/95 to-transparent pointer-events-none z-10" />

      {/* mobile overlay — keeps text readable */}
      <div className="absolute inset-0 bg-ink/55 lg:hidden pointer-events-none z-10" />

      {/* bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent pointer-events-none z-10" />

      {/* ── text content ── */}
      <div className="relative z-20 max-w-container mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28">

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
          className="font-cormorant font-light text-cream mb-14 leading-[0.88] max-w-2xl"
          style={{ fontSize: 'clamp(3.5rem, 8.5vw, 8.5rem)' }}
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
          className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10 max-w-2xl"
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

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-16 flex items-center gap-3 text-muted/40"
        >
          <div className="w-px h-10 bg-gradient-to-b from-transparent to-border-warm" />
          <span className="text-xs font-dm-sans tracking-[0.2em] uppercase">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
}
