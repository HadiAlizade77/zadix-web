'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Award, Target, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Outcomes First',
      description: 'We measure success by business impact, not technical complexity. Every automation must deliver measurable value.'
    },
    {
      icon: Users,
      title: 'Engineers First',
      description: 'Built by senior engineers who understand enterprise systems, microservices, and production challenges.'
    },
    {
      icon: Award,
      title: 'Production Ready',
      description: 'No prototypes or MVPs. We build systems that scale, monitor, and maintain themselves in production.'
    }
  ];

  const team = [
    {
      name: 'Senior Engineering Team',
      role: 'Technical Leadership',
      description: 'Former enterprise architects with deep experience in microservices, AI orchestration, and production systems.'
    },
    {
      name: 'Business Operations',
      role: 'Process Experts',
      description: 'Domain experts who understand the operational challenges across different industries and business functions.'
    },
    {
      name: 'AI Research',
      role: 'Innovation Team',
      description: 'Researchers focused on practical applications of LLMs, agent systems, and production AI workflows.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Automations Delivered', description: 'Production systems in operation' },
    { number: '7', label: 'Day Average Delivery', description: 'From requirements to production' },
    { number: '99.9%', label: 'System Uptime', description: 'Reliable, monitored operations' },
    { number: '3', label: 'Global Offices', description: 'Dubai, London, New York' }
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
              Engineers First,{' '}
              <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
                Outcomes Always
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Built by senior engineers with enterprise microservices and AI orchestration backgrounds. 
              Headquartered in Dubai Free Zone, serving global clients.
            </p>
            <div className="flex items-center justify-center text-gray-300 mb-8">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Dubai, UAE • London, UK • New York, USA</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              Our Values
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              The principles that guide how we build and deliver AI automation systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-4">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280] leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
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
              By the Numbers
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Our track record of delivering production-ready AI automation systems
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
                <div className="text-5xl font-bold text-[#111827] mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-[#00B3A4] mb-2">{stat.label}</div>
                <p className="text-[#6B7280]">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Our Team
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Cross-functional expertise in engineering, business operations, and AI research
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                    <p className="text-[#00B3A4] font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-[#6B7280] leading-relaxed">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0B1220] via-[#0F1629] to-[#0B1220]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to work with us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can automate your business operations with production-ready AI systems
            </p>
            <Button size="xl" asChild>
              <Link href="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;