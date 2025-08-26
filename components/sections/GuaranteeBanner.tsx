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
            <h2 className="text-h3 font-sora">30-Day Value Guarantee</h2>
          </div>
          <p className="text-xl max-w-4xl mx-auto leading-relaxed">
            {getTranslation(locale, 'home.guarantee')}
          </p>
        </motion.div>
      </div>
    </section>
  );
}