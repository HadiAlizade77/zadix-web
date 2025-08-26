'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, Database, BarChart3, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Solutions = () => {
  const solutionPillars = [
    {
      icon: Bot,
      title: 'Orchestration',
      description: 'Multi-step decisions with tools, memory, and business rule constraints',
      features: ['Tool integration', 'Persistent memory', 'Multi-step planning', 'Decision constraints']
    },
    {
      icon: Workflow,
      title: 'Workflows',
      description: 'Production-grade automation with triggers, retries, and error handling',
      features: ['Trigger systems', 'Exponential backoff', 'Dead letter queues', 'Rate limiting']
    },
    {
      icon: Database,
      title: 'Knowledge',
      description: 'Private documents become accurate, contextual answers with quality gates',
      features: ['Document processing', 'Smart chunking', 'Quality evaluations', 'Accurate retrieval']
    },
    {
      icon: BarChart3,
      title: 'Observability',
      description: 'Complete visibility into decisions, costs, and quality with alerts',
      features: ['Decision traces', 'Cost tracking', 'Quality metrics', 'Performance alerts']
    },
    {
      icon: Shield,
      title: 'Safety & Compliance',
      description: 'Built-in guardrails, approval workflows, and audit capabilities',
      features: ['Tool whitelists', 'Content filters', 'Human approvals', 'Audit logs']
    }
  ];

  const useCases = [
    {
      title: 'Invoice/PO Triage',
      description: 'Extract data from invoices and purchase orders, validate against business rules, and write back to ERP systems',
      outcome: '70% faster processing'
    },
    {
      title: 'RFQ to Quote',
      description: 'Parse RFQs, lookup rates, apply margin rules, generate quotes, and update CRM automatically',
      outcome: '20+ hours/week saved'
    },
    {
      title: 'Sales Operations',
      description: 'Enrich leads, score against ICP, assign to reps, and trigger follow-up sequences',
      outcome: '3x faster qualification'
    },
    {
      title: 'Support L1 Deflection',
      description: 'Understand customer queries, search knowledge base, provide answers, and route complex issues',
      outcome: '60% deflection rate'
    },
    {
      title: 'HR Onboarding',
      description: 'Process forms, create accounts, generate documents, and track completion status',
      outcome: '5 days to 2 days'
    },
    {
      title: 'Legal Document Review',
      description: 'Extract clauses, flag risks, check compliance, and generate summaries for review',
      outcome: '80% time reduction'
    }
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
              From inbox to system-of-record—
              <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
                automated, approved, and auditable
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We build agents that understand documents and emails, make decisions with your business rules, 
              and update your systems safely with full traceability and human oversight.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Pillars */}
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
              Five Pillars of Reliable Automation
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Every automation we build includes these essential components for production reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-2xl flex items-center justify-center mb-4">
                      <pillar.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3">{pillar.title}</CardTitle>
                    <p className="text-[#6B7280] leading-relaxed">{pillar.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-[#6B7280]">
                          <div className="w-1.5 h-1.5 bg-[#00B3A4] rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
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
              Common Use Cases
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Proven automation patterns that deliver immediate value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-[#111827] mb-3">{useCase.title}</h3>
                <p className="text-[#6B7280] mb-4 leading-relaxed">{useCase.description}</p>
                <div className="bg-gradient-to-r from-[#00B3A4]/10 to-[#2563EB]/10 rounded-lg p-3">
                  <span className="text-sm font-medium text-[#00B3A4]">Typical outcome: {useCase.outcome}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack Reveal (Bottom Section) */}
      <section className="py-16 bg-[#F8FAFC] border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-[#111827] mb-4">
              Built with Enterprise-Grade Components
            </h3>
            <p className="text-lg text-[#6B7280] max-w-2xl mx-auto">
              We use proven, production-ready technologies to ensure reliability and scalability
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-6">
            {[
              'Agent Framework',
              'Workflow Engine', 
              'Vector Database',
              'Observability Platform',
              'Security Controls'
            ].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-4 py-2 bg-white rounded-full border border-gray-200 text-[#6B7280] font-medium"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Ready to automate your operations?
            </h2>
            <p className="text-lg text-[#6B7280] mb-8">
              Let's discuss your specific use case and design a solution that fits your workflow
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/industries">
                  See Industries
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="/contact">Book a Demo</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;