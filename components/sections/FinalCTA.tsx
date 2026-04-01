'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Locale } from '@/lib/i18n';
import { getTranslation } from '@/lib/translations';
import { getBusinessConfig } from '@/lib/utils';

interface FinalCTAProps {
  locale: Locale;
}

export default function FinalCTA({ locale }: FinalCTAProps) {
  const business = getBusinessConfig();

  return (
    <section className="py-32 bg-ink relative overflow-hidden">
      {/* Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(to right, #E8963C 1px, transparent 1px), linear-gradient(to bottom, #E8963C 1px, transparent 1px)',
          backgroundSize: '100px 100px',
          opacity: 0.025,
        }}
      />
      {/* Glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-amber text-xs font-dm-sans font-medium tracking-[0.25em] uppercase mb-8">
            Get Started
          </p>

          <h2
            className="font-cormorant font-light text-cream mb-8 leading-tight"
            style={{ fontSize: 'clamp(2.8rem, 6vw, 5.5rem)' }}
          >
            Ready to replace<br />
            <em className="text-amber not-italic">repetitive work?</em>
          </h2>

          <p className="text-muted font-dm-sans text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Tell us your workflow challenge and we'll show you exactly how our automation would handle it—with real data and your business rules.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" asChild>
              <Link href="/contact">
                {getTranslation(locale, 'cta.bookDemo')}
              </Link>
            </Button>
            <Button size="xl" variant="outline" asChild>
              <a
                href={`https://wa.me/${business.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>

          <p className="text-muted/50 text-sm mt-8 font-dm-sans tracking-wide">
            30-minute demo · No sales pitch · See your automation in action
          </p>
        </motion.div>
      </div>
    </section>
  );
}
