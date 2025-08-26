'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Locale } from '@/lib/i18n';
import { getTranslation } from '@/lib/translations';

interface MetricsStripProps {
  locale: Locale;
}

export default function MetricsStrip({ locale }: MetricsStripProps) {
  const metrics = [
    getTranslation(locale, 'home.metrics.1'),
    getTranslation(locale, 'home.metrics.2'),
    getTranslation(locale, 'home.metrics.3'),
    getTranslation(locale, 'home.metrics.4'),
  ];

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-2xl font-bold font-sora text-headline-slate mb-2">
                {metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}