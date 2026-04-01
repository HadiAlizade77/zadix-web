'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Locale } from '@/lib/i18n';

interface GuaranteeBannerProps {
  locale: Locale;
}

export default function GuaranteeBanner({ locale }: GuaranteeBannerProps) {
  return (
    <section className="py-16 bg-amber">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="text-ink/60 font-dm-sans text-xs font-medium tracking-[0.25em] uppercase mb-2">
              Our Promise
            </p>
            <h2 className="font-cormorant font-medium text-ink leading-tight"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
            >
              30-day value guarantee
            </h2>
          </div>
          <p className="text-ink/70 font-dm-sans text-lg max-w-sm text-center md:text-right leading-relaxed">
            If you don't see measurable time saved, we keep working until you do.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
