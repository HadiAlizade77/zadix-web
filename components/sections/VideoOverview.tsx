'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function VideoOverview() {
  return (
    <section className="py-24 bg-surface-2">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-8 h-px bg-amber" />
          <span className="text-amber text-xs font-dm-sans font-medium tracking-[0.25em] uppercase">
            See How It Works
          </span>
        </motion.div>

        <motion.h2
          className="font-cormorant font-light text-cream mb-12 leading-tight"
          style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          From intake to decision to approval —<br />
          <em className="text-amber not-italic">watch an automation run end-to-end.</em>
        </motion.h2>

        <motion.div
          className="relative max-w-4xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {/* Amber border glow */}
          <div className="absolute -inset-px rounded-2xl bg-amber/20 blur-sm" />
          <div className="relative aspect-video bg-ink rounded-2xl overflow-hidden border border-border-warm">
            <iframe
              src="https://www.youtube.com/embed/FwOTs4UxQS4"
              title="Zadix AI Automation Overview"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
