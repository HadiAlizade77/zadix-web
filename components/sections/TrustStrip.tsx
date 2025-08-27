'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TrustStrip() {
  const clientLogos = [
    { alt: 'Selected client logo 1', placeholder: true },
    { alt: 'Selected client logo 2', placeholder: true },
    { alt: 'Selected client logo 3', placeholder: true },
    { alt: 'Selected client logo 4', placeholder: true },
    { alt: 'Selected client logo 5', placeholder: true },
  ];

  return (
    <section className="py-12 bg-white/5 backdrop-blur-sm border-y border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Client Logos */}
          <div className="flex items-center justify-center lg:justify-start gap-8 flex-wrap">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="w-24 h-12 bg-white/10 rounded-lg flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-16 h-8 bg-white/20 rounded"></div>
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
              — Ops Director, Gulf Logistics
            </cite>
          </motion.div>
        </div>
      </div>
    </section>
  );
}