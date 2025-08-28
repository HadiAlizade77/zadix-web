'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Upload, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    phone: '',
    industry: '',
    systems: [] as string[],
    sensitivity: '',
    volume: '',
    deadline: '',
    budget: '',
    message: '',
    files: null as FileList | null,
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'systems') {
        const systemValue = value;
        setFormData(prev => ({
          ...prev,
          systems: checked 
            ? [...prev.systems, systemValue]
            : prev.systems.filter(s => s !== systemValue)
        }));
      } else {
        setFormData(prev => ({ ...prev, [name]: checked }));
      }
    } else if (type === 'file') {
      const files = (e.target as HTMLInputElement).files;
      setFormData(prev => ({ ...prev, files }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: `${formData.name} (via Zadix Contact Form)`,
        user_name: formData.name,
        user_email: formData.email,
        reply_to: formData.email,
        company: formData.company,
        role: formData.role,
        phone: formData.phone,
        industry: formData.industry,
        systems: formData.systems.join(', '),
        sensitivity: formData.sensitivity,
        volume: formData.volume,
        deadline: formData.deadline,
        budget: formData.budget,
        message: formData.message,
        to_name: 'Zadix Team',
        to_email: 'admin@zadix.ai'
      };

      // Send email via EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      // Show success modal
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        company: '',
        role: '',
        phone: '',
        industry: '',
        systems: [],
        sensitivity: '',
        volume: '',
        deadline: '',
        budget: '',
        message: '',
        files: null,
        consent: false
      });

    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError('Failed to send message. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const industries = [
    'Real Estate',
    'Investment / Family Office',
    'Logistics & Freight',
    'Healthcare',
    'Legal & Corporate Services',
    'Construction / EPC',
    'B2B SaaS',
    'Hospitality & Luxury Retail',
    'Other'
  ];

  const systemOptions = [
    'CRM (Salesforce, HubSpot, etc.)',
    'ERP (SAP, NetSuite, etc.)',
    'Helpdesk (Zendesk, ServiceNow, etc.)',
    'Databases (MySQL, PostgreSQL, etc.)',
    'Storage (SharePoint, Google Drive, etc.)',
    'Email Systems',
    'Other'
  ];

  if (showSuccess) {
    return (
      <div className="min-h-screen pt-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="h-10 w-10 text-green-600" />
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
              Thanks—pick a demo slot
            </h1>
            
            <p className="text-xl text-[#6B7280] mb-12 max-w-2xl mx-auto">
              We&apos;ve received your details. Choose a time for a quick walkthrough and scoping call.
            </p>

            {/* Calendly Embed Placeholder */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 mb-8">
              <div className="w-full h-96 bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="text-center">
                  <MessageCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Calendly embed will appear here</p>
                  <p className="text-sm text-gray-400 mt-2">Integration pending</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Alternative */}
            <div className="bg-gradient-to-r from-[#00B3A4] to-[#2563EB] rounded-2xl p-6 text-white">
              <div className="flex items-center justify-center mb-4">
                <MessageCircle className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold">Prefer WhatsApp?</h3>
              </div>
              <p className="mb-6">Chat with us now</p>
              <Button size="lg" variant="secondary" asChild>
                <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer">
                  Chat with us now
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

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
              <MessageCircle className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Book a Demo
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Tell us about your workflow challenge and we&apos;ll show you exactly how our automation would handle it—with real data and your specific business rules.
            </p>
          </motion.div>
        </div>
      </section>

  {/* Alternative Contact Methods */}
      <section className="pt-16 pb-8 bg-[#F8FAFC]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-[#111827] mb-8">
            Prefer to chat directly?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-[#00B3A4] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-[#111827] mb-2">WhatsApp</h4>
                <p className="text-[#6B7280] mb-4">Quick questions and instant responses</p>
                <Button asChild>
                  <a href="https://wa.me/0000000000" target="_blank" rel="noopener noreferrer">
                    Chat Now
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 text-center">
                <MessageCircle className="h-12 w-12 text-[#2563EB] mx-auto mb-4" />
                <h4 className="text-lg font-bold text-[#111827] mb-2">Schedule a Call</h4>
                <p className="text-[#6B7280] mb-4">Book a time that works for you</p>
                <Button variant="outline" asChild>
                  <a href="https://calendly.com/admin-zadix/meeting-with-zadix-ai" target="_blank" rel="noopener noreferrer">
                    View Calendar
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl mb-4">Tell us about your workflow</CardTitle>
              <p className="text-[#6B7280] text-lg">
                The more details you provide, the better we can tailor the demo to your specific needs
              </p>
            </CardHeader>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#111827] mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#111827] mb-2">
                      Work Email *
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
                      Role *
                    </label>
                    <input
                      type="text"
                      id="role"
                      name="role"
                      required
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                      placeholder="Operations Manager"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#111827] mb-2">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                      placeholder="+1 (555) 123-4567"
                    />
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
                      {industries.map((industry) => (
                        <option key={industry} value={industry}>
                          {industry}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Systems in Use */}
                <div>
                  <label className="block text-sm font-medium text-[#111827] mb-3">
                    Systems in use (CRM/ERP/Helpdesk/DB) *
                  </label>
                  <p className="text-sm text-[#6B7280] mb-3">Choose the tools you use today</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {systemOptions.map((system) => (
                      <label key={system} className="flex items-center">
                        <input
                          type="checkbox"
                          name="systems"
                          value={system}
                          checked={formData.systems.includes(system)}
                          onChange={handleChange}
                          className="mr-3 h-4 w-4 text-[#00B3A4] focus:ring-[#00B3A4] border-gray-300 rounded"
                        />
                        <span className="text-[#6B7280]">{system}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Process Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="volume" className="block text-sm font-medium text-[#111827] mb-2">
                      Process volume *
                    </label>
                    <input
                      type="text"
                      id="volume"
                      name="volume"
                      required
                      value={formData.volume}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                      placeholder="e.g., 120 RFQs/week, 300 invoices/month"
                    />
                    <p className="text-xs text-[#6B7280] mt-1">Estimate your daily/weekly workload</p>
                  </div>
                  <div>
                    <label htmlFor="sensitivity" className="block text-sm font-medium text-[#111827] mb-2">
                      Contains PII/PHI? *
                    </label>
                    <select
                      id="sensitivity"
                      name="sensitivity"
                      required
                      value={formData.sensitivity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                    >
                      <option value="">Select sensitivity level</option>
                      <option value="No">No sensitive data</option>
                      <option value="PII">Contains PII</option>
                      <option value="PHI">Contains PHI</option>
                      <option value="Both">Contains both PII and PHI</option>
                    </select>
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
                      placeholder="Q2 2024, End of March, ASAP"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-[#111827] mb-2">
                      Budget bracket
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                    >
                      <option value="">Helps us recommend the right package</option>
                      <option value="5-10k">$5k - $10k</option>
                      <option value="10-20k">$10k - $20k</option>
                      <option value="20-50k">$20k - $50k</option>
                      <option value="50k+">$50k+</option>
                    </select>
                    <p className="text-xs text-[#6B7280] mt-1">Helps us recommend the right package</p>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label htmlFor="files" className="block text-sm font-medium text-[#111827] mb-2">
                    Upload sample docs/emails (optional)
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-[#00B3A4] transition-colors opacity-50">
                    <div className="text-center">
                      <div className="text-gray-400 mb-2">📎</div>
                      <span className="text-gray-400 text-sm">File upload coming soon</span>
                    </div>
                    <p className="text-xs text-[#6B7280] mt-2">
                      PDF, DOC, TXT, CSV, XLSX up to 10MB each
                    </p>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[#111827] mb-2">
                      Describe your workflow challenge
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00B3A4] focus:border-transparent"
                      placeholder="Tell us about the manual process you'd like to automate..."
                    />
                  </div>
                </div>

                {/* Consent */}
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    name="consent"
                    required
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 text-[#00B3A4] focus:ring-[#00B3A4] border-gray-300 rounded"
                  />
                  <label htmlFor="consent" className="ml-3 text-sm text-[#6B7280]">
                    I agree to the <a href="/privacy" className="text-[#00B3A4] hover:underline">Privacy Policy</a> and <a href="/dpa" className="text-[#00B3A4] hover:underline">Data Processing Addendum (DPA)</a> *
                  </label>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                  <Button 
                    type="submit" 
                    size="xl" 
                    disabled={isSubmitting}
                    className="w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send & Pick a Demo Slot'
                    )}
                  </Button>
                  
                  {submitError && (
                    <p className="text-red-600 text-sm mt-4">{submitError}</p>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

    
    </div>
  );
};

export default Contact;