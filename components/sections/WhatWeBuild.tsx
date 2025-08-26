'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Bot, Workflow, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const WhatWeBuild = () => {
  const solutions = [
    {
      icon: Bot,
      title: 'Agentic AI Systems',
      description: 'Multi-step reasoning agents that understand context, make decisions, and take actions with your business rules.',
      features: ['LangGraph orchestration', 'Tool calling & memory', 'Decision constraints', 'Multi-agent workflows'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Workflow,
      title: 'Production Workflows',
      description: 'Robust automation pipelines with error handling, retries, and human-in-the-loop approvals.',
      features: ['n8n workflow engine', 'Exponential backoff', 'Dead letter queues', 'Approval workflows'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built-in compliance, audit trails, and security controls for production environments.',
      features: ['SOC 2 compliance', 'Audit logging', 'Role-based access', 'Data encryption'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
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
            What We Build
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Production-grade AI automation systems that integrate seamlessly with your existing tools and processes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-xl transition-all duration-300 group">
                <CardHeader>
                  <div className={`w-16 h-16 bg-gradient-to-br ${solution.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{solution.title}</CardTitle>
                  <CardDescription className="text-[#6B7280] leading-relaxed">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-[#6B7280]">
                        <div className="w-2 h-2 bg-[#10B981] rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
          <Button size="xl" asChild>
            <Link href="/solutions">
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeBuild;