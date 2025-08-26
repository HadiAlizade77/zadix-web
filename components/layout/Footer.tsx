import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import { getBusinessConfig } from '@/lib/utils';

const Footer = () => {
  const business = getBusinessConfig();

  const navigation = {
    solutions: [
      { name: 'AI Automation', href: '/solutions' },
      { name: 'Process Optimization', href: '/solutions' },
      { name: 'System Integration', href: '/solutions' },
    ],
    industries: [
      { name: 'Real Estate', href: '/industries/real-estate' },
      { name: 'Investment', href: '/industries/investment' },
      { name: 'Logistics', href: '/industries/logistics' },
      { name: 'Healthcare', href: '/industries/healthcare' },
      { name: 'Legal', href: '/industries/legal' },
      { name: 'Construction', href: '/industries/construction' },
      { name: 'SaaS', href: '/industries/saas' },
      { name: 'Hospitality', href: '/industries/hospitality' },
    ],
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
    resources: [
      { name: 'Pricing', href: '/pricing' },
      { name: 'Process', href: '/process' },
      { name: 'Documentation', href: '#' },
      { name: 'Support', href: '/contact' },
    ],
  };

  return (
    <footer className="bg-[#0B1220] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-2xl font-bold">{business.name}</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We build agentic AI automations that eliminate repetitive ops. Production-ready systems 
              that ship real business outcomes in days, not months.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-[#00B3A4]" />
                <span className="text-gray-300">Dubai, UAE</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#00B3A4]" />
                <a href={`mailto:${business.email}`} className="text-gray-300 hover:text-[#00B3A4] transition-colors">
                  {business.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-[#00B3A4]" />
                <a href={business.calendlyUrl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-[#00B3A4] transition-colors">
                  Book a Demo
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-[#00B3A4] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Industries</h3>
            <ul className="space-y-3">
              {navigation.industries.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-[#00B3A4] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-[#00B3A4] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Resources</h3>
            <ul className="space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-[#00B3A4] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 {business.name}. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-[#00B3A4] text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-[#00B3A4] text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;