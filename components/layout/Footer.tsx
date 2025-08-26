import React from 'react';
import Link from 'next/link';
import { MapPin, Mail, Phone, MessageCircle } from 'lucide-react';
import { getBusinessConfig } from '@/lib/utils';
import { Locale, isRtlLocale } from '@/lib/i18n';
import { getTranslation } from '@/lib/translations';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { cn } from '@/lib/utils';

interface FooterProps {
  locale: Locale;
}

export default function Footer({ locale }: FooterProps) {
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
      { name: getTranslation(locale, 'nav.about'), href: '/about' },
      { name: getTranslation(locale, 'nav.caseStudies'), href: '/case-studies' },
      { name: getTranslation(locale, 'nav.blog'), href: '/blog' },
      { name: 'Careers', href: '/careers' },
    ],
    resources: [
      { name: getTranslation(locale, 'nav.pricing'), href: '/pricing' },
      { name: getTranslation(locale, 'nav.process'), href: '/process' },
      { name: getTranslation(locale, 'nav.security'), href: '/security' },
      { name: 'Documentation', href: '/docs' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
      { name: 'DPA', href: '/dpa' },
      { name: 'Cookie Policy', href: '/cookies' },
    ],
  };

  return (
    <footer className={cn(
      "bg-dark-ink text-white",
      isRtlLocale(locale) && "rtl"
    )}>
      <div className={cn(
        "max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16",
        isRtlLocale(locale) && "dir-rtl"
      )}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent-teal to-accent-blue rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">Z</span>
              </div>
              <span className="text-2xl font-bold font-sora">{business.name}</span>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              We build AI automations that cut manual work 50–80% and respond in under a minute. 
              Fixed scope, fixed timeline, 30-day value guarantee.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent-teal" />
                <span className="text-gray-300">{business.address.city}, {business.address.country}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent-teal" />
                <a href={`mailto:${business.email}`} className="text-gray-300 hover:text-accent-teal transition-colors">
                  {business.email}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent-teal" />
                <a href={`tel:${business.phone}`} className="text-gray-300 hover:text-accent-teal transition-colors">
                  {business.phone}
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-accent-teal" />
                <a href={`https://wa.me/${business.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-accent-teal transition-colors">
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold font-sora mb-6">{getTranslation(locale, 'nav.solutions')}</h3>
            <ul className="space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-accent-teal transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-lg font-semibold font-sora mb-6">{getTranslation(locale, 'nav.industries')}</h3>
            <ul className="space-y-3">
              {navigation.industries.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-accent-teal transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold font-sora mb-6">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-accent-teal transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="text-lg font-semibold font-sora mb-6">Resources</h3>
            <ul className="space-y-3 mb-6">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-300 hover:text-accent-teal transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold font-sora mb-3">Legal</h4>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-gray-400 hover:text-accent-teal transition-colors text-sm">
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
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <LanguageSwitcher currentLocale={locale} />
            <a 
              href={business.social.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-accent-teal transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}