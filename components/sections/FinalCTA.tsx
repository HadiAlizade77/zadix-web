'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Locale } from '@/lib/i18n';
import { getTranslation } from '@/lib/translations';
import { getBusinessConfig } from '@/lib/utils';

interface FinalCTAProps {
  locale: Locale;
}

export default function FinalCTA({ locale }: FinalCTAProps) {
  const business = getBusinessConfig();

  return (
    <section className="py-20 bg-gradient-to-r from-dark-ink via-gray-900 to-dark-ink">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2 font-sora text-white mb-6">
            Ready to replace repetitive work?
          </h2>
          <p className="text-body text-gray-300 mb-8 leading-relaxed">
            Tell us about your workflow challenge and we'll show you exactly how our automation would handle it—with real data and your specific business rules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" asChild>
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                {getTranslation(locale, 'cta.bookDemo')}
              </Link>
            </Button>
            <Button 
              size="xl" 
              variant="outline" 
              className="bg-white/10 border-white/20 text-white hover:bg-white/20" 
              asChild
            >
              <a href={`https://wa.me/${business.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer">
                Schedule a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          <p className="text-gray-400 text-sm mt-6">
            30-minute demo • No sales pitch • See your automation in action
          </p>
        </motion.div>
      </div>
    </section>
  );
}