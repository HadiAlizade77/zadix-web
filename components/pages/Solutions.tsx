'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, Database, BarChart3, Shield, ArrowRight, Zap, Code } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Solutions = () => {
  const solutionPillars = [
    {
      icon: Bot,
      title: 'Orchestration',
      description: 'multi‑step decisions with tools & memory',
      features: ['Tool integration', 'Persistent memory', 'Multi-step planning', 'Decision constraints']
    },
    {
      icon: Workflow,
      title: 'Workflows',
      description: 'triggers, retries, rate limits, error handling',
      features: ['Trigger systems', 'Exponential backoff', 'Dead letter queues', 'Rate limiting']
    },
    {
      icon: Database,
      title: 'Knowledge',
      description: 'your private docs → accurate answers',
      features: ['Document processing', 'Smart chunking', 'Quality evaluations', 'Accurate retrieval']
    },
    {
      icon: BarChart3,
      title: 'Observability',
      description: 'traces, metrics, cost/quality tracking',
      features: ['Decision traces', 'Cost tracking', 'Quality metrics', 'Performance alerts']
    },
    {
      icon: Shield,
      title: 'Safety',
      description: 'guardrails, approvals, audit logs',
      features: ['Tool whitelists', 'Content filters', 'Human approvals', 'Audit logs']
    }
  ];

  const useCases = [
    {
      title: 'Invoice/PO triage → ERP write‑back',
      description: 'extract, validate, route, and post entries',
      outcome: '70% faster processing'
    },
    {
      title: 'RFQ → Quote (logistics)',
      description: 'parse requests, look up rates, enforce margin rules, draft quotes',
      outcome: '20+ hours/week saved'
    },
    {
      title: 'Sales ops enrichment & routing',
      description: 'enrich leads, score, dedupe, assign, and kick off sequences',
      outcome: '3x faster qualification'
    },
    {
      title: 'Support L1 deflection + routing',
      description: 'instant answers from your knowledge, smart hand‑offs',
      outcome: '60% deflection rate'
    },
    {
      title: 'HR onboarding assistant',
      description: 'forms to accounts to docs, without the back‑and‑forth',
      outcome: '5 days to 2 days'
    },
    {
      title: 'Legal doc extract + clause check',
      description: 'structured terms, risk flags, and draft changes',
      outcome: '80% time reduction'
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
              From inbox to system‑of‑record—
              <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
                automated, approved, auditable
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We build automations that understand your documents and emails, make decisions with your rules, route approvals, and safely update the systems your business runs on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Pillars */}
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
              Five Pillars of Reliable Automation
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Every automation we build includes these essential components for production reliability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutionPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-2xl flex items-center justify-center mb-4">
                      <pillar.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3">{pillar.title}</CardTitle>
                    <p className="text-[#6B7280] leading-relaxed">{pillar.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {pillar.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-[#6B7280]">
                          <div className="w-1.5 h-1.5 bg-[#00B3A4] rounded-full mr-3"></div>
                          {feature}
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

      {/* Use Cases */}
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
              Common Use Cases
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Proven automation patterns that deliver immediate value
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-bold text-[#111827] mb-3">{useCase.title}</h3>
                <p className="text-[#6B7280] mb-4 leading-relaxed">{useCase.description}</p>
                <div className="bg-gradient-to-r from-[#00B3A4]/10 to-[#2563EB]/10 rounded-lg p-3">
                  <span className="text-sm font-medium text-[#00B3A4]">Typical outcome: {useCase.outcome}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comprehensive Integration Showcase */}
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
              400+ Integrations Available
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Connect your automation to virtually any service or application. Here's what's possible with n8n's integration ecosystem.
            </p>
          </motion.div>

          {/* Integration Categories with Logos */}
          <div className="space-y-16">
            {/* Communication & Collaboration */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-8 text-center">Communication & Collaboration</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'Slack', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/slack.svg' },
                  { name: 'Microsoft Teams', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftteams.svg' },
                  { name: 'Discord', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/discord.svg' },
                  { name: 'Gmail', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gmail.svg' },
                  { name: 'Outlook', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftoutlook.svg' },
                  { name: 'Zoom', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoom.svg' },
                  { name: 'Google Meet', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlemeet.svg' },
                  { name: 'Asana', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/asana.svg' },
                  { name: 'Trello', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/trello.svg' },
                  { name: 'Monday.com', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/monday.svg' },
                  { name: 'Notion', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/notion.svg' },
                  { name: 'WhatsApp', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/whatsapp.svg' }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.logo} alt={service.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-[#6B7280] text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CRM & Sales */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-8 text-center">CRM & Sales</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'Salesforce', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/salesforce.svg' },
                  { name: 'HubSpot', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/hubspot.svg' },
                  { name: 'Pipedrive', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pipedrive.svg' },
                  { name: 'Zoho', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zoho.svg' },
                  { name: 'Freshworks', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/freshworks.svg' },
                  { name: 'Zendesk', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zendesk.svg' },
                  { name: 'Intercom', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/intercom.svg' },
                  { name: 'Freshdesk', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/freshdesk.svg' },
                  { name: 'ActiveCampaign', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/activecampaign.svg' },
                  { name: 'Mailchimp', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mailchimp.svg' },
                  { name: 'Constant Contact', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/constantcontact.svg' },
                  { name: 'Close', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/close.svg' }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.logo} alt={service.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-[#6B7280] text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* E-commerce & Payments */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-8 text-center">E-commerce & Payments</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'Shopify', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/shopify.svg' },
                  { name: 'WooCommerce', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/woocommerce.svg' },
                  { name: 'Magento', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/magento.svg' },
                  { name: 'Stripe', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stripe.svg' },
                  { name: 'PayPal', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paypal.svg' },
                  { name: 'Square', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/square.svg' },
                  { name: 'BigCommerce', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bigcommerce.svg' },
                  { name: 'PrestaShop', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/prestashop.svg' },
                  { name: 'Klarna', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/klarna.svg' },
                  { name: 'Razorpay', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/razorpay.svg' },
                  { name: 'Paddle', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/paddle.svg' },
                  { name: 'Lemonsqueezy', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/lemonsqueezy.svg' }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.logo} alt={service.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-[#6B7280] text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Cloud & Development */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-8 text-center">Cloud & Development</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amazonaws.svg' },
                  { name: 'Google Cloud', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlecloud.svg' },
                  { name: 'Microsoft Azure', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftazure.svg' },
                  { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg' },
                  { name: 'GitLab', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gitlab.svg' },
                  { name: 'Bitbucket', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bitbucket.svg' },
                  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docker.svg' },
                  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/kubernetes.svg' },
                  { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vercel.svg' },
                  { name: 'Netlify', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netlify.svg' },
                  { name: 'Heroku', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/heroku.svg' },
                  { name: 'DigitalOcean', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/digitalocean.svg' }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.logo} alt={service.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-[#6B7280] text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Databases */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-8 text-center">Databases & Storage</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mysql.svg' },
                  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postgresql.svg' },
                  { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mongodb.svg' },
                  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/redis.svg' },
                  { name: 'Supabase', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/supabase.svg' },
                  { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/firebase.svg' },
                  { name: 'Airtable', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/airtable.svg' },
                  { name: 'Google Sheets', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlesheets.svg' },
                  { name: 'Microsoft Excel', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftexcel.svg' },
                  { name: 'Dropbox', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/dropbox.svg' },
                  { name: 'OneDrive', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftonedrive.svg' },
                  { name: 'Box', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/box.svg' }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.logo} alt={service.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-[#6B7280] text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Marketing & Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-8 text-center">Marketing & Analytics</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'Google Analytics', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googleanalytics.svg' },
                  { name: 'Facebook', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg' },
                  { name: 'Instagram', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg' },
                  { name: 'LinkedIn', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg' },
                  { name: 'Twitter', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twitter.svg' },
                  { name: 'TikTok', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tiktok.svg' },
                  { name: 'YouTube', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg' },
                  { name: 'Google Ads', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googleads.svg' },
                  { name: 'Meta Ads', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/meta.svg' },
                  { name: 'Mixpanel', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mixpanel.svg' },
                  { name: 'Segment', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/segment.svg' },
                  { name: 'Amplitude', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/amplitude.svg' }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.logo} alt={service.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-[#6B7280] text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Productivity & Office */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-8 text-center">Productivity & Office</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'Google Workspace', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg' },
                  { name: 'Microsoft 365', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoft.svg' },
                  { name: 'Google Drive', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googledrive.svg' },
                  { name: 'Google Docs', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googledocs.svg' },
                  { name: 'SharePoint', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftsharepoint.svg' },
                  { name: 'OneDrive', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftonedrive.svg' },
                  { name: 'Calendly', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/calendly.svg' },
                  { name: 'Typeform', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/typeform.svg' },
                  { name: 'Jotform', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jotform.svg' },
                  { name: 'DocuSign', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/docusign.svg' },
                  { name: 'Adobe', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adobe.svg' },
                  { name: 'Canva', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/canva.svg' }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.logo} alt={service.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-[#6B7280] text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Enterprise & ERP */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-8 text-center">Enterprise & ERP</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'SAP', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sap.svg' },
                  { name: 'Oracle', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/oracle.svg' },
                  { name: 'NetSuite', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/netsuite.svg' },
                  { name: 'Workday', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/workday.svg' },
                  { name: 'ServiceNow', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/servicenow.svg' },
                  { name: 'Jira', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jira.svg' },
                  { name: 'Confluence', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/confluence.svg' },
                  { name: 'Tableau', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tableau.svg' },
                  { name: 'Power BI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/powerbi.svg' },
                  { name: 'Snowflake', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/snowflake.svg' },
                  { name: 'Databricks', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/databricks.svg' },
                  { name: 'Elastic', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/elastic.svg' }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.logo} alt={service.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-[#6B7280] text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* AI & Machine Learning */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-8 text-center">AI & Machine Learning</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'OpenAI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/openai.svg' },
                  { name: 'Anthropic', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/anthropic.svg' },
                  { name: 'Google AI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg' },
                  { name: 'Hugging Face', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/huggingface.svg' },
                  { name: 'Pinecone', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pinecone.svg' },
                  { name: 'Weaviate', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/weaviate.svg' },
                  { name: 'LangChain', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/langchain.svg' },
                  { name: 'Cohere', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cohere.svg' },
                  { name: 'Replicate', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/replicate.svg' },
                  { name: 'Stability AI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/stabilityai.svg' },
                  { name: 'Eleven Labs', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/elevenlabs.svg' },
                  { name: 'AssemblyAI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/assemblyai.svg' }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.logo} alt={service.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-[#6B7280] text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Business Applications */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-8 text-center">Business Applications</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'QuickBooks', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/quickbooks.svg' },
                  { name: 'Xero', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/xero.svg' },
                  { name: 'FreshBooks', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/freshbooks.svg' },
                  { name: 'Wave', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wave.svg' },
                  { name: 'Sage', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sage.svg' },
                  { name: 'Odoo', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/odoo.svg' },
                  { name: 'Zapier', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/zapier.svg' },
                  { name: 'IFTTT', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ifttt.svg' },
                  { name: 'Make', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/make.svg' },
                  { name: 'Pabbly', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pabbly.svg' },
                  { name: 'Integromat', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/integromat.svg' },
                  { name: 'Automate.io', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/automate.svg' }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.logo} alt={service.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-[#6B7280] text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Communication Platforms */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-8 text-center">Communication Platforms</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'Telegram', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/telegram.svg' },
                  { name: 'Signal', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/signal.svg' },
                  { name: 'Twilio', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/twilio.svg' },
                  { name: 'SendGrid', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sendgrid.svg' },
                  { name: 'Mailgun', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mailgun.svg' },
                  { name: 'Postmark', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/postmark.svg' },
                  { name: 'Vonage', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vonage.svg' },
                  { name: 'RingCentral', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ringcentral.svg' },
                  { name: 'Webex', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/webex.svg' },
                  { name: 'GoToMeeting', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gotomeeting.svg' },
                  { name: 'Skype', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/skype.svg' },
                  { name: 'Viber', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/viber.svg' }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.logo} alt={service.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-[#6B7280] text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Development Tools */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-8 text-center">Development Tools</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'Jenkins', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/jenkins.svg' },
                  { name: 'CircleCI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/circleci.svg' },
                  { name: 'Travis CI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/travisci.svg' },
                  { name: 'GitHub Actions', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/githubactions.svg' },
                  { name: 'GitLab CI', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/gitlab.svg' },
                  { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/terraform.svg' },
                  { name: 'Ansible', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ansible.svg' },
                  { name: 'Prometheus', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/prometheus.svg' },
                  { name: 'Grafana', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/grafana.svg' },
                  { name: 'Datadog', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/datadog.svg' },
                  { name: 'New Relic', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/newrelic.svg' },
                  { name: 'Sentry', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/sentry.svg' }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.logo} alt={service.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-[#6B7280] text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Finance & Accounting */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-8 text-center">Finance & Accounting</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'Plaid', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/plaid.svg' },
                  { name: 'Wise', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/wise.svg' },
                  { name: 'Revolut', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/revolut.svg' },
                  { name: 'Coinbase', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/coinbase.svg' },
                  { name: 'Binance', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/binance.svg' },
                  { name: 'Kraken', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/kraken.svg' },
                  { name: 'Invoice Ninja', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/invoiceninja.svg' },
                  { name: 'FreshBooks', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/freshbooks.svg' },
                  { name: 'Chargebee', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/chargebee.svg' },
                  { name: 'Recurly', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/recurly.svg' },
                  { name: 'Braintree', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/braintree.svg' },
                  { name: 'Adyen', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/adyen.svg' }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.logo} alt={service.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-[#6B7280] text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Security & Identity */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-8 text-center">Security & Identity</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'Auth0', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/auth0.svg' },
                  { name: 'Okta', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/okta.svg' },
                  { name: 'OneLogin', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/onelogin.svg' },
                  { name: 'Ping Identity', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/pingidentity.svg' },
                  { name: 'Azure AD', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/microsoftazure.svg' },
                  { name: 'Google Identity', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/google.svg' },
                  { name: 'LastPass', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/lastpass.svg' },
                  { name: '1Password', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/1password.svg' },
                  { name: 'Bitwarden', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/bitwarden.svg' },
                  { name: 'Duo Security', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/duo.svg' },
                  { name: 'CyberArk', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/cyberark.svg' },
                  { name: 'Vault', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/vault.svg' }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.logo} alt={service.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-[#6B7280] text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* IoT & Hardware */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-[#111827] mb-8 text-center">IoT & Hardware</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {[
                  { name: 'Arduino', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/arduino.svg' },
                  { name: 'Raspberry Pi', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/raspberrypi.svg' },
                  { name: 'Home Assistant', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/homeassistant.svg' },
                  { name: 'Philips Hue', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/philipshue.svg' },
                  { name: 'Nest', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/googlenest.svg' },
                  { name: 'Ring', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/ring.svg' },
                  { name: 'Tesla', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/tesla.svg' },
                  { name: 'Fitbit', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/fitbit.svg' },
                  { name: 'Garmin', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/garmin.svg' },
                  { name: 'Withings', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/withings.svg' },
                  { name: 'MQTT', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/mqtt.svg' },
                  { name: 'InfluxDB', logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/influxdb.svg' }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center group"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-12 h-12 mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <img src={service.logo} alt={service.name} className="w-8 h-8 object-contain" />
                    </div>
                    <span className="text-sm font-medium text-[#6B7280] text-center">{service.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Beyond Standard Integrations */}
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
              Beyond the Standard List
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Don't see your specific tool? Our integration capabilities extend far beyond pre-built connectors.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: Database,
                title: 'Custom API Integrations',
                description: 'Connect to any service with a REST API, GraphQL, or SOAP interface'
              },
              {
                icon: Zap,
                title: 'Webhook Support',
                description: 'Real-time data synchronization with any webhook-enabled platform'
              },
              {
                icon: Shield,
                title: 'Database Connections',
                description: 'Direct integration with virtually any database system or data warehouse'
              },
              {
                icon: Code,
                title: 'Custom Code Execution',
                description: 'JavaScript and Python support for unlimited automation possibilities'
              }
            ].map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <capability.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3">{capability.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[#6B7280] leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Enterprise & Legacy */}
          <motion.div
            className="bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-3xl p-12 text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-center">Enterprise & Legacy Systems</h3>
            <p className="text-xl mb-8 text-center opacity-90">
              We specialize in connecting modern workflows with legacy enterprise software, on-premise systems, 
              custom internal applications, industry-specific tools, and proprietary databases.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { title: 'Legacy Enterprise Software', desc: 'Mainframe systems, AS/400, COBOL applications' },
                { title: 'On-Premise Systems', desc: 'Internal servers, private cloud deployments' },
                { title: 'Custom Applications', desc: 'Proprietary software built for your business' },
                { title: 'Industry-Specific Tools', desc: 'Specialized software for your sector' }
              ].map((item, index) => (
                <div key={item.title} className="text-center">
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm opacity-80">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold mb-4">
                If it has an API, webhook, database connection, or file interface - we can integrate with it.
              </p>
              <p className="opacity-90">
                Our technical team works with you to ensure seamless connectivity, regardless of how unique or specialized your requirements are.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-[#111827] mb-6">
              Ready to Connect Everything?
            </h2>
            <p className="text-lg text-[#6B7280] mb-8">
              Contact us to discuss your specific integration needs and discover how we can streamline your entire digital ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" asChild>
                <Link href="/contact">
                  Discuss Your Integrations
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;