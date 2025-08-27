'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, MapPin, Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getBusinessConfig } from '@/lib/utils';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    industry: '',
    systems: '',
    sensitivity: '',
    volume: '',
    deadline: '',
    budget: '',
    message: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const business = getBusinessConfig();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Prepare template parameters
      const templateParams = {
        from_name: `${formData.name} (via Zadix Contact Form)`,
        from_email: formData.email,
        reply_to: formData.email,
        user_name: formData.name,
        user_email: formData.email,
        company: formData.company,
        role: formData.role,
        phone: formData.phone,
        industry: formData.industry,
        systems: formData.systems,
        sensitivity: formData.sensitivity,
        volume: formData.volume,
        deadline: formData.deadline,
        budget: formData.budget,
        message: formData.message,
        to_name: 'Zadix Request',
        to_email: 'alizadehadi08@gmail.com' // Replace with your actual email
      };

      // Send email using EmailJS
      await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      // Show success message
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        phone: '',
        industry: '',
        systems: '',
        sensitivity: '',
        volume: '',
        deadline: '',
        budget: '',
        message: '',
        consent: false
      });

    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: business.email,
      link: `mailto:${business.email}`
    },
    {
      icon: MessageCircle,
      title: 'Schedule a Call',
      value: 'Book a 30-min demo',
      link: business.calendlyUrl
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Dubai, UAE',
      link: null
    }
  ];

  const useCases = [
    'Real Estate',
    'Investment/Family Office',
    'Logistics & Freight',
    'Healthcare',
    'Legal & Corporate',
    'Construction/EPC',
    'B2B SaaS',
    'Hospitality',
    'Other'
  ];

  const budgetRanges = [
    '5-10k',
    '10-20k', 
    '20-50k',
    '50k+',
    'Not sure yet'
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-lg p-8 max-w-md w-full text-center"
          >
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for reaching out. We&apos;ll review your requirements and get back to you within 24 hours to schedule your personalized demo.
            </p>
            <Button 
              onClick={() => setShowSuccess(false)}
              className="w-full"
            >
              Close
            </Button>
          </motion.div>
        </div>
      )}

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
              Let's Build Your{' '}
              <span className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] bg-clip-text text-transparent">
                Demo
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Tell us about your workflow challenge and we'll show you exactly how our automation would handle it—with real data and your specific business rules.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <Card className="shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl mb-4">Get Started</CardTitle>
                    <p className="text-[#6B7280]">
                      Share your workflow details and we'll show you exactly how the automation would work—with your data and business rules.
                    </p>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-[#111827] mb-2">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                            placeholder="John Smith"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-[#111827] mb-2">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-[#111827] mb-2">
                            Company *
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                            placeholder="Acme Corp"
                          />
                        </div>
                        <div>
                          <label htmlFor="role" className="block text-sm font-medium text-[#111827] mb-2">
                            Phone / WhatsApp
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                            placeholder="+971 50 123 4567"
                          />
                        </div>
                        <div>
                          <label htmlFor="role" className="block text-sm font-medium text-[#111827] mb-2">
                            Your Role
                          </label>
                          <input
                            type="text"
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                            placeholder="Operations Manager"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="industry" className="block text-sm font-medium text-[#111827] mb-2">
                          Industry *
                        </label>
                        <select
                          id="industry"
                          name="industry"
                          required
                          value={formData.industry}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                        >
                          <option value="">Select your industry</option>
                          <option value="real-estate">Real Estate</option>
                          <option value="investment">Investment/Family Office</option>
                          <option value="logistics">Logistics & Freight</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="legal">Legal & Corporate</option>
                          <option value="construction">Construction/EPC</option>
                          <option value="saas">B2B SaaS</option>
                          <option value="hospitality">Hospitality</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="systems" className="block text-sm font-medium text-[#111827] mb-2">
                          Systems in use *
                        </label>
                        <select
                          id="systems"
                          name="systems"
                          required
                          value={formData.systems}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                        >
                          <option value="">Select the tools you use today</option>
                          <option value="crm">CRM (Salesforce, HubSpot, etc.)</option>
                          <option value="erp">ERP (SAP, NetSuite, etc.)</option>
                          <option value="helpdesk">Helpdesk (Zendesk, ServiceNow, etc.)</option>
                          <option value="databases">Databases (PostgreSQL, MySQL, etc.)</option>
                          <option value="storage">Storage (SharePoint, Google Drive, etc.)</option>
                          <option value="multiple">Multiple systems</option>
                          <option value="other">Other</option>
                        </select>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="sensitivity" className="block text-sm font-medium text-[#111827] mb-2">
                            Contains PII/PHI?
                          </label>
                          <select
                            id="sensitivity"
                            name="sensitivity"
                            value={formData.sensitivity}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                          >
                            <option value="">Select</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                            <option value="unsure">Not sure</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="volume" className="block text-sm font-medium text-[#111827] mb-2">
                            Daily/weekly volume
                          </label>
                          <input
                            type="text"
                            id="volume"
                            name="volume"
                            value={formData.volume}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                            placeholder="e.g., 120 RFQs/week, 300 invoices/month, 50 tickets/day"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="deadline" className="block text-sm font-medium text-[#111827] mb-2">
                            Target deadline
                          </label>
                          <input
                            type="text"
                            id="deadline"
                            name="deadline"
                            value={formData.deadline}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                            placeholder="e.g., Q1 2024, ASAP, 3 months"
                          />
                        </div>
                        <div>
                          <label htmlFor="budget" className="block text-sm font-medium text-[#111827] mb-2">
                            Budget bracket (helps us recommend the right package)
                          </label>
                          <select
                            id="budget"
                            name="budget"
                            value={formData.budget}
                            onChange={handleChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                          >
                            <option value="">Select budget range</option>
                            <option value="5-10k">5–10k</option>
                            <option value="10-20k">10–20k</option>
                            <option value="20-50k">20–50k</option>
                            <option value="50k+">50k+</option>
                            <option value="not-sure">Not sure yet</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-[#111827] mb-2">
                          Describe your workflow challenge *
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                          placeholder="Share a few sample emails/PDFs and the systems you use. We'll show exactly how the automation would run."
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-[#111827] mb-2">
                          Upload sample docs/emails (optional)
                        </label>
                        <input
                          type="file"
                          multiple
                          accept=".pdf,.doc,.docx,.txt,.eml"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                        />
                        <p className="text-xs text-[#6B7280] mt-1">PDF, DOC, TXT, EML files up to 10MB each</p>
                      </div>

                      <div className="flex items-start">
                        <input
                          type="checkbox"
                          id="consent"
                          name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className="mt-1 mr-3"
                          required
                        />
                        <label htmlFor="consent" className="text-sm text-[#6B7280]">
                          I agree to the <a href="/privacy" className="text-[#00B3A4] hover:underline">Privacy Policy</a> and <a href="/dpa" className="text-[#00B3A4] hover:underline">Data Processing Addendum (DPA)</a> *
                        </label>
                      </div>

                      {submitError && (
                        <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                          <p className="text-red-600 text-sm">{submitError}</p>
                        </div>
                      )}

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send & Pick a Demo Slot
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-2xl font-bold text-[#111827] mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-lg flex items-center justify-center mr-4">
                        <info.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#111827] mb-1">{info.title}</h4>
                        {info.link ? (
                          <a
                            href={info.link}
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className="text-[#00B3A4] hover:text-[#2563EB] transition-colors"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <span className="text-[#6B7280]">{info.value}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="bg-gradient-to-br from-[#00B3A4] to-[#2563EB] text-white">
                  <CardContent className="p-6">
                    <CheckCircle className="h-12 w-12 mb-4" />
                    <h4 className="text-xl font-bold mb-2">What to Expect</h4>
                    <ul className="space-y-2 text-sm opacity-90">
                      <li>• 20-minute personalized demo</li>
                      <li>• See your automation in action</li>
                      <li>• Fixed-price proposal</li>
                      <li>• No sales pitch, just solutions</li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;