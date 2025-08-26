'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Banknote, Truck, Heart, Scale, HardHat, Laptop, Hotel } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const IndustriesGrid = () => {
  const industries = [
    {
      icon: Building2,
      title: 'Real Estate',
      description: 'Every lead qualified in 60 seconds. Every follow-up on time.',
      href: '/industries/real-estate',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Banknote,
      title: 'Investment',
      description: 'From CIM to IC memo, in minutes.',
      href: '/industries/investment',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Truck,
      title: 'Logistics',
      description: 'RFQ in, quote out—profit-guarded.',
      href: '/industries/logistics',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Healthcare',
      description: 'Patient intake to claim draft—accurate and compliant.',
      href: '/industries/healthcare',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Scale,
      title: 'Legal',
      description: 'Contracts and corporate changes—structured and searchable.',
      href: '/industries/legal',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: HardHat,
      title: 'Construction',
      description: 'Win tenders, manage submittals, protect SLAs.',
      href: '/industries/construction',
      color: 'from-amber-500 to-orange-500'
    },
    {
      icon: Laptop,
      title: 'SaaS',
      description: 'Clean pipeline. Faster revenue.',
      href: '/industries/saas',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Hotel,
      title: 'Hospitality',
      description: 'Guest joy, operational calm.',
      href: '/industries/hospitality',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  return (
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
            Industry-Specific Solutions
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Purpose-built automation workflows designed for your sector's unique challenges and regulations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={industry.href}>
                <Card className="h-full group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <industry.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-[#00B3A4] transition-colors">
                      {industry.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-[#6B7280] mb-4 leading-relaxed">
                      {industry.description}
                    </p>
                    <div className="flex items-center justify-center text-[#2563EB] font-medium group-hover:translate-x-2 transition-transform">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
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
          <Link 
            href="/industries" 
            className="inline-flex items-center text-[#2563EB] font-medium hover:text-[#1D4ED8] transition-colors group"
          >
            View All Industries
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesGrid;