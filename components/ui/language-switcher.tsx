'use client';

import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { Locale, locales, localeNames, isRtlLocale } from '@/lib/i18n';
import { cn } from '@/lib/utils';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export function LanguageSwitcher({ currentLocale, className }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (newLocale: Locale) => {
    // Set the cookie with proper settings
    document.cookie = `locale=${newLocale}; path=/; max-age=31536000; SameSite=Lax`; // 1 year
    
    // Update document direction for RTL languages
    if (isRtlLocale(newLocale)) {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = newLocale;
      document.body.classList.add('rtl');
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = newLocale;
      document.body.classList.remove('rtl');
    }
    
    // Force a hard reload to ensure all components re-render with new locale
    window.location.href = window.location.href;
    setIsOpen(false);
  };

  return (
    <div className={cn('relative', className)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
        aria-label="Select language"
      >
        <Globe className="h-4 w-4" />
        <span>{localeNames[currentLocale]}</span>
        <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-20">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={cn(
                  'w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors',
                  currentLocale === locale && 'bg-gray-50 text-accent-teal font-medium'
                )}
              >
                {localeNames[locale]}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}