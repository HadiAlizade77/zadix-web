'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Locale } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface HowItWorksProps {
  locale: Locale;
}

export default function HowItWorks({ locale }: HowItWorksProps) {
  const steps = [
    {
      number: '1',
      title: 'Connect',
      description: 'your email, docs, and systems',
      color: 'from-blue-500 to-cyan-500',
      icon: '📧',
      details: 'Email, documents, CRM, ERP'
    },
    {
      number: '2',
      title: 'Understand', 
      description: 'we extract what matters',
      color: 'from-purple-500 to-pink-500',
      icon: '🧠',
      details: 'AI analysis and data extraction'
    },
    {
      number: '3',
      title: 'Approve',
      description: 'you confirm critical actions',
      color: 'from-green-500 to-emerald-500',
      icon: '✅',
      details: 'Human oversight and validation'
    },
    {
      number: '4',
      title: 'Update',
      description: 'records changed, tasks done',
      color: 'from-orange-500 to-red-500',
      icon: '🔄',
      details: 'Automated system updates'
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2 font-sora text-headline-slate mb-6">
            How It Works
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            From document to decision in minutes, not hours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center border border-gray-100 group hover:-translate-y-2">
                <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 relative overflow-hidden`}>
                  {/* Background pattern */}
                  <div className="absolute inset-0 bg-white/10 rounded-2xl"></div>
                  <div className="absolute top-2 right-2 w-3 h-3 bg-white/20 rounded-full"></div>
                  <div className="absolute bottom-2 left-2 w-2 h-2 bg-white/20 rounded-full"></div>
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                
                {/* Icon */}
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                
                <h3 className="text-xl font-bold font-sora text-headline-slate mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                
                {/* Additional details */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500 font-medium">
                    {step.details}
                  </p>
                </div>
                
                {/* Connecting line for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-8 w-16 h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-y-1/2 group-hover:from-accent-teal group-hover:to-accent-blue transition-all duration-300"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}