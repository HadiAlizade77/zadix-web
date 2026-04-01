'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Locale } from '@/lib/i18n';

interface HowItWorksProps {
  locale: Locale;
}

export default function HowItWorks({ locale }: HowItWorksProps) {
  const steps = [
    { title: 'Connect',   description: 'Your email, documents, and existing systems become inputs.' },
    { title: 'Understand', description: 'We extract what matters—structured data from unstructured noise.' },
    { title: 'Approve',   description: 'You confirm critical actions before anything is committed.' },
    { title: 'Update',    description: 'Records changed, tasks done, stakeholders notified automatically.' },
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-8 h-px bg-amber" />
          <span className="text-amber text-xs font-dm-sans font-medium tracking-[0.25em] uppercase">
            How It Works
          </span>
        </motion.div>

        <motion.h2
          className="font-cormorant font-light text-cream mb-16 leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          From document to decision<br />
          <em className="text-amber not-italic">in minutes, not hours.</em>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-warm border border-border-warm">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="bg-surface p-8 lg:p-10 group hover:bg-surface-2 transition-colors duration-300"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div
                className="font-cormorant font-light text-border-warm leading-none mb-8 group-hover:text-amber/15 transition-colors duration-300 select-none"
                style={{ fontSize: '6rem' }}
              >
                0{index + 1}
              </div>
              <h3 className="font-cormorant font-medium text-cream text-2xl mb-3">
                {step.title}
              </h3>
              <p className="text-muted font-dm-sans text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
