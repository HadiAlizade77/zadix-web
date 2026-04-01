'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from '@/components/ui/language-switcher';
import { getBusinessConfig } from '@/lib/utils';
import { Locale, isRtlLocale } from '@/lib/i18n';
import { getTranslation } from '@/lib/translations';
import { cn, getLocaleFromCookie } from '@/lib/utils';

interface HeaderProps {
  locale: Locale;
}

export default function Header({ locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen]       = useState(false);
  const [isScrolled, setIsScrolled]       = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>('en');
  const pathname  = usePathname();
  const business  = getBusinessConfig();

  useEffect(() => {
    const cookieLocale = getLocaleFromCookie();
    setCurrentLocale(cookieLocale);
    if (isRtlLocale(cookieLocale)) {
      document.documentElement.dir  = 'rtl';
      document.documentElement.lang = cookieLocale;
      document.body.classList.add('rtl');
    } else {
      document.documentElement.dir  = 'ltr';
      document.documentElement.lang = cookieLocale;
      document.body.classList.remove('rtl');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: getTranslation(currentLocale, 'nav.solutions'),   href: '/solutions' },
    { name: getTranslation(currentLocale, 'nav.industries'),  href: '/industries', hasDropdown: true },
    { name: getTranslation(currentLocale, 'nav.pricing'),     href: '/pricing' },
    { name: getTranslation(currentLocale, 'nav.process'),     href: '/process' },
    { name: getTranslation(currentLocale, 'nav.caseStudies'), href: '/case-studies' },
    { name: getTranslation(currentLocale, 'nav.blog'),        href: '/blog' },
    { name: getTranslation(currentLocale, 'nav.about'),       href: '/about' },
  ];

  const industries = [
    { name: 'Luxury Real Estate',          href: '/industries/real-estate' },
    { name: 'Family Offices / Investment', href: '/industries/investment' },
    { name: 'Logistics & Freight',         href: '/industries/logistics' },
    { name: 'Healthcare',                  href: '/industries/healthcare' },
    { name: 'Legal & Corporate Services',  href: '/industries/legal' },
    { name: 'Construction / EPC',          href: '/industries/construction' },
    { name: 'B2B SaaS',                   href: '/industries/saas' },
    { name: 'Hospitality & Luxury Retail', href: '/industries/hospitality' },
  ];

  const navLinkClass = (href: string) => cn(
    'px-3 py-2 text-sm font-dm-sans font-medium transition-colors duration-200 whitespace-nowrap',
    pathname === href || (href !== '/' && pathname.startsWith(href + '/'))
      ? 'text-amber'
      : 'text-muted hover:text-cream'
  );

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-ink/95 backdrop-blur-md border-b border-border-warm'
        : 'bg-ink/80 backdrop-blur-sm border-b border-transparent',
      isRtlLocale(currentLocale) && 'rtl'
    )}>
      <div className={cn(
        'max-w-container mx-auto px-4 sm:px-6 lg:px-8',
        isRtlLocale(currentLocale) && 'dir-rtl'
      )}>
        <div className="flex items-center justify-between h-18 py-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 border border-amber/60 rounded-lg flex items-center justify-center group-hover:border-amber transition-colors duration-200">
              <span className="font-cormorant font-medium text-amber text-xl leading-none">Z</span>
            </div>
            <span className="font-cormorant font-medium text-cream text-xl tracking-wide">
              {business.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={cn(
            'hidden lg:flex items-center gap-1',
            isRtlLocale(currentLocale) ? 'space-x-reverse' : ''
          )}>
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    onMouseEnter={() => setIsIndustriesOpen(true)}
                    onMouseLeave={() => setIsIndustriesOpen(false)}
                  >
                    <Link href={item.href} className={cn(navLinkClass(item.href), 'flex items-center gap-1')}>
                      {item.name}
                      <ChevronDown className="h-3 w-3" />
                    </Link>
                    <AnimatePresence>
                      {isIndustriesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className={cn(
                            'absolute top-full mt-1 w-72 bg-surface border border-border-warm rounded-xl shadow-2xl shadow-black/30 shadow-black/50 py-2 z-50',
                            isRtlLocale(currentLocale) ? 'left-0' : 'right-0'
                          )}
                        >
                          {industries.map((industry) => (
                            <Link
                              key={industry.name}
                              href={industry.href}
                              className={cn(
                                'block px-4 py-2.5 text-sm font-dm-sans transition-colors',
                                pathname === industry.href
                                  ? 'text-amber bg-amber/5'
                                  : 'text-muted hover:text-cream hover:bg-surface-2'
                              )}
                            >
                              {industry.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link href={item.href} className={navLinkClass(item.href)}>
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className={cn(
            'hidden lg:flex items-center gap-4',
            isRtlLocale(currentLocale) ? 'order-first' : ''
          )}>
            <LanguageSwitcher currentLocale={currentLocale} />
            <a
              href="https://wa.me/+447418635600"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-dm-sans text-muted hover:text-cream transition-colors"
            >
              WhatsApp
            </a>
            <Button size="md" asChild>
              <Link href="/contact">Book a demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-muted hover:text-cream transition-colors"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden bg-surface border-t border-border-warm py-4 overflow-hidden"
            >
              <nav className="space-y-1">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-4 py-3 text-base font-dm-sans font-medium rounded-lg transition-colors',
                        pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href + '/'))
                          ? 'text-amber'
                          : 'text-muted hover:text-cream hover:bg-surface-2'
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 space-y-1 mt-1">
                        {industries.map((industry) => (
                          <Link
                            key={industry.name}
                            href={industry.href}
                            className={cn(
                              'block px-4 py-2 text-sm font-dm-sans rounded-lg transition-colors',
                              pathname === industry.href
                                ? 'text-amber'
                                : 'text-muted hover:text-cream hover:bg-surface-2'
                            )}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {industry.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-border-warm space-y-3 px-4">
                  <LanguageSwitcher currentLocale={currentLocale} />
                  <Button size="lg" className="w-full" asChild>
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      {getTranslation(currentLocale, 'cta.bookDemo')}
                    </Link>
                  </Button>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
