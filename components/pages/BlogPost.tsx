'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface BlogPostProps {
  post: {
    title: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    excerpt: string;
    content: string;
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  // Convert markdown-like content to HTML (simplified)
  const formatContent = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-4xl font-bold text-[#111827] mt-12 mb-6">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-3xl font-bold text-[#111827] mt-10 mb-4">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-2xl font-bold text-[#111827] mt-8 mb-3">{line.slice(4)}</h3>;
        }
        
        // Code blocks
        if (line.startsWith('```')) {
          return null; // Handle in a more sophisticated way
        }
        
        // Lists
        if (line.startsWith('- ')) {
          return <li key={index} className="text-[#6B7280] mb-2">{line.slice(2)}</li>;
        }
        
        // Bold text
        if (line.includes('**')) {
          const parts = line.split('**');
          return (
            <p key={index} className="text-[#6B7280] mb-4 leading-relaxed">
              {parts.map((part, i) => 
                i % 2 === 1 ? <strong key={i} className="font-semibold text-[#111827]">{part}</strong> : part
              )}
            </p>
          );
        }
        
        // Regular paragraphs
        if (line.trim() && !line.startsWith('#') && !line.startsWith('```')) {
          return <p key={index} className="text-[#6B7280] mb-4 leading-relaxed">{line}</p>;
        }
        
        return null;
      })
      .filter(Boolean);
  };

  const relatedPosts = [
    {
      title: 'Why Most AI Automations Fail in Production',
      href: '/blog/why-ai-automations-fail',
      category: 'Strategy'
    },
    {
      title: 'Observability for AI Systems: Langfuse + OpenTelemetry',
      href: '/blog/ai-observability',
      category: 'Engineering'
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Back to Blog */}
      <section className="py-8 bg-[#F8FAFC] border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-[#6B7280] hover:text-[#00B3A4] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                post.category === 'Engineering' ? 'bg-blue-100 text-blue-800' :
                post.category === 'Strategy' ? 'bg-purple-100 text-purple-800' :
                post.category === 'Business' ? 'bg-green-100 text-green-800' :
                'bg-orange-100 text-orange-800'
              }`}>
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-[#6B7280] mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-[#6B7280] pb-8 border-b border-gray-200">
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-6">
              {formatContent(post.content)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#00B3A4] to-[#2563EB]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to implement these patterns?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              See how we apply production-ready AI patterns to real business workflows
            </p>
            <Button size="xl" variant="secondary" asChild>
              <Link href="/contact">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-bold text-[#111827] mb-8">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={relatedPost.href}>
                  <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block ${
                      relatedPost.category === 'Engineering' ? 'bg-blue-100 text-blue-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {relatedPost.category}
                    </span>
                    <h4 className="text-lg font-bold text-[#111827] group-hover:text-[#00B3A4] transition-colors">
                      {relatedPost.title}
                    </h4>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;