'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Locale } from '@/lib/i18n';

interface MetricsStripProps {
  locale: Locale;
}

export default function MetricsStrip({ locale }: MetricsStripProps) {
  const metrics = [
    { number: '80%',   label: 'Less manual work',   sub: 'measured at 30 days post-launch' },
    { number: '< 1m',  label: 'Response time',       sub: 'automated reply handling' },
    { number: '7–14d', label: 'Go live',              sub: 'fixed-scope delivery' },
    { number: '30d',   label: 'Value guarantee',      sub: 'or we keep working' },
  ];

  return (
    <section className="bg-surface border-y border-border-warm">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border-warm">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="px-8 py-12 text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div
                className="font-cormorant font-light text-amber leading-none mb-3 group-hover:scale-105 transition-transform duration-300"
                style={{ fontSize: 'clamp(2.8rem, 5vw, 4.5rem)' }}
              >
                {metric.number}
              </div>
              <div className="text-cream font-dm-sans font-medium text-sm tracking-widest uppercase mb-1">
                {metric.label}
              </div>
              <div className="text-muted font-dm-sans text-xs">
                {metric.sub}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
