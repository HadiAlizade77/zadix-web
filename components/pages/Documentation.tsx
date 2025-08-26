'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Book, Code, Webhook, Database, Shield, Zap, ChevronRight, Copy, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Documentation = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const sections = [
    {
      icon: Code,
      title: 'API Reference',
      description: 'Complete REST API documentation with examples',
      items: [
        'Authentication & API Keys',
        'Workflow Management',
        'Data Processing Endpoints',
        'Status & Monitoring APIs'
      ]
    },
    {
      icon: Webhook,
      title: 'Webhooks',
      description: 'Real-time notifications and event handling',
      items: [
        'Webhook Configuration',
        'Event Types & Payloads',
        'Security & Verification',
        'Retry Mechanisms'
      ]
    },
    {
      icon: Database,
      title: 'System Integration',
      description: 'Connect with your existing tools and databases',
      items: [
        'CRM Integrations (Salesforce, HubSpot)',
        'ERP Systems (SAP, NetSuite)',
        'Database Connections',
        'Custom API Integrations'
      ]
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Security best practices and compliance guides',
      items: [
        'Authentication Methods',
        'Data Encryption',
        'Audit Logging',
        'GDPR Compliance'
      ]
    },
    {
      icon: Zap,
      title: 'Workflow Configuration',
      description: 'Design and configure automation workflows',
      items: [
        'Workflow Builder',
        'Trigger Configuration',
        'Action Definitions',
        'Error Handling'
      ]
    }
  ];

  const quickStart = {
    title: 'Quick Start Guide',
    steps: [
      {
        title: '1. Get Your API Key',
        description: 'Contact our team to receive your production API credentials',
        code: `# Your API key will be provided after project delivery
API_KEY="zx_live_your_api_key_here"`
      },
      {
        title: '2. Make Your First Request',
        description: 'Test the connection with a simple status check',
        code: `curl -X GET "https://api.zadix.ai/v1/status" \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json"`
      },
      {
        title: '3. Trigger a Workflow',
        description: 'Start an automation workflow with your data',
        code: `curl -X POST "https://api.zadix.ai/v1/workflows/trigger" \\
  -H "Authorization: Bearer $API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "workflow_id": "your_workflow_id",
    "data": {
      "email": "example@company.com",
      "document_url": "https://example.com/doc.pdf"
    }
  }'`
      },
      {
        title: '4. Check Results',
        description: 'Monitor workflow execution and get results',
        code: `curl -X GET "https://api.zadix.ai/v1/workflows/{execution_id}" \\
  -H "Authorization: Bearer $API_KEY"`
      }
    ]
  };

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

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
              <Book className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Developer{' '}
              <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
                Documentation
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Complete guides, API references, and integration examples for building with Zadix AI automation systems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Start */}
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
              {quickStart.title}
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Get up and running with Zadix APIs in minutes
            </p>
          </motion.div>

          <div className="space-y-8">
            {quickStart.steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2">
                      <div className="p-8">
                        <h3 className="text-2xl font-bold text-[#111827] mb-4">{step.title}</h3>
                        <p className="text-[#6B7280] leading-relaxed">{step.description}</p>
                      </div>
                      <div className="bg-[#1E293B] p-8 relative">
                        <button
                          onClick={() => copyToClipboard(step.code, `step-${index}`)}
                          className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                        >
                          {copiedCode === `step-${index}` ? (
                            <Check className="h-4 w-4 text-green-400" />
                          ) : (
                            <Copy className="h-4 w-4 text-gray-300" />
                          )}
                        </button>
                        <pre className="text-gray-300 text-sm overflow-x-auto">
                          <code>{step.code}</code>
                        </pre>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
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
              Documentation Sections
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Comprehensive guides for every aspect of integration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <section.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-3 group-hover:text-[#00B3A4] transition-colors">
                      {section.title}
                    </CardTitle>
                    <p className="text-[#6B7280] leading-relaxed">{section.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, idx) => (
                        <li key={idx} className="flex items-center text-[#6B7280]">
                          <ChevronRight className="h-4 w-4 mr-2 text-[#00B3A4]" />
                          {item}
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

      {/* API Examples */}
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
              Common Integration Patterns
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Real-world examples of how to integrate Zadix with your systems
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Webhook Handler Example</CardTitle>
                  <p className="text-[#6B7280]">Process incoming webhook notifications</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-[#1E293B] rounded-lg p-6 relative">
                    <button
                      onClick={() => copyToClipboard(`app.post('/webhook', (req, res) => {
  const signature = req.headers['x-zadix-signature'];
  const payload = req.body;
  
  // Verify webhook signature
  if (!verifySignature(payload, signature)) {
    return res.status(401).send('Unauthorized');
  }
  
  // Process the event
  switch (payload.event_type) {
    case 'workflow.completed':
      handleWorkflowComplete(payload.data);
      break;
    case 'workflow.failed':
      handleWorkflowError(payload.data);
      break;
  }
  
  res.status(200).send('OK');
});`, 'webhook')}
                      className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      {copiedCode === 'webhook' ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4 text-gray-300" />
                      )}
                    </button>
                    <pre className="text-gray-300 text-sm overflow-x-auto">
                      <code>{`app.post('/webhook', (req, res) => {
  const signature = req.headers['x-zadix-signature'];
  const payload = req.body;
  
  // Verify webhook signature
  if (!verifySignature(payload, signature)) {
    return res.status(401).send('Unauthorized');
  }
  
  // Process the event
  switch (payload.event_type) {
    case 'workflow.completed':
      handleWorkflowComplete(payload.data);
      break;
    case 'workflow.failed':
      handleWorkflowError(payload.data);
      break;
  }
  
  res.status(200).send('OK');
});`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Batch Processing</CardTitle>
                  <p className="text-[#6B7280]">Process multiple documents at once</p>
                </CardHeader>
                <CardContent>
                  <div className="bg-[#1E293B] rounded-lg p-6 relative">
                    <button
                      onClick={() => copyToClipboard(`const processBatch = async (documents) => {
  const batchId = await fetch('/api/batch', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${API_KEY}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      workflow_id: 'document-processor',
      documents: documents.map(doc => ({
        url: doc.url,
        metadata: doc.metadata
      }))
    })
  });
  
  // Poll for completion
  const result = await pollBatchStatus(batchId);
  return result;
};`, 'batch')}
                      className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
                    >
                      {copiedCode === 'batch' ? (
                        <Check className="h-4 w-4 text-green-400" />
                      ) : (
                        <Copy className="h-4 w-4 text-gray-300" />
                      )}
                    </button>
                    <pre className="text-gray-300 text-sm overflow-x-auto">
                      <code>{`const processBatch = async (documents) => {
  const batchId = await fetch('/api/batch', {
    method: 'POST',
    headers: {
      'Authorization': \`Bearer \${API_KEY}\`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      workflow_id: 'document-processor',
      documents: documents.map(doc => ({
        url: doc.url,
        metadata: doc.metadata
      }))
    })
  });
  
  // Poll for completion
  const result = await pollBatchStatus(batchId);
  return result;
};`}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="py-20 bg-gradient-to-r from-[#0B1220] via-[#0F1629] to-[#0B1220]">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Need Help with Integration?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Our engineering team provides hands-on support for all integrations and custom requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="secondary" asChild>
                <a href="mailto:support@zadix.ai?subject=Integration Support">
                  Contact Support
                </a>
              </Button>
              <Button size="xl" variant="outline" className="border-white text-white hover:bg-white hover:text-[#0B1220]" asChild>
                <a href="mailto:engineering@zadix.ai?subject=Technical Discussion">
                  Talk to Engineering
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;