'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, BookOpen } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Blog = () => {
  const posts = [
    {
      title: 'Building Production-Ready AI Agents with LangGraph',
      excerpt: 'Deep dive into architecting reliable AI agents that can handle real-world business processes with proper error handling and observability.',
      author: 'Engineering Team',
      date: '2024-01-15',
      readTime: '8 min read',
      category: 'Engineering'
    },
    {
      title: 'Why Most AI Automations Fail in Production',
      excerpt: 'Common pitfalls we see in AI automation projects and how to avoid them. From prompt engineering to system integration challenges.',
      author: 'CTO',
      date: '2024-01-10',
      readTime: '6 min read',
      category: 'Strategy'
    },
    {
      title: 'The Economics of AI Automation: ROI Analysis',
      excerpt: 'Breaking down the real costs and benefits of implementing AI automation in business operations with actual case study data.',
      author: 'Business Team',
      date: '2024-01-05',
      readTime: '10 min read',
      category: 'Business'
    },
    {
      title: 'Observability for AI Systems: Langfuse + OpenTelemetry',
      excerpt: 'How we implement comprehensive monitoring and debugging for AI agents in production environments.',
      author: 'DevOps Team',
      date: '2023-12-28',
      readTime: '12 min read',
      category: 'Engineering'
    },
    {
      title: 'Human-in-the-Loop: Designing Approval Workflows',
      excerpt: 'Best practices for implementing human oversight in AI automation systems without killing efficiency.',
      author: 'Product Team',
      date: '2023-12-20',
      readTime: '7 min read',
      category: 'Product'
    },
    {
      title: 'Multi-Agent Systems: When One Agent Isn\'t Enough',
      excerpt: 'Designing complex workflows with multiple specialized agents working together to solve business problems.',
      author: 'Engineering Team',
      date: '2023-12-15',
      readTime: '9 min read',
      category: 'Engineering'
    }
  ];

  const categories = ['All', 'Engineering', 'Strategy', 'Business', 'Product'];

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
              <BookOpen className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Engineering Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Deep technical content on building reliable, observable, and scalable AI automation systems. 
              From architecture decisions to production war stories.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-[#00B3A4] text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        post.category === 'Engineering' ? 'bg-blue-100 text-blue-800' :
                        post.category === 'Strategy' ? 'bg-purple-100 text-purple-800' :
                        post.category === 'Business' ? 'bg-green-100 text-green-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {post.category}
                      </span>
                      <span className="text-xs text-[#6B7280]">{post.readTime}</span>
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-[#00B3A4] transition-colors line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280] mb-6 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-[#6B7280]">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-2" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </div>
                    <div className="mt-4 flex items-center text-[#2563EB] font-medium group-hover:translate-x-2 transition-transform">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Stay Updated on AI Automation
            </h2>
            <p className="text-lg text-[#6B7280] mb-8">
              Get the latest insights on building production AI systems delivered to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
              />
              <Button size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-[#6B7280] mt-4">
              No spam. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;