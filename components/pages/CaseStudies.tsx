'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Users, ArrowRight, Building2, Truck, Heart } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: Building2,
      industry: 'Real Estate',
      company: 'Luxury Property Group',
      location: 'Dubai, UAE',
      challenge: 'Manual lead processing taking 4+ hours per lead, missing high-value opportunities due to slow response times.',
      solution: 'Automated lead qualification system with WhatsApp integration, property matching, and agent routing.',
      results: [
        { metric: '60 seconds', label: 'Average response time', improvement: 'vs 4+ hours before' },
        { metric: '3 extra', label: 'Closings per month', improvement: '40% revenue increase' },
        { metric: '85%', label: 'Lead qualification accuracy', improvement: 'Better than manual process' }
      ],
      quote: 'We went from losing leads to being the fastest responder in Dubai\'s luxury market.',
      timeline: '6 days',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Truck,
      industry: 'Logistics',
      company: 'Middle East Freight',
      location: 'Dubai, UAE',
      challenge: 'RFQ processing taking 2-3 hours per quote, losing business to faster competitors.',
      solution: 'Automated RFQ parsing, rate lookup, margin calculation, and quote generation with CRM integration.',
      results: [
        { metric: '15 minutes', label: 'Quote turnaround time', improvement: 'vs 2-3 hours before' },
        { metric: '25%', label: 'Higher win rate', improvement: 'Due to faster response' },
        { metric: '20 hours', label: 'Saved per week', improvement: 'Per operations team member' }
      ],
      quote: 'Our quote turnaround went from hours to minutes. We\'re winning deals we used to lose.',
      timeline: '7 days',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      industry: 'Healthcare',
      company: 'Premier Medical Clinic',
      location: 'London, UK',
      challenge: 'Claims processing errors causing 30% denial rate and delayed reimbursements.',
      solution: 'Automated patient intake, insurance verification, ICD/CPT coding suggestions, and claim generation.',
      results: [
        { metric: '12%', label: 'Claim denial rate', improvement: 'Down from 30%' },
        { metric: '50%', label: 'Faster billing cycles', improvement: 'Improved cash flow' },
        { metric: '£15k', label: 'Monthly revenue recovery', improvement: 'From better coding accuracy' }
      ],
      quote: 'Our billing accuracy improved dramatically and cash flow is much more predictable.',
      timeline: '8 days',
      color: 'from-pink-500 to-rose-500'
    }
  ];

  const metrics = [
    { number: '50+', label: 'Automations Delivered', description: 'Across 8 industries' },
    { number: '85%', label: 'Average Time Savings', description: 'On automated processes' },
    { number: '7 days', label: 'Average Delivery Time', description: 'From start to production' },
    { number: '99.9%', label: 'System Uptime', description: 'Reliable production systems' }
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
              Real Results from{' '}
              <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
                Real Clients
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              See how companies are using our AI automation to eliminate busywork and drive measurable business outcomes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      {/* Content */}
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center mb-6">
                          <div className={`w-12 h-12 bg-gradient-to-br ${study.color} rounded-xl flex items-center justify-center mr-4`}>
                            <study.icon className="h-6 w-6 text-white" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-[#00B3A4] mb-1">{study.industry}</div>
                            <h3 className="text-xl font-bold text-[#111827]">{study.company}</h3>
                            <p className="text-sm text-[#6B7280]">{study.location}</p>
                          </div>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-[#111827] mb-2">Challenge</h4>
                          <p className="text-[#6B7280] leading-relaxed">{study.challenge}</p>
                        </div>

                        <div className="mb-6">
                          <h4 className="font-semibold text-[#111827] mb-2">Solution</h4>
                          <p className="text-[#6B7280] leading-relaxed">{study.solution}</p>
                        </div>

                        <div className="bg-[#F8FAFC] rounded-lg p-4 mb-6">
                          <blockquote className="text-[#111827] font-medium italic">
                            "{study.quote}"
                          </blockquote>
                        </div>

                        <div className="flex items-center text-sm text-[#6B7280]">
                          <Clock className="h-4 w-4 mr-2" />
                          <span>Delivered in {study.timeline}</span>
                        </div>
                      </div>

                      {/* Results */}
                      <div className={`bg-gradient-to-br ${study.color} p-8 lg:p-12 text-white`}>
                        <h4 className="text-2xl font-bold mb-8">Results</h4>
                        <div className="space-y-6">
                          {study.results.map((result, idx) => (
                            <div key={idx} className="border-b border-white/20 pb-4 last:border-b-0">
                              <div className="text-3xl font-bold mb-1">{result.metric}</div>
                              <div className="text-lg font-medium mb-1">{result.label}</div>
                              <div className="text-sm opacity-80">{result.improvement}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Overall Metrics */}
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
              Overall Impact
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Aggregate results across all our automation projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl font-bold text-[#111827] mb-2">{metric.number}</div>
                <div className="text-lg font-semibold text-[#00B3A4] mb-2">{metric.label}</div>
                <p className="text-[#6B7280]">{metric.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Measurement Note */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-[#111827] mb-4">How We Measured</h3>
            <p className="text-lg text-[#6B7280] mb-8">
              We compared pre‑automation baselines with a 30‑day post‑launch window using the same workload characteristics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  Download one‑pager (PDF)
                </a>
              </Button>
            </div>
            <div className="mt-8 bg-[#F8FAFC] rounded-lg p-6">
              <blockquote className="text-[#111827] font-medium italic">
                "The team delivered exactly on scope and timeline."
              </blockquote>
              <cite className="text-[#6B7280] text-sm mt-2 block">
                — Head of Ops, Property Group
              </cite>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Ready to join our success stories?
            </h2>
            <p className="text-lg text-[#6B7280] mb-8">
              See how we can automate your specific workflow with a personalized demo
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="/industries">View Industries</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;