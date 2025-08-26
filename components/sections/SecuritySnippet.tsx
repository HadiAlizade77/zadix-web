'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { getTranslation } from '@/lib/translations';

interface SecuritySnippetProps {
  locale: Locale;
}

export default function SecuritySnippet({ locale }: SecuritySnippetProps) {
  return (
    <section className="py-16 bg-paper">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center mb-6">
            <Lock className="h-8 w-8 text-accent-teal mr-3" />
            <h3 className="text-h3 font-sora text-headline-slate">Enterprise-Grade Security</h3>
          </div>
          <p className="text-body text-gray-600 max-w-4xl mx-auto mb-6">
            {getTranslation(locale, 'home.security')}
          </p>
          <Link 
            href="/security" 
            className="inline-flex items-center text-accent-blue font-medium hover:text-accent-teal transition-colors group"
          >
            Learn About Our Security
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}