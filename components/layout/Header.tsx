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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [currentLocale, setCurrentLocale] = useState<Locale>('en');
  const pathname = usePathname();
  const business = getBusinessConfig();

  // Initialize and update locale from cookie on client side
  useEffect(() => {
    const cookieLocale = getLocaleFromCookie();
    setCurrentLocale(cookieLocale);
    
    // Apply RTL if needed
    if (isRtlLocale(cookieLocale)) {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = cookieLocale;
      document.body.classList.add('rtl');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = cookieLocale;
      document.body.classList.remove('rtl');
    }
  }, []);

  const isHomePage = pathname === '/';
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: getTranslation(currentLocale, 'nav.solutions'), href: '/solutions' },
    { 
      name: getTranslation(currentLocale, 'nav.industries'), 
      href: '/industries',
      hasDropdown: true,
    },
    { name: getTranslation(currentLocale, 'nav.pricing'), href: '/pricing' },
    { name: getTranslation(currentLocale, 'nav.process'), href: '/process' },
    { name: getTranslation(currentLocale, 'nav.caseStudies'), href: '/case-studies' },
    { name: getTranslation(currentLocale, 'nav.blog'), href: '/blog' },
    { name: getTranslation(currentLocale, 'nav.about'), href: '/about' },
  ];

  const industries = [
    { name: 'Luxury Real Estate', href: '/industries/real-estate' },
    { name: 'Family Offices / Investment', href: '/industries/investment' },
    { name: 'Logistics & Freight', href: '/industries/logistics' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Legal & Corporate Services', href: '/industries/legal' },
    { name: 'Construction / EPC', href: '/industries/construction' },
    { name: 'B2B SaaS', href: '/industries/saas' },
    { name: 'Hospitality & Luxury Retail', href: '/industries/hospitality' },
  ];

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent',
      isRtlLocale(currentLocale) && 'rtl'
    )}>
      <div className={cn(
        "max-w-container mx-auto px-4 sm:px-6 lg:px-8",
        isRtlLocale(currentLocale) && "dir-rtl"
      )}>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-accent-teal to-accent-blue rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className={cn(
              'text-2xl font-bold font-sora transition-colors',
              isHomePage && !isScrolled ? 'text-white' : 'text-headline-slate'
            )}>
              {business.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className={cn(
            "hidden lg:flex items-center",
            isRtlLocale(currentLocale) ? "space-x-reverse space-x-8" : "space-x-8"
          )}>
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.hasDropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setIsIndustriesOpen(true)}
                    onMouseLeave={() => setIsIndustriesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap',
                        pathname === item.href || pathname.startsWith(item.href + '/')
                          ? 'text-accent-teal bg-accent-teal/10'
                          : isHomePage && !isScrolled 
                            ? 'text-gray-300 hover:text-white hover:bg-white/10'
                            : 'text-gray-600 hover:text-headline-slate hover:bg-gray-50'
                      )}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Link>
                    
                    <AnimatePresence>
                      {isIndustriesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className={cn(
                            "absolute top-full mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50",
                            isRtlLocale(currentLocale) ? "left-0" : "right-0"
                          )}
                        >
                          <div className="grid grid-cols-1 gap-1 p-2">
                            {industries.map((industry) => (
                              <Link
                                key={industry.name}
                                href={industry.href}
                                className={cn(
                                  'flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors whitespace-nowrap',
                                  pathname === industry.href
                                    ? 'text-accent-teal bg-accent-teal/10'
                                    : 'text-gray-600 hover:text-headline-slate hover:bg-gray-50'
                                )}
                              >
                                {industry.name}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      'px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap',
                      pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href + '/'))
                       ? 'text-accent-teal bg-accent-teal/10'
                       : isHomePage && !isScrolled 
                         ? 'text-gray-300 hover:text-white hover:bg-white/10'
                         : 'text-gray-600 hover:text-headline-slate hover:bg-gray-50'
                    )}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className={cn(
            "hidden lg:flex items-center",
            isRtlLocale(currentLocale) ? "space-x-reverse space-x-4 order-first" : "space-x-4"
          )}>
            <LanguageSwitcher currentLocale={currentLocale} />
            <Button size="lg" asChild>
              <Link href="/contact">
                {getTranslation(currentLocale, 'cta.bookDemo')}
              </Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={cn(
              'lg:hidden p-2 rounded-lg transition-colors',
             isHomePage && !isScrolled
               ? 'text-gray-300 hover:text-white hover:bg-white/10'
               : 'text-gray-600 hover:text-headline-slate hover:bg-gray-50'
            )}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-100 py-4"
            >
              <nav className="space-y-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        'block px-4 py-3 text-base font-medium rounded-lg transition-colors whitespace-nowrap',
                        pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href + '/'))
                         ? 'text-accent-teal bg-accent-teal/10'
                         : 'text-gray-600 hover:text-headline-slate hover:bg-gray-50'
                      )}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {industries.map((industry) => (
                          <Link
                            key={industry.name}
                            href={industry.href}
                            className={cn(
                              'block px-4 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap',
                              pathname === industry.href
                               ? 'text-accent-teal bg-accent-teal/10'
                               : 'text-gray-500 hover:text-headline-slate hover:bg-gray-50'
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
                <div className="pt-4 border-t border-gray-100 space-y-4">
                  <LanguageSwitcher currentLocale={currentLocale} className="px-4" />
                  <div className="px-4">
                    <Button size="lg" className="w-full" asChild>
                      <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                        {getTranslation(currentLocale, 'cta.bookDemo')}
                      </Link>
                    </Button>
                  </div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}