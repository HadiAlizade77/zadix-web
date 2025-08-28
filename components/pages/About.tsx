'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Users, MapPin, Award, Target, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Reliability',
      description: 'Every workflow is tested, observable, and reversible. We build systems that work consistently in production.'
    },
    {
      icon: CheckCircle,
      title: 'Clarity',
      description: 'Fixed scope, fixed timeline, clear documentation. No surprises, no scope creep, no hidden costs.'
    },
    {
      icon: Award,
      title: 'Impact',
      description: 'ROI measured in days, not months. We focus on delivering measurable business value quickly.'
    }
  ];

  const team = [
    {
      name: 'Hadi Alizadeh',
      role: 'Founder & Principal Engineer',
      description: 'SignumTTE Technical Manager: enterprise microservices, AI orchestration, and data systems.',
      photo: 'https://media.licdn.com/dms/image/v2/D5603AQFWC3zQ4h0wgA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1713242516858?e=1759363200&v=beta&t=XT3XMKWqWC9N1eJaextCnNxkwXrK7ApszfYmk-jY5L8'
    },
    {
      name: 'Solutions Architect',
      role: 'Integration & Reliability',
      description: 'Integration design, automation reliability, and client onboarding.',
      photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Delivery Lead',
      role: 'Project Execution',
      description: 'Project execution, testing, and customer enablement.',
      photo: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
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
              Engineers first.{' '}
              <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
                Outcomes always.
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Zadix was founded to deliver production-ready AI automations to businesses in MENA and Europe — 
              with a clear focus on measurable impact and enterprise reliability.
            </p>
            <div className="flex items-center justify-center text-gray-300 mb-8">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Based in Dubai, serving clients across GCC, Türkiye, CIS, and Europe</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Block */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <blockquote className="text-2xl md:text-3xl text-[#111827] leading-relaxed font-medium italic mb-8">
              "We've spent years building complex enterprise systems — from facility management platforms to AI-powered analytics — and saw how much time gets lost in repetitive processes. Zadix exists to fix that. Our mission is simple: cut manual work by 50–80% in the first 30 days, without compromising compliance or control."
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Values */}
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
              Senior engineers and process experts building production-ready automation systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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
                    <div className="w-24 h-24 rounded-full mx-auto mb-4 overflow-hidden">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
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

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Button size="lg" asChild>
              <a href="mailto:hello@zadix.ai?subject=Technical Discussion">
                Talk to engineering
              </a>
            </Button>
          </motion.div>
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