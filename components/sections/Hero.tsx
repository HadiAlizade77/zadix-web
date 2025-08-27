'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, Shield, Clock, Code } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Pricing = () => {
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
        'Documentation & handover',
        'Source code included'
      ],
      popular: false,
      deliveryTime: '5-7 days',
      ideal: 'Small teams, single process'
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
        'Training & documentation',
        'Source code included',
        'Priority support'
      ],
      popular: true,
      deliveryTime: '7-10 days',
      ideal: 'Growing companies, multiple processes'
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
        'Dedicated success manager',
        'Source code included',
        'SLA guarantees',
        'Custom training program'
      ],
      popular: false,
      deliveryTime: '2-3 weeks',
      ideal: 'Large enterprises, complex requirements'
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: '30-Day Value Guarantee',
      description: 'If you don\'t see measurable value within 30 days, we\'ll refund your investment.'
    },
    {
      icon: Clock,
      title: 'Fixed Timeline',
      description: 'We deliver on time, every time. No scope creep, no surprise delays.'
    },
    {
      icon: Code,
      title: 'Full Source Code',
      description: 'You own everything we build. Complete source code handover with documentation.'
    }
  ];

  const addOns = [
    { name: 'Additional Workflow', price: '$2,500', description: 'Extra automation workflow' },
    { name: 'Custom Integration', price: '$1,500', description: 'Specialized system connection' },
    { name: 'Extended Support', price: '$500/month', description: 'Ongoing maintenance & updates' },
    { name: 'Training Workshop', price: '$2,000', description: 'Team training session' }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0B1220] via-[#0F1629] to-[#0B1220]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Fixed Scope,{' '}
              <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
                Fixed Timeline
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Transparent pricing for production-ready AI automation. No surprises, no scope creep, no hidden costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
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
                <Card className={`h-full ${plan.popular ? 'ring-2 ring-[#00B3A4] shadow-2xl scale-105' : 'hover:shadow-lg'} transition-all duration-300`}>
                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="text-5xl font-bold text-[#111827] mb-2">{plan.price}</div>
                    <p className="text-[#6B7280] mb-4">{plan.description}</p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-center text-[#00B3A4]">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{plan.deliveryTime}</span>
                      </div>
                      <div className="text-[#6B7280]">{plan.ideal}</div>
                    </div>
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
        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
              Our Guarantees
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              We stand behind our work with industry-leading guarantees
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <guarantee.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3">{guarantee.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280] leading-relaxed">{guarantee.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
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
              Optional Add-ons
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Extend your automation with additional services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-bold text-[#111827] mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-[#00B3A4] mb-3">{addon.price}</div>
                <p className="text-[#6B7280] text-sm">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0B1220] via-[#0F1629] to-[#0B1220]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to get started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Book a demo to see exactly how we'll automate your workflow and get a fixed-price proposal
            </p>
            <Button size="xl" asChild>
              <Link href="/contact">
                Book Your Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <p className="text-gray-400 text-sm mt-6">
              30-minute demo • No sales pitch • Fixed-price proposal
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;