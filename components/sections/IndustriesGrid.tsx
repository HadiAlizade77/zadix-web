'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Banknote, Truck, Heart, Scale, HardHat, Laptop, Hotel } from 'lucide-react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';
import { industries } from '@/lib/utils';

interface IndustriesGridProps {
  locale: Locale;
}

const iconMap = { Building2, Banknote, Truck, Heart, Scale, HardHat, Laptop, Hotel };

export default function IndustriesGrid({ locale }: IndustriesGridProps) {
  return (
    <section className="py-24 bg-ink">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section label */}
        <motion.div
          className="flex items-center gap-4 mb-6"
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="w-8 h-px bg-amber" />
          <span className="text-amber text-xs font-dm-sans font-medium tracking-[0.25em] uppercase">
            Industries
          </span>
        </motion.div>

        <motion.h2
          className="font-cormorant font-light text-cream mb-16 leading-tight"
          style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          Purpose-built for<br />
          <em className="text-amber not-italic">your sector.</em>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border-warm border border-border-warm mb-12">
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
              >
                <Link href={`/industries/${industry.id}`} className="block bg-ink p-8 group hover:bg-surface transition-colors duration-300 h-full">
                  <div className="w-10 h-10 border border-border-warm rounded-lg flex items-center justify-center mb-5 group-hover:border-amber/50 transition-colors duration-200">
                    <IconComponent className="h-5 w-5 text-muted group-hover:text-amber transition-colors duration-200" />
                  </div>
                  <h3 className="font-cormorant font-medium text-cream text-xl mb-2 group-hover:text-amber transition-colors duration-200">
                    {industry.shortName}
                  </h3>
                  <p className="text-muted font-dm-sans text-sm leading-relaxed mb-4">
                    {industry.shortDescription}
                  </p>
                  <div className="flex items-center text-amber/0 group-hover:text-amber text-sm font-dm-sans transition-all duration-200 translate-x-0 group-hover:translate-x-1">
                    Learn more
                    <ArrowRight className="ml-1.5 h-3.5 w-3.5" />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/industries" className="inline-flex items-center text-amber text-sm font-dm-sans hover:underline underline-offset-4 group">
            View all industries
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
