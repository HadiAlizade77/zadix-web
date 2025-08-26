'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HardHat, FileText, Calculator, AlertTriangle, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Construction = () => {
  const features = [
    {
      icon: FileText,
      title: 'Tender Analysis',
      description: 'Automated processing of tender documents with key requirement extraction'
    },
    {
      icon: Calculator,
      title: 'BoQ Processing',
      description: 'Bill of Quantities extraction and cost analysis from project documents'
    },
    {
      icon: AlertTriangle,
      title: 'SLA Monitoring',
      description: 'Automated tracking of project milestones and penalty calculations'
    },
    {
      icon: HardHat,
      title: 'Submittal Tracking',
      description: 'Intelligent management of project submittals and approval workflows'
    }
  ];

  const workflow = [
    {
      step: '1',
      title: 'Tender Ingestion',
      description: 'Tender packs automatically processed and key requirements extracted'
    },
    {
      step: '2',
      title: 'BoQ Analysis',
      description: 'Bill of Quantities parsed with cost breakdowns and material lists'
    },
    {
      step: '3',
      title: 'Risk Assessment',
      description: 'Project risks identified with penalty clauses and SLA requirements'
    },
    {
      step: '4',
      title: 'Bid Preparation',
      description: 'Automated bid documents generated with compliance verification'
    },
    {
      step: '5',
      title: 'Project Tracking',
      description: 'Ongoing monitoring of deliverables and milestone compliance'
    }
  ];

  const outcomes = [
    { metric: '60%', label: 'Faster bid preparation', description: 'Automated document processing' },
    { metric: '85%', label: 'Compliance accuracy', description: 'Reduced tender rejections' },
    { metric: '40%', label: 'Penalty reduction', description: 'Better SLA management' },
    { metric: '25%', label: 'Higher win rates', description: 'More competitive bids' }
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
            <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-500 rounded-3xl flex items-center justify-center mx-auto mb-8">
              <HardHat className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Construction & EPC{' '}
              <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
                Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Win tenders, manage submittals, protect SLAs. Automated tender analysis, BoQ processing, and project management for construction and EPC firms.
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
              Built for Construction Excellence
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Win more projects and deliver on time with intelligent automation
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
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
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
              From Tender to Delivery
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Comprehensive project lifecycle automation for construction success
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
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#111827] mb-3">{item.title}</h3>
                  <p className="text-[#6B7280] text-sm leading-relaxed">{item.description}</p>
                </div>
                {index < workflow.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-amber-500 to-orange-500 transform -translate-y-1/2"></div>
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
              Construction Impact
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Real results from construction and EPC companies
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
                <div className="text-lg font-semibold text-amber-600 mb-2">{outcome.label}</div>
                <p className="text-[#6B7280]">{outcome.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to win more projects?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how our automation handles your tender process with a personalized demo
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

export default Construction;