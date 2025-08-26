'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Code, Globe, ArrowRight, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Careers = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote (Dubai timezone preferred)',
      type: 'Full-time',
      salary: '$120k - $180k',
      description: 'Build production-ready AI automation systems using LangGraph, n8n, and modern observability tools.',
      requirements: [
        '5+ years Python/TypeScript experience',
        'Experience with LLM applications and agent frameworks',
        'Production system design and deployment',
        'Strong understanding of microservices architecture'
      ],
      responsibilities: [
        'Design and implement AI automation workflows',
        'Build robust error handling and retry mechanisms',
        'Integrate with client systems (CRMs, ERPs, databases)',
        'Implement observability and monitoring solutions'
      ]
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote (Global)',
      type: 'Full-time',
      salary: '$100k - $150k',
      description: 'Ensure reliable deployment and monitoring of AI automation systems across cloud environments.',
      requirements: [
        '4+ years DevOps/SRE experience',
        'Kubernetes and Docker expertise',
        'CI/CD pipeline design and implementation',
        'Monitoring and alerting systems (Prometheus, Grafana)'
      ],
      responsibilities: [
        'Design and maintain deployment pipelines',
        'Implement monitoring and alerting for AI systems',
        'Ensure high availability and disaster recovery',
        'Optimize system performance and costs'
      ]
    },
    {
      title: 'Solutions Engineer',
      location: 'Dubai, UAE (Hybrid)',
      type: 'Full-time',
      salary: '$80k - $120k',
      description: 'Work directly with clients to understand requirements and design automation solutions.',
      requirements: [
        '3+ years technical consulting experience',
        'Strong communication and presentation skills',
        'Understanding of business processes and workflows',
        'Experience with system integrations'
      ],
      responsibilities: [
        'Conduct client discovery and requirements gathering',
        'Design automation workflows and system architecture',
        'Present technical solutions to stakeholders',
        'Support implementation and client onboarding'
      ]
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Remote-First Culture',
      description: 'Work from anywhere with flexible hours and async communication'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Top-tier salaries plus equity and performance bonuses'
    },
    {
      icon: Users,
      title: 'Small Team Impact',
      description: 'Direct influence on product direction and company growth'
    },
    {
      icon: Code,
      title: 'Cutting-Edge Tech',
      description: 'Work with the latest AI tools and production-grade systems'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Unlimited PTO and flexible working arrangements'
    },
    {
      icon: CheckCircle,
      title: 'Growth Opportunities',
      description: 'Learning budget and conference attendance support'
    }
  ];

  const values = [
    {
      title: 'Engineers First',
      description: 'We prioritize technical excellence and give engineers the autonomy to build great systems.'
    },
    {
      title: 'Production Ready',
      description: 'Everything we build must work reliably in production with proper monitoring and error handling.'
    },
    {
      title: 'Client Success',
      description: 'We measure our success by the measurable value we deliver to our clients.'
    },
    {
      title: 'Continuous Learning',
      description: 'The AI field moves fast, and we invest in keeping our team at the cutting edge.'
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
              Build the Future of{' '}
              <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
                AI Automation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Join our team of senior engineers building production-ready AI automation systems that eliminate busywork for businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <a href="#open-positions">
                  View Open Positions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="xl" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link href="/about">Learn About Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Values */}
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
              The principles that guide how we work and build together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-[#F8FAFC] rounded-2xl p-8"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-[#111827] mb-3">{value.title}</h3>
                <p className="text-[#6B7280] leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
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
              Why Join Zadix
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              We offer more than just a job—we offer the opportunity to shape the future of business automation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280] leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Join our growing team and help build the next generation of AI automation systems
            </p>
          </motion.div>

          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      {/* Job Info */}
                      <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold text-[#111827] mb-4">{position.title}</h3>
                        <div className="space-y-3 text-[#6B7280]">
                          <div className="flex items-center">
                            <MapPin className="h-5 w-5 mr-2" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-5 w-5 mr-2" />
                            <span>{position.type}</span>
                          </div>
                          <div className="flex items-center">
                            <DollarSign className="h-5 w-5 mr-2" />
                            <span>{position.salary}</span>
                          </div>
                        </div>
                        <Button className="mt-6 w-full" asChild>
                          <a href={`mailto:careers@zadix.ai?subject=Application for ${position.title}`}>
                            Apply Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </div>

                      {/* Job Details */}
                      <div className="lg:col-span-2">
                        <p className="text-[#6B7280] mb-6 leading-relaxed">{position.description}</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-[#111827] mb-3">Requirements</h4>
                            <ul className="space-y-2">
                              {position.requirements.map((req, idx) => (
                                <li key={idx} className="flex items-start text-[#6B7280] text-sm">
                                  <div className="w-1.5 h-1.5 bg-[#00B3A4] rounded-full mr-3 mt-2"></div>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-[#111827] mb-3">Responsibilities</h4>
                            <ul className="space-y-2">
                              {position.responsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start text-[#6B7280] text-sm">
                                  <div className="w-1.5 h-1.5 bg-[#2563EB] rounded-full mr-3 mt-2"></div>
                                  {resp}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
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
              Don't see the right role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for exceptional talent. Send us your resume and tell us how you'd like to contribute.
            </p>
            <Button size="xl" variant="secondary" asChild>
              <a href="mailto:careers@zadix.ai?subject=General Application">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;