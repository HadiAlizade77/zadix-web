'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function TrustStrip() {
  const clientLogos = [
    { name: 'Gulf Logistics',          alt: 'Gulf Logistics',          url: 'https://gulfcorp-sa.com/wp-content/uploads/2024/09/gulf-corp.png' },
    { name: 'Al Noor Developments',    alt: 'Al Noor Developments',    url: 'https://ezmakaan.com/wp-content/uploads/2019/05/alnoor.jpg' },
    { name: 'Meridian Clinic',         alt: 'Meridian Clinic',         url: 'https://meridianclinic.com.my/wp-content/uploads/2018/01/Meridian_logo_Gold2-s.png' },
    { name: 'Lex & Co. Legal',         alt: 'Lex & Co. Legal',         url: 'https://media.licdn.com/dms/image/v2/C560BAQGf7K2EXHNVGg/company-logo_200_200/company-logo_200_200/0/1630602548313/lex_co_logo?e=2147483647&v=beta&t=vPmHVAnDTB88ace_groBcO_jG-8-KpEtSV834MUieEA' },
    { name: 'Orion Investment Partners', alt: 'Orion Investment Partners', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7pGmN2O2zUS3zAQrCYW3swnY4IZBYAIpcndYExUTG9ugLx5SCqOGQwm75nfvDdROFCg&usqp=CAU' },
  ];

  return (
    <section className="py-14 bg-surface border-y border-border-warm">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.p
          className="text-center text-xs font-dm-sans text-muted tracking-[0.3em] uppercase mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Trusted by teams across industries
        </motion.p>

        <div className="flex items-center justify-center gap-8 flex-wrap">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              className="flex flex-col items-center gap-2 group"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="w-28 h-14 bg-surface-2 border border-border-warm rounded-lg flex items-center justify-center p-3 group-hover:border-amber/40 transition-colors duration-200">
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="max-w-full max-h-full object-contain"
                  style={{ filter: 'brightness(0) invert(1)', opacity: 0.45 }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.45')}
                />
              </div>
              <span className="text-xs font-dm-sans text-muted/60 text-center">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <a href="/case-studies" className="text-sm font-dm-sans text-amber hover:underline underline-offset-4">
            See client results →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
