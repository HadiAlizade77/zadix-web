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
        <div className="flex flex-col items-center gap-8">
          {/* Heading */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-sm font-medium text-gray-500 uppercase tracking-widest"
          >
            Trusted by teams across industries
          </motion.p>

          {/* Client Logos */}
          <div className="flex items-center justify-center gap-8 flex-wrap w-full">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo.name}
                className="flex flex-col items-center gap-3 opacity-80 hover:opacity-100 transition-opacity"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-32 h-16 bg-white rounded-lg flex items-center justify-center p-4 shadow-sm border border-gray-200">
                  <img
                    src={logo.url}
                    alt={logo.alt}
                    className="max-w-full max-h-full object-contain filter grayscale"
                  />
                </div>
                <span className="text-xs font-inter text-gray-500 text-center font-medium">
                  {logo.name}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Link to case studies */}
          <motion.a
            href="/case-studies"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-sm text-[#00B3A4] hover:underline font-medium"
          >
            See client results →
          </motion.a>
        </div>
      </div>
    </section>
  );
}