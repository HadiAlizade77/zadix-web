'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { getTranslation } from '@/lib/translations';

interface GuaranteeBannerProps {
  locale: Locale;
}

export default function GuaranteeBanner({ locale }: GuaranteeBannerProps) {
  return (
    <section className="py-16 bg-gradient-to-r from-accent-teal to-accent-blue">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Shield className="h-12 w-12 mr-4" />
            <h2 className="text-3xl md:text-4xl font-bold font-sora">30‑day value guarantee</h2>
          </div>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            If you don't see measurable time saved, we keep working until you do.
          </p>
        </motion.div>
      </div>
    </section>
  );
}