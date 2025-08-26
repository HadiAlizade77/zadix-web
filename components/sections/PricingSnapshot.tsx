'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Locale } from '@/lib/i18n';
import { getTranslation } from '@/lib/translations';
import { pricingTiers } from '@/lib/utils';

interface PricingSnapshotProps {
  locale: Locale;
}

export default function PricingSnapshot({ locale }: PricingSnapshotProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2 font-sora text-headline-slate mb-6">
            Fixed Scope, Fixed Timeline
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Transparent pricing with 30-day value guarantee. No surprises, no scope creep.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-accent-teal to-accent-blue text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <Card className={`h-full ${tier.popular ? 'ring-2 ring-accent-teal shadow-xl' : 'hover:shadow-lg'} transition-all duration-300`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold font-sora text-headline-slate mb-2">{tier.price}</div>
                  <p className="text-gray-600">{tier.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {tier.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-success mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-gradient-to-r from-accent-teal to-accent-blue' : ''}`} 
                    variant={tier.popular ? 'default' : 'outline'}
                    size="lg"
                    asChild
                  >
                    <Link href="/contact">
                      {getTranslation(locale, 'cta.getStarted')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-600 mb-6">
            All plans include full source code handover and 30-day value guarantee
          </p>
          <Link 
            href="/pricing" 
            className="inline-flex items-center text-accent-blue font-medium hover:text-accent-teal transition-colors group"
          >
            {getTranslation(locale, 'cta.viewPricing')}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}