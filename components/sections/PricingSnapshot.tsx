'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const PricingSnapshot = () => {
  const plans = [
    {
      name: 'Starter',
      price: '$3,900',
      description: 'Perfect for single workflow automation',
      features: [
        'One automation workflow',
        'Basic integrations (3-5 systems)',
        'Standard deployment',
        '30-day support',
        'Documentation & handover'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: '$12,900',
      description: 'Most popular for growing businesses',
      features: [
        'Up to 3 automation workflows',
        'Advanced integrations (5-10 systems)',
        'Custom business logic',
        'Human approval workflows',
        '90-day support',
        'Training & documentation'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$28k+',
      description: 'For complex, multi-department automation',
      features: [
        'Unlimited workflows',
        'Enterprise integrations',
        'Custom AI models',
        'Advanced security & compliance',
        '6-month support',
        'Dedicated success manager'
      ],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            Fixed Scope, Fixed Timeline
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Transparent pricing with 30-day value guarantee. No surprises, no scope creep.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              <Card className={`h-full ${plan.popular ? 'ring-2 ring-[#00B3A4] shadow-xl' : 'hover:shadow-lg'} transition-all duration-300`}>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="text-4xl font-bold text-[#111827] mb-2">{plan.price}</div>
                  <p className="text-[#6B7280]">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="h-5 w-5 text-[#10B981] mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-[#6B7280]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-gradient-to-r from-[#00B3A4] to-[#2563EB]' : ''}`} 
                    variant={plan.popular ? 'default' : 'outline'}
                    size="lg"
                    asChild
                  >
                    <Link href="/contact">
                      Get Started
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
          <p className="text-[#6B7280] mb-6">
            All plans include full source code handover and 30-day value guarantee
          </p>
          <Link 
            href="/pricing" 
            className="inline-flex items-center text-[#2563EB] font-medium hover:text-[#1D4ED8] transition-colors group"
          >
            View Detailed Pricing
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSnapshot;