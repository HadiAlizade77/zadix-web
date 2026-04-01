'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from '@/components/ui/button';
import { getAllBlogPosts } from '@/lib/blog-data';

interface BlogPostProps {
  post: {
    id: string;
    title: string;
    author: string;
    date: string;
    readTime: string;
    category: string;
    excerpt: string;
    content: string;
  };
}

const categoryColors: Record<string, string> = {
  Engineering:        'bg-blue-900/40 text-blue-300 border border-blue-700/40',
  Strategy:           'bg-purple-900/40 text-purple-300 border border-purple-700/40',
  'Case Study':       'bg-green-900/40 text-green-300 border border-green-700/40',
  'Industry Insights':'bg-amber/20 text-amber border border-amber/30',
};

const BlogPost = ({ post }: BlogPostProps) => {
  // Pick 2 related posts (anything that isn't the current post)
  const relatedPosts = getAllBlogPosts()
    .filter(p => p.id !== post.id)
    .slice(0, 2);

  return (
    <div className="min-h-screen pt-20">

      {/* Back to Blog */}
      <section className="py-8 bg-ink border-b border-border-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-muted hover:text-amber transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                categoryColors[post.category] ?? 'bg-surface-2 text-muted border border-border-warm'
              }`}>
                {post.category}
              </span>
            </div>

            <h1 className="font-cormorant font-light text-4xl md:text-5xl text-cream mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted mb-8 leading-relaxed font-dm-sans">
              {post.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-6 text-muted pb-8 border-b border-border-warm font-dm-sans text-sm">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric', month: 'long', day: 'numeric',
                })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="font-cormorant font-light text-4xl text-cream mt-14 mb-6 leading-tight">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="font-cormorant font-light text-3xl text-cream mt-12 mb-5 leading-snug">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-cormorant font-medium text-2xl text-cream mt-10 mb-4">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-muted font-dm-sans text-base leading-relaxed mb-5">{children}</p>
                ),
                strong: ({ children }) => (
                  <strong className="text-cream font-semibold">{children}</strong>
                ),
                em: ({ children }) => (
                  <em className="text-cream/80 italic">{children}</em>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-outside pl-6 mb-6 space-y-2">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-outside pl-6 mb-6 space-y-2">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="text-muted font-dm-sans leading-relaxed">{children}</li>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-2 border-amber pl-6 my-6 italic text-muted/80">{children}</blockquote>
                ),
                code: ({ children, className }) => {
                  const isBlock = className?.includes('language-');
                  return isBlock ? (
                    <code className="block bg-surface-2 border border-border-warm rounded-lg p-4 text-sm text-cream/80 font-mono overflow-x-auto mb-6 whitespace-pre">{children}</code>
                  ) : (
                    <code className="bg-surface-2 text-amber px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
                  );
                },
                pre: ({ children }) => (
                  <pre className="bg-surface-2 border border-border-warm rounded-lg p-4 overflow-x-auto mb-6">{children}</pre>
                ),
                a: ({ href, children }) => (
                  <a href={href} className="text-amber hover:text-amber/80 underline underline-offset-2 transition-colors" target={href?.startsWith('http') ? '_blank' : undefined} rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}>{children}</a>
                ),
                hr: () => (
                  <hr className="border-border-warm my-10" />
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-amber to-amber-dim">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-cormorant font-light text-4xl text-ink mb-4">
              Ready to automate your operations?
            </h2>
            <p className="text-lg text-ink/70 mb-8 font-dm-sans">
              Book a free 20-minute scoping call — we'll map out your workflow and send a fixed-price proposal within 24 hours.
            </p>
            <Button size="xl" variant="secondary" asChild>
              <Link href="/contact">
                Book a Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-ink">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="font-cormorant font-light text-3xl text-cream mb-8">Related Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((related, index) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${related.id}`}>
                    <div className="bg-surface border border-border-warm rounded-xl p-6 hover:border-amber/40 transition-all duration-300 group">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium mb-3 inline-block ${
                        categoryColors[related.category] ?? 'bg-surface-2 text-muted border border-border-warm'
                      }`}>
                        {related.category}
                      </span>
                      <h4 className="text-base font-dm-sans font-medium text-cream group-hover:text-amber transition-colors leading-snug">
                        {related.title}
                      </h4>
                      <p className="text-sm text-muted mt-2 line-clamp-2">{related.excerpt}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;
