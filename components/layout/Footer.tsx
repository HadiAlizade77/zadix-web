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
      { name: 'AI Automation',         href: '/solutions' },
      { name: 'Process Optimization',  href: '/solutions' },
      { name: 'System Integration',    href: '/solutions' },
    ],
    industries: [
      { name: 'Real Estate',   href: '/industries/real-estate' },
      { name: 'Investment',    href: '/industries/investment' },
      { name: 'Logistics',     href: '/industries/logistics' },
      { name: 'Healthcare',    href: '/industries/healthcare' },
      { name: 'Legal',         href: '/industries/legal' },
      { name: 'Construction',  href: '/industries/construction' },
      { name: 'SaaS',          href: '/industries/saas' },
      { name: 'Hospitality',   href: '/industries/hospitality' },
    ],
    company: [
      { name: getTranslation(locale, 'nav.about'),        href: '/about' },
      { name: getTranslation(locale, 'nav.caseStudies'),  href: '/case-studies' },
      { name: getTranslation(locale, 'nav.blog'),         href: '/blog' },
      { name: 'Careers',                                  href: '/careers' },
    ],
    resources: [
      { name: getTranslation(locale, 'nav.pricing'),   href: '/pricing' },
      { name: getTranslation(locale, 'nav.process'),   href: '/process' },
      { name: getTranslation(locale, 'nav.security'),  href: '/security' },
      { name: 'Documentation',                          href: '/docs' },
    ],
    legal: [
      { name: 'Privacy Policy',     href: '/privacy' },
      { name: 'Terms of Service',   href: '/terms' },
      { name: 'DPA',                href: '/dpa' },
      { name: 'Cookie Policy',      href: '/cookies' },
    ],
  };

  const linkClass = 'text-muted hover:text-amber transition-colors duration-200 font-dm-sans text-sm';

  return (
    <footer className={cn('bg-ink border-t border-border-warm', isRtlLocale(locale) && 'rtl')}>
      <div className={cn('max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-16', isRtlLocale(locale) && 'dir-rtl')}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">

          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6 group">
              <div className="w-9 h-9 border border-amber/60 rounded-lg flex items-center justify-center group-hover:border-amber transition-colors duration-200">
                <span className="font-cormorant font-medium text-amber text-xl leading-none">Z</span>
              </div>
              <span className="font-cormorant font-medium text-cream text-xl">{business.name}</span>
            </Link>
            <p className="text-muted font-dm-sans text-sm mb-6 leading-relaxed max-w-xs">
              We build AI automations that cut manual work 50–80% and respond in under a minute. Fixed scope, fixed timeline, 30-day value guarantee.
            </p>
            <div className="space-y-3">
              {[
                { icon: MapPin,       text: '71-75 Shelton Street, London, WC2H 9JQ, United Kingdom' },
                { icon: Mail,        text: business.email,   href: `mailto:${business.email}` },
                { icon: Phone,       text: business.phone,   href: `tel:${business.phone}` },
                { icon: MessageCircle, text: 'WhatsApp',     href: 'https://wa.me/+447418635600', external: true },
              ].map(({ icon: Icon, text, href, external }) => (
                <div key={text} className="flex items-start gap-3">
                  <Icon className="h-4 w-4 text-amber mt-0.5 flex-shrink-0" />
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className={linkClass}
                    >
                      {text}
                    </a>
                  ) : (
                    <span className="text-muted font-dm-sans text-sm">{text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-cormorant font-medium text-cream text-lg mb-5">
              {getTranslation(locale, 'nav.solutions')}
            </h3>
            <ul className="space-y-3">
              {navigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={linkClass}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="font-cormorant font-medium text-cream text-lg mb-5">
              {getTranslation(locale, 'nav.industries')}
            </h3>
            <ul className="space-y-3">
              {navigation.industries.slice(0, 6).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={linkClass}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-cormorant font-medium text-cream text-lg mb-5">Company</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={linkClass}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Legal */}
          <div>
            <h3 className="font-cormorant font-medium text-cream text-lg mb-5">Resources</h3>
            <ul className="space-y-3 mb-6">
              {navigation.resources.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={linkClass}>{item.name}</Link>
                </li>
              ))}
            </ul>
            <h4 className="font-dm-sans text-xs font-medium text-muted/60 tracking-widest uppercase mb-3">Legal</h4>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-muted/50 hover:text-amber transition-colors duration-200 font-dm-sans text-xs">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border-warm mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted/50 font-dm-sans text-xs">
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <LanguageSwitcher currentLocale={locale} />
            <a
              href={business.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted/50 hover:text-amber transition-colors duration-200 font-dm-sans text-xs"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
