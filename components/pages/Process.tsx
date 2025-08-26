'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Code, TestTube, Rocket, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Process = () => {
  const processSteps = [
    {
      day: 'Day 1',
      icon: Users,
      title: 'Requirements & Design',
      description: 'Deep dive into your workflow, define success metrics, and design the automation architecture.',
      deliverables: ['Workflow analysis', 'Technical specification', 'Success metrics defined']
    },
    {
      day: 'Day 2-3',
      icon: Code,
      title: 'Core Development',
      description: 'Build the AI agents, workflow orchestration, and system integrations.',
      deliverables: ['Agent development', 'Workflow engine setup', 'System integrations']
    },
    {
      day: 'Day 4-5',
      icon: TestTube,
      title: 'Testing & Refinement',
      description: 'Comprehensive testing with your real data and business rules.',
      deliverables: ['End-to-end testing', 'Performance optimization', 'Error handling']
    },
    {
      day: 'Day 6',
      icon: Rocket,
      title: 'Deployment & Training',
      description: 'Deploy to production and train your team on the new automation.',
      deliverables: ['Production deployment', 'Team training', 'Documentation']
    },
    {
      day: 'Day 7',
      icon: CheckCircle,
      title: 'Handover & Support',
      description: 'Complete handover with source code, documentation, and ongoing support setup.',
      deliverables: ['Source code handover', 'Complete documentation', 'Support channel setup']
    }
  ];

  const principles = [
    {
      title: 'Daily Updates',
      description: 'You get a daily progress update with screenshots, demos, and next steps.'
    },
    {
      title: 'Sandbox Access',
      description: 'By Day 3, you have access to a working sandbox to test and provide feedback.'
    },
    {
      title: 'Real Data Testing',
      description: 'We test with your actual data and business rules, not dummy examples.'
    },
    {
      title: 'Production Ready',
      description: 'What we deliver is production-ready with monitoring, error handling, and security.'
    }
  ];

  const whatYouGet = [
    'Complete source code ownership',
    'Comprehensive documentation',
    'Team training session',
    'Production deployment',
    'Monitoring & alerting setup',
    '30-90 day support (plan dependent)',
    'Performance optimization',
    'Security implementation'
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
              7-Day{' '}
              <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
                Delivery Process
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              From requirements to production-ready automation in 7 days. Daily updates, sandbox access by Day 3, complete handover with documentation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
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
              Our 7-Day Process
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              A proven methodology that delivers production-ready automation systems
            </p>
          </motion.div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.day}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row items-start md:items-center">
                      <div className="flex items-center mb-4 md:mb-0 md:mr-8">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-2xl flex items-center justify-center mr-4">
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-[#00B3A4] mb-1">{step.day}</div>
                          <h3 className="text-xl font-bold text-[#111827]">{step.title}</h3>
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-[#6B7280] mb-4 leading-relaxed">{step.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {step.deliverables.map((deliverable, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-[#00B3A4]/10 text-[#00B3A4] rounded-full text-sm font-medium"
                            >
                              {deliverable}
                            </span>
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

      {/* Process Principles */}
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
              Our Process Principles
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              How we ensure transparency, quality, and successful delivery
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg mb-3">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280] leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
                What You Get
              </h2>
              <p className="text-xl text-[#6B7280] mb-8 leading-relaxed">
                Complete ownership and control of your automation system with everything needed for long-term success.
              </p>
              <ul className="space-y-4">
                {whatYouGet.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-[#10B981] mr-3 flex-shrink-0" />
                    <span className="text-[#6B7280]">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="bg-gradient-to-br from-[#00B3A4] to-[#2563EB] text-white">
                <CardContent className="p-8">
                  <Calendar className="h-12 w-12 mb-6" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
                  <p className="mb-6 opacity-90">
                    Book a 30-minute demo to see exactly how we'll automate your workflow and get your project started.
                  </p>
                  <Button size="lg" variant="secondary" className="w-full" asChild>
                    <Link href="/contact">
                      Book Your Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
              Common Questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: 'What if my requirements change during the 7 days?',
                answer: 'Minor adjustments are included. Major scope changes may extend the timeline, but we\'ll discuss this upfront with transparent pricing.'
              },
              {
                question: 'Do you work with our existing systems?',
                answer: 'Yes, we integrate with your existing tools and systems. We\'ll assess integration complexity during the requirements phase.'
              },
              {
                question: 'What happens after the 7 days?',
                answer: 'You get complete ownership of the system plus ongoing support (30-90 days depending on your plan). Extended support is available.'
              },
              {
                question: 'Can we make changes after delivery?',
                answer: 'Absolutely. You own the source code and can modify it yourself, or we can help with changes under our support plans.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#111827] mb-3">{faq.question}</h3>
                    <p className="text-[#6B7280] leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Process;