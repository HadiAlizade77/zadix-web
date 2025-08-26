'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getBusinessConfig } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const pathname = usePathname();
  const business = getBusinessConfig();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const industries = [
    { name: 'Real Estate', href: '/industries/real-estate' },
    { name: 'Investment', href: '/industries/investment' },
    { name: 'Logistics', href: '/industries/logistics' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Legal', href: '/industries/legal' },
    { name: 'Construction', href: '/industries/construction' },
    { name: 'SaaS', href: '/industries/saas' },
    { name: 'Hospitality', href: '/industries/hospitality' },
  ];

  const navigation = [
    { name: 'Solutions', href: '/solutions' },
    { 
      name: 'Industries', 
      href: '/industries',
      hasDropdown: true,
      items: industries
    },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Process', href: '/process' },
    { name: 'Case Studies', href: '/case-studies' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/about' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#00B3A4] to-[#2563EB] rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">Z</span>
            </div>
            <span className={`text-2xl font-bold transition-colors ${
              isScrolled ? 'text-[#111827]' : 'text-white'
            }`}>
              {business.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
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
                      className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                        pathname.startsWith(item.href)
                          ? 'text-[#00B3A4] bg-[#00B3A4]/10'
                          : isScrolled 
                            ? 'text-[#6B7280] hover:text-[#111827] hover:bg-gray-50'
                            : 'text-gray-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </Link>
                    
                    <AnimatePresence>
                      {isIndustriesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50"
                        >
                          {item.items?.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`flex items-center px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                                pathname.startsWith(subItem.href)
                                  ? 'text-[#00B3A4] bg-[#00B3A4]/10'
                                  : 'text-[#6B7280] hover:text-[#111827] hover:bg-gray-50'
                              }`}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      pathname === item.href
                        ? 'text-[#00B3A4] bg-[#00B3A4]/10'
                        : isScrolled 
                          ? 'text-[#6B7280] hover:text-[#111827] hover:bg-gray-50'
                          : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button size="lg" asChild>
              <Link href="/contact">Book a Demo</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-[#6B7280] hover:text-[#111827] hover:bg-gray-50'
                : 'text-gray-300 hover:text-white hover:bg-white/10'
            }`}
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
                      className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                        pathname === item.href
                          ? 'text-[#00B3A4] bg-[#00B3A4]/10'
                          : 'text-[#6B7280] hover:text-[#111827] hover:bg-gray-50'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <div className="ml-4 mt-2 space-y-1">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                              pathname.startsWith(subItem.href)
                                ? 'text-[#00B3A4] bg-[#00B3A4]/10'
                                : 'text-[#6B7280] hover:text-[#111827] hover:bg-gray-50'
                            }`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="pt-4 border-t border-gray-100">
                  <Button size="lg" className="w-full" asChild>
                    <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                      Book a Demo
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
};

export default Header;