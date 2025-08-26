'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Workflow, Brain, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Locale } from '@/lib/i18n';

interface WhatWeDeliverProps {
  locale: Locale;
}

export default function WhatWeDeliver({ locale }: WhatWeDeliverProps) {
  const deliverables = [
    {
      icon: Workflow,
      title: 'Workflow Automation',
      description: 'Intake → extract → validate → route → update',
      color: 'from-accent-teal to-accent-blue',
    },
    {
      icon: Brain,
      title: 'Decision Support',
      description: 'Contextual recommendations with approvals',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Zap,
      title: 'System Integration',
      description: 'Your tools working together end-to-end',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-20 bg-paper">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2 font-sora text-headline-slate mb-6">
            What We Deliver
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Production-ready automation systems that integrate seamlessly with your existing tools and processes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {deliverables.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl mb-3">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}