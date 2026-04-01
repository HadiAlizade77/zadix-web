'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('cookie-consent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookie-consent', 'all');
    setIsVisible(false);
  };

  const handleRejectNonEssential = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setIsVisible(false);
  };

  const handleManage = () => {
    setShowSettings(true);
  };

  const handleSaveSettings = (settings: { essential: boolean; analytics: boolean }) => {
    localStorage.setItem('cookie-consent', JSON.stringify(settings));
    setIsVisible(false);
    setShowSettings(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-surface border-t border-border-warm shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {!showSettings ? (
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm text-muted leading-relaxed">
                  We use minimal cookies for essential site functions and anonymized analytics. 
                  <a href="/cookies" className="text-amber hover:underline ml-1">
                    Learn more
                  </a>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Button size="sm" variant="outline" onClick={handleManage}>
                  <Settings className="mr-2 h-4 w-4" />
                  Manage
                </Button>
                <Button size="sm" variant="outline" onClick={handleRejectNonEssential}>
                  Reject non‑essential
                </Button>
                <Button size="sm" onClick={handleAcceptAll}>
                  Accept all
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-cream">Cookie Preferences</h3>
                <button
                  onClick={() => setShowSettings(false)}
                  className="p-2 text-muted/60 hover:text-muted"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-cream">Essential Cookies</h4>
                    <p className="text-sm text-muted">Required for basic site functionality</p>
                  </div>
                  <input type="checkbox" checked disabled className="h-4 w-4" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-medium text-cream">Analytics Cookies</h4>
                    <p className="text-sm text-muted">Help us improve the site experience</p>
                  </div>
                  <input type="checkbox" className="h-4 w-4" id="analytics" />
                </div>
              </div>
              
              <div className="flex justify-end gap-3">
                <Button size="sm" variant="outline" onClick={() => handleSaveSettings({ essential: true, analytics: false })}>
                  Save Preferences
                </Button>
                <Button size="sm" onClick={() => handleSaveSettings({ essential: true, analytics: true })}>
                  Accept All
                </Button>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}