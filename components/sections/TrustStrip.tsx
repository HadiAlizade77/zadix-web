'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TrustStrip() {
  const clientLogos = [
    { alt: 'Selected client logo 1' },
    { alt: 'Selected client logo 2' },
    { alt: 'Selected client logo 3' },
    { alt: 'Selected client logo 4' },
    { alt: 'Selected client logo 5' },
  ];

  return (
    <section className="py-12 bg-white/5 backdrop-blur-sm border-y border-white/10 relative z-10">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Client Logos */}
          <div className="flex items-center justify-center lg:justify-start gap-8 flex-wrap">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="w-28 h-14 bg-white/10 rounded-lg flex items-center justify-center opacity-60 hover:opacity-80 transition-opacity"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-20 h-8 bg-white/20 rounded text-white/40 text-xs flex items-center justify-center font-medium">
                  {logo.alt}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quote */}
          <motion.div
            className="text-center lg:text-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-white/90 text-lg italic mb-2">
              "We reply in minutes now."
            </blockquote>
            <cite className="text-white/70 text-sm font-medium">
              — <strong>Ops Director, Gulf Logistics</strong>
            </cite>
          </motion.div>
        </div>
      </div>
    </section>
  );
}