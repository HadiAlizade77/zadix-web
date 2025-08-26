'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Bot, CheckCircle, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Document Ingestion',
      description: 'AI agents process emails, PDFs, and forms with intelligent parsing and data extraction.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Bot,
      title: 'Intelligent Processing',
      description: 'LangGraph agents apply business rules, validate data, and make contextual decisions.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: CheckCircle,
      title: 'Human Approval',
      description: 'Critical decisions route to humans with full context and recommended actions.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'System Integration',
      description: 'Approved actions execute automatically with full audit trails and error handling.',
      color: 'from-orange-500 to-red-500'
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
            How It Works
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            From document to decision in minutes, not hours
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-sm font-medium text-[#00B3A4] mb-2">
                  Step {index + 1}
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-4">
                  {step.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-[#00B3A4] to-[#2563EB] transform -translate-y-1/2"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;