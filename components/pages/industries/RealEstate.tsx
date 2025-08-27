'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Clock, Globe, Users, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const RealEstate = () => {
  const features = [
    {
      icon: Globe,
      title: 'Multilingual Processing',
      description: 'Handle leads in Arabic, English, Hindi, and more with automatic language detection'
    },
    {
      icon: Users,
      title: 'Lead Qualification',
      description: 'Intelligent scoring based on budget, timeline, and property preferences'
    },
    {
      icon: Clock,
      title: '60-Second Response',
      description: 'Automated first response within 60 seconds of lead capture'
    },
    {
      icon: Building2,
      title: 'Property Matching',
      description: 'AI-powered property recommendations based on client requirements'
    }
  ];

  const workflow = [
    {
      step: '1',
      title: 'Lead Capture',
      description: 'WhatsApp, portal forms, and referrals automatically ingested'
    },
    {
      step: '2',
      title: 'Data Enrichment',
      description: 'Property comps, owner details, and location data added automatically'
    },
    {
      step: '3',
      title: 'Qualification & Scoring',
      description: 'Budget verification, timeline assessment, and preference matching'
    },
    {
      step: '4',
      title: 'Agent Assignment',
      description: 'Leads routed to best-fit agents based on expertise and availability'
    },
    {
      step: '5',
      title: 'Follow-up Automation',
      description: 'Scheduled touchpoints and meeting booking with calendar integration'
    }
  ];

  const outcomes = [
    { metric: '2-3', label: 'Extra closings per month', description: 'From faster lead processing' },
    { metric: '5x', label: 'Faster first response', description: 'Automated within 60 seconds' },
    { metric: '40%', label: 'Higher conversion rate', description: 'Better qualified leads' },
    { metric: '20+', label: 'Hours saved weekly', description: 'Per agent on admin tasks' }
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
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Building2 className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Luxury Real Estate{' '}
              <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
                Lead Processing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Every lead qualified in 60 seconds. Every follow-up on time. Multilingual support for Dubai's diverse luxury market.
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
              Built for Dubai's Luxury Market
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Handle high-value leads with the sophistication they expect
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
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
              From Lead to Meeting in Minutes
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Automated workflow that never misses a high-value opportunity
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
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-3">{item.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 transform -translate-y-1/2"></div>
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
              Real Estate Impact
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Real outcomes from luxury real estate agencies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { metric: '+2–3', label: 'deals per month', description: 'From faster lead processing' },
              { metric: '5×', label: 'faster first response', description: 'Automated within 60 seconds' },
              { metric: '100%', label: 'follow‑up coverage', description: 'Never miss a high-value lead' },
              { metric: '40%', label: 'higher conversion rate', description: 'Better qualified leads' }
            ].map((outcome, index) => (
              <motion.div
                key={outcome.label}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-[#111827] mb-2">{outcome.metric}</div>
                <div className="text-lg font-semibold text-orange-600 mb-2">{outcome.label}</div>
                <p className="text-[#6B7280]">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Suggested Package */}
      <section className="py-12 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center bg-white rounded-full px-6 py-3 shadow-md">
              <span className="text-[#6B7280] mr-2">Suggested package:</span>
              <span className="font-bold text-[#00B3A4]">Pro ($12,900)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mini-FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-[#111827] mb-6">Common Questions</h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'How long does it take?',
                answer: 'Initial workflows ship in 7–14 business days.'
              },
              {
                question: 'Will this work with our tools?',
                answer: 'Yes—email, docs, CRM/ERP, helpdesk, and databases. We start with the systems you already use.'
              },
              {
                question: 'How do you measure ROI?',
                answer: 'We set a success metric on Day 1 (e.g., hours saved, response time) and track it in the first 30 days.'
              },
              {
                question: 'Is our data safe?',
                answer: 'Yes—SOC‑aligned controls, audit trails, role‑based access, and encryption by default.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="bg-[#F8FAFC] rounded-xl p-6">
                  <h3 className="text-lg font-bold text-[#111827] mb-3">{faq.question}</h3>
                  <p className="text-[#6B7280] leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stack Badges */}
      <section className="py-12 bg-[#F8FAFC] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {['Orchestration', 'Workflows', 'Knowledge', 'Security', 'Observability'].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-4 py-2 bg-white rounded-full border border-gray-200 text-[#6B7280] font-medium text-sm"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
          <p className="text-[#6B7280] text-sm">Built with enterprise‑grade components</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to close more deals?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how our automation handles your actual leads with a personalized demo
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

export default RealEstate;