'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Clock, DollarSign, Users } from 'lucide-react';

const OutcomeStats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: '3-5x',
      label: 'Faster Processing',
      description: 'Reduce manual work from hours to minutes'
    },
    {
      icon: Clock,
      value: '20+',
      label: 'Hours Saved Weekly',
      description: 'Per knowledge worker on repetitive tasks'
    },
    {
      icon: DollarSign,
      value: '85%',
      label: 'Cost Reduction',
      description: 'On operational overhead and errors'
    },
    {
      icon: Users,
      value: '99.9%',
      label: 'Accuracy Rate',
      description: 'With human oversight and validation'
    }
  ];

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-cream mb-6">
            Measurable Business Impact
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto">
            Real outcomes from production AI automation systems
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="bg-gradient-to-br from-amber to-amber-dim w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-cream mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-amber mb-2">
                {stat.label}
              </div>
              <p className="text-muted">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OutcomeStats;