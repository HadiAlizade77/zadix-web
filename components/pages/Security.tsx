'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, FileCheck, Users, Globe, Database, AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Security = () => {
  const securityControls = [
    {
      icon: Shield,
      title: 'SOC-Aligned Controls',
      description: 'Comprehensive security framework with audit trails, access controls, and monitoring',
      details: ['Security policies & procedures', 'Risk assessment framework', 'Incident response plan', 'Vendor management']
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data in transit and at rest with key management',
      details: ['TLS 1.3 for data in transit', 'AES-256 encryption at rest', 'Key rotation policies', 'Secure key storage']
    },
    {
      icon: Eye,
      title: 'Full Observability',
      description: 'Complete visibility into AI decisions, data flows, and system performance',
      details: ['Decision audit trails', 'Data lineage tracking', 'Performance monitoring', 'Quality metrics']
    },
    {
      icon: FileCheck,
      title: 'Audit Logging',
      description: 'Comprehensive logs for compliance, debugging, and forensic analysis',
      details: ['Immutable audit logs', 'User activity tracking', 'System event logging', 'Log retention policies']
    },
    {
      icon: Users,
      title: 'Role-Based Access Control',
      description: 'Granular permissions and approval workflows with principle of least privilege',
      details: ['Multi-factor authentication', 'Role-based permissions', 'Approval workflows', 'Session management']
    },
    {
      icon: Globe,
      title: 'Privacy & Compliance',
      description: 'GDPR-ready with data residency controls and privacy-first design',
      details: ['Data minimization', 'Right to erasure', 'Data portability', 'Consent management']
    }
  ];

  const complianceFeatures = [
    {
      icon: Database,
      title: 'Data Residency',
      description: 'Control where your data is processed and stored',
      availability: 'Available on request'
    },
    {
      icon: AlertTriangle,
      title: 'Incident Response',
      description: '24/7 monitoring with automated alerting and response',
      availability: 'Standard on Enterprise'
    },
    {
      icon: FileCheck,
      title: 'Compliance Reports',
      description: 'Regular security and compliance reporting',
      availability: 'Quarterly reports'
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
            <div className="w-20 h-20 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-3xl flex items-center justify-center mx-auto mb-8">
              <Shield className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Enterprise-Grade{' '}
              <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
                Security
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              SOC-aligned controls by default: audit trails, RBAC, encryption, and full observability of AI decisions. 
              Built for production environments from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Controls */}
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
              Security Controls
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Comprehensive security framework designed for enterprise requirements
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {securityControls.map((control, index) => (
              <motion.div
                key={control.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-2xl flex items-center justify-center mb-4">
                      <control.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3">{control.title}</CardTitle>
                    <p className="text-[#6B7280] leading-relaxed">{control.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {control.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-[#6B7280] text-sm">
                          <div className="w-1.5 h-1.5 bg-[#00B3A4] rounded-full mr-3"></div>
                          {detail}
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

      {/* Compliance Features */}
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
              Compliance & Privacy
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Privacy-first design with comprehensive compliance capabilities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {complianceFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#111827] mb-3">{feature.title}</h3>
                <p className="text-[#6B7280] mb-4 leading-relaxed">{feature.description}</p>
                <span className="inline-block px-3 py-1 bg-[#00B3A4]/10 text-[#00B3A4] rounded-full text-sm font-medium">
                  {feature.availability}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Data Processing */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-md"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-[#111827] mb-6">Data Processing & Retention</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-[#111827] mb-4">PII Minimization</h4>
                <ul className="space-y-2 text-[#6B7280]">
                  <li>• Collect only necessary data</li>
                  <li>• Automatic data anonymization</li>
                  <li>• Configurable retention periods</li>
                  <li>• Secure data deletion</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-[#111827] mb-4">Backup & Recovery</h4>
                <ul className="space-y-2 text-[#6B7280]">
                  <li>• Encrypted backups</li>
                  <li>• Point-in-time recovery</li>
                  <li>• Cross-region replication</li>
                  <li>• Disaster recovery testing</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DPA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Data Processing Agreement
            </h2>
            <p className="text-lg text-[#6B7280] mb-8">
              We provide a comprehensive Data Processing Agreement (DPA) that covers GDPR requirements, 
              data handling procedures, and security measures.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/dpa">
                  View DPA
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="/contact">Discuss Security Requirements</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Security;