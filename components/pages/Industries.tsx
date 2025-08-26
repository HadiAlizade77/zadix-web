'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Banknote, Truck, Heart, Scale, HardHat, Laptop, Hotel, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Industries = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Luxury Real Estate',
      description: 'Every lead qualified in 60 seconds. Every follow-up on time.',
      details: 'WhatsApp/Portal leads → enrich (owner, comps, location) → score → assign → auto-book meetings.',
      outcomes: ['2-3 extra closings/month', '5x faster first response', 'Multilingual support'],
      href: '/industries/real-estate',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Banknote,
      title: 'Family Offices / Investment',
      description: 'From CIM to IC memo, in minutes.',
      details: 'Ingest PDFs, build deal synopsis, run KYC checklist, draft questions for management.',
      outcomes: ['50-70% analyst time saved', 'Faster IC cycles', 'Reduced due diligence time'],
      href: '/industries/investment',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Truck,
      title: 'Logistics & Freight',
      description: 'RFQ in, quote out—profit-guarded.',
      details: 'Parse RFQs (email/EDI), rate lookup, margin rules, auto-draft quote, CRM update.',
      outcomes: ['20+ hours/week saved', 'Higher win rates', 'Margin protection'],
      href: '/industries/logistics',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Patient intake to claim draft—accurate and compliant.',
      details: 'Voice/chat → eligibility → coding suggestion (ICD/CPT) → claim draft → HIS write-back.',
      outcomes: ['Fewer claim denials', 'Faster billing cycles', 'Compliance assured'],
      href: '/industries/healthcare',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Scale,
      title: 'Legal & Corporate Services',
      description: 'Contracts and corporate changes—structured and searchable.',
      details: 'Clause extraction, entity change workflows, compliance calendars.',
      outcomes: ['30-60% time saved', 'Fewer compliance misses', 'Risk mitigation'],
      href: '/industries/legal',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: HardHat,
      title: 'Construction / EPC',
      description: 'Win tenders, manage submittals, protect SLAs.',
      details: 'Tender pack summarizer, BoQ extractor, submittal tracker agent, SLA penalty calculator.',
      outcomes: ['Faster bid preparation', 'Contractual control', 'Reduced penalties'],
      href: '/industries/construction',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Laptop,
      title: 'B2B SaaS',
      description: 'Clean pipeline. Faster revenue.',
      details: 'Enrich → ICP score → outreach sequences; CS deflection + renewal triggers.',
      outcomes: ['3x lead qualification', 'Higher conversion rates', 'Reduced churn'],
      href: '/industries/saas',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Hotel,
      title: 'Hospitality & Luxury Retail',
      description: 'Guest joy, operational calm.',
      details: 'Guest support copilot, supplier order bots, rota planning helpers.',
      outcomes: ['Improved guest satisfaction', 'Operational efficiency', 'Staff productivity'],
      href: '/industries/hospitality',
      color: 'from-teal-500 to-cyan-500'
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
              Purpose-built agents for{' '}
              <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
                your sector
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Industry-specific automation workflows designed for sector challenges, regulations, and business processes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={industry.href}>
                  <Card className="h-full group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                          <industry.icon className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      <CardTitle className="text-2xl mb-3 group-hover:text-[#00B3A4] transition-colors">
                        {industry.title}
                      </CardTitle>
                      <p className="text-lg font-medium text-[#111827] mb-3">{industry.description}</p>
                      <p className="text-[#6B7280] leading-relaxed">{industry.details}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-6">
                        <h4 className="font-semibold text-[#111827] mb-3">Typical Outcomes:</h4>
                        <ul className="space-y-2">
                          {industry.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-center text-[#6B7280]">
                              <div className="w-2 h-2 bg-[#10B981] rounded-full mr-3"></div>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center text-[#2563EB] font-medium group-hover:translate-x-2 transition-transform">
                        Explore {industry.title}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Don't see your industry?
            </h2>
            <p className="text-lg text-[#6B7280] mb-8">
              We adapt our automation patterns to any sector. Tell us about your specific workflow challenges.
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center text-[#2563EB] font-medium hover:text-[#1D4ED8] transition-colors group"
            >
              Let's discuss your use case
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Industries;