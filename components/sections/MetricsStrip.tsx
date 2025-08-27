'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Clock, Rocket, Shield } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { getTranslation } from '@/lib/translations';

interface MetricsStripProps {
  locale: Locale;
}

export default function MetricsStrip({ locale }: MetricsStripProps) {
  const metrics = [
    {
      icon: TrendingDown,
      text: '50–80% less manual work',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Clock,
      text: 'Replies in under 1 minute',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Rocket,
      text: 'Go live in 7–14 days',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      text: '30‑day value guarantee',
      color: 'from-orange-500 to-red-500'
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${metric.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-xl md:text-2xl font-bold font-sora text-headline-slate">
                {metric.text}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}