'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileCheck, Users, Globe } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const SecurityCompliance = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'SOC 2 Compliance',
      description: 'Built-in security controls and audit trails for enterprise requirements'
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data in transit and at rest'
    },
    {
      icon: Eye,
      title: 'Full Observability',
      description: 'Complete visibility into AI decisions with Langfuse integration'
    },
    {
      icon: FileCheck,
      title: 'Audit Logging',
      description: 'Comprehensive logs for compliance and debugging'
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: 'Granular permissions and approval workflows'
    },
    {
      icon: Globe,
      title: 'GDPR Ready',
      description: 'Privacy-first design with data residency controls'
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
            Enterprise-Grade Security
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Built for production environments with security, compliance, and observability from day one
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-2xl flex items-center justify-center mb-6">
                <feature.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#111827] mb-3">{feature.title}</h3>
              <p className="text-[#6B7280] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] rounded-3xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Ready for Production from Day One
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            No prototype phase. No MVP limitations. We build production-ready systems with enterprise security, 
            compliance, and monitoring built-in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" variant="secondary" asChild>
              <Link href="/contact">
                Discuss Security Requirements
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-[#00B3A4]" asChild>
              <Link href="/process">
                View Our Process
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SecurityCompliance;