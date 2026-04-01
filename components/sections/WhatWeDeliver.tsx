'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Locale } from '@/lib/i18n';

interface WhatWeDeliverProps {
  locale: Locale;
}

export default function WhatWeDeliver({ locale }: WhatWeDeliverProps) {
  const deliverables = [
    {
      title: 'Workflow Automation',
      description: 'Intake → extract → validate → route → update—without the busywork. Every step documented, every action logged.',
    },
    {
      title: 'Decision Support',
      description: 'Context‑aware recommendations with simple approvals so you stay in control. AI suggests, humans decide.',
    },
    {
      title: 'System Integration',
      description: 'Your inbox, docs, CRM/ERP, and databases working together end‑to‑end. No more manual data transfer.',
    },
  ];

  return (
    <section className="py-24 bg-ink">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-8 h-px bg-amber" />
          <span className="text-amber text-xs font-dm-sans font-medium tracking-[0.25em] uppercase">
            What We Deliver
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
          Production-ready automation<br />
          <em className="text-amber not-italic">built for your workflow.</em>
        </motion.h2>

        {/* Cards — grid with gaps becoming visible borders */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-border-warm border border-border-warm">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              className="bg-ink p-10 lg:p-12 group hover:bg-surface transition-colors duration-300"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div
                className="font-cormorant font-light text-amber/20 leading-none mb-6 group-hover:text-amber/60 transition-colors duration-300 select-none"
                style={{ fontSize: '5rem' }}
              >
                0{index + 1}
              </div>
              <h3 className="font-cormorant font-medium text-cream text-2xl mb-4 group-hover:text-amber transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted font-dm-sans leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
