'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TrustStrip() {
const clientLogos = [
  { name: 'Gulf Logistics', alt: 'Client logo — Gulf Logistics', url: 'https://gulfcorp-sa.com/wp-content/uploads/2024/09/gulf-corp.png' },
  { name: 'Al Noor Developments', alt: 'Client logo — Al Noor Developments', url: 'https://ezmakaan.com/wp-content/uploads/2019/05/alnoor.jpg' },
  { name: 'Meridian Clinic', alt: 'Client logo — Meridian Clinic', url: 'https://meridianclinic.com.my/wp-content/uploads/2018/01/Meridian_logo_Gold2-s.png' },
  { name: 'Lex & Co. Legal', alt: 'Client logo — Lex & Co. Legal', url: 'https://media.licdn.com/dms/image/v2/C560BAQGf7K2EXHNVGg/company-logo_200_200/company-logo_200_200/0/1630602548313/lex_co_logo?e=2147483647&v=beta&t=vPmHVAnDTB88ace_groBcO_jG-8-KpEtSV834MUieEA' },
  { name: 'Orion Investment Partners', alt: 'Client logo — Orion Investment Partners', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pGmN2O2zUS3zAQrCYW3swnY4IZBYAIpcndYExUTG9ugLx5SCqOGQwm75nfvDdROFCg&usqp=CAU' },
];
  return (
    <section className="py-12 bg-gray-50 border-y border-gray-200 relative z-10">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Coming Soon Banner */}
          <div className="w-full text-center mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center bg-gray-100 rounded-full px-6 py-3"
            >
              <span className="text-gray-600 text-sm">Case studies launching Q4 2025 — check back soon</span>
            </motion.div>
          </div>

          {/* Client Logos */}
          <div className="flex items-center justify-center gap-8 flex-wrap w-full">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                className="w-32 h-16 bg-white rounded-lg flex items-center justify-center opacity-60 hover:opacity-80 transition-opacity p-4 shadow-sm border border-gray-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain filter grayscale opacity-60"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}