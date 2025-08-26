'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Truck, DollarSign, Clock, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Logistics = () => {
  const features = [
    {
      icon: Clock,
      title: 'Instant RFQ Processing',
      description: 'Parse RFQs from email and EDI formats within seconds of receipt'
    },
    {
      icon: DollarSign,
      title: 'Margin Protection',
      description: 'Built-in profit guards and competitive pricing intelligence'
    },
    {
      icon: Truck,
      title: 'Rate Optimization',
      description: 'Real-time rate lookup across multiple carriers and routes'
    },
    {
      icon: Shield,
      title: 'Compliance Checks',
      description: 'Automated verification of shipping regulations and documentation'
    }
  ];

  const workflow = [
    {
      step: '1',
      title: 'RFQ Ingestion',
      description: 'Email and EDI RFQs automatically captured and parsed'
    },
    {
      step: '2',
      title: 'Rate Lookup',
      description: 'Multi-carrier rate comparison with real-time pricing'
    },
    {
      step: '3',
      title: 'Margin Calculation',
      description: 'Profit margins applied based on customer and route rules'
    },
    {
      step: '4',
      title: 'Quote Generation',
      description: 'Professional quotes generated with terms and conditions'
    },
    {
      step: '5',
      title: 'CRM Integration',
      description: 'Opportunities created and sales team notified automatically'
    }
  ];

  const outcomes = [
    { metric: '20+', label: 'Hours saved weekly', description: 'Per operations team member' },
    { metric: '85%', label: 'Faster quote turnaround', description: 'From hours to minutes' },
    { metric: '15%', label: 'Higher win rates', description: 'Through competitive pricing' },
    { metric: '99%', label: 'Margin accuracy', description: 'Profit protection guaranteed' }
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
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Truck className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Logistics & Freight{' '}
              <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
                Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              RFQ in, quote out—profit-guarded. Automated freight forwarding with rate lookup, margin protection, and CRM integration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link href="/case-studies">View Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
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
              Built for Freight Excellence
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Win more business with faster, more accurate quotes
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280] leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow */}
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
              From RFQ to Quote in Minutes
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Automated quoting process that never misses an opportunity
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {workflow.map((item, index) => (
              <motion.div
                key={item.step}
                className="relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-3">{item.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 transform -translate-y-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Outcomes */}
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
              Logistics Impact
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Real results from freight forwarders and logistics companies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.label}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-[#111827] mb-2">{outcome.metric}</div>
                <div className="text-lg font-semibold text-blue-600 mb-2">{outcome.label}</div>
                <p className="text-[#6B7280]">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500 to-cyan-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to win more freight business?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how our automation handles your RFQs with a personalized demo
            </p>
            <Button size="xl" variant="secondary" asChild>
              <Link href="/contact">
                <CheckCircle className="mr-2 h-5 w-5" />
                Book Your Demo
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Logistics;