'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TrustStrip() {
  const clientLogos = [
    { name: 'Gulf Logistics', alt: 'Client logo — Gulf Logistics', url: 'https://logoipsum.com/logo1.svg' },
    { name: 'Al Noor Developments', alt: 'Client logo — Al Noor Developments', url: 'https://logoipsum.com/logo2.svg' },
    { name: 'Meridian Clinic', alt: 'Client logo — Meridian Clinic', url: 'https://logoipsum.com/logo3.svg' },
    { name: 'Lex & Co. Legal', alt: 'Client logo — Lex & Co. Legal', url: 'https://logoipsum.com/logo4.svg' },
    { name: 'Orion Investment Partners', alt: 'Client logo — Orion Investment Partners', url: 'https://logoipsum.com/logo5.svg' },
  ];

  return (
    <section className="py-12 bg-white/5 backdrop-blur-sm border-y border-white/10 relative z-10">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Coming Soon Banner */}
          <div className="w-full text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-white/10 rounded-full px-6 py-3"
            >
              <span className="text-white/80 text-sm">Case studies launching Q4 2025 — check back soon</span>
            </motion.div>
          </div>

          {/* Client Logos */}
          <div className="flex items-center justify-center gap-8 flex-wrap w-full">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                className="w-32 h-16 bg-white/10 rounded-lg flex items-center justify-center opacity-60 hover:opacity-80 transition-opacity p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img 
                  src={logo.url} 
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-60"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}