'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Global state for video modal
let globalModalState = {
  isOpen: false,
  setIsOpen: (open: boolean) => {
    globalModalState.isOpen = open;
    // Trigger re-render for all components using this state
    globalModalState.listeners.forEach(listener => listener());
  },
  listeners: [] as (() => void)[]
};

interface VideoModalProps {
  videoUrl?: string;
  title?: string;
}

export function VideoModal({ videoUrl, title }: VideoModalProps) {
  const [isOpen, setIsOpen] = useState(globalModalState.isOpen);

  useEffect(() => {
    const listener = () => setIsOpen(globalModalState.isOpen);
    globalModalState.listeners.push(listener);
    return () => {
      const index = globalModalState.listeners.indexOf(listener);
      if (index > -1) globalModalState.listeners.splice(index, 1);
    };
  }, []);

  const onClose = () => globalModalState.setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl mx-4 bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-[#111827]">
                {title || 'Zadix AI Automation Overview'}
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close modal"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Video Content */}
            <div className="aspect-video bg-gray-900 relative">
              {videoUrl ? (
                <div className="w-full h-full">
                  <iframe
                    src={videoUrl.includes('youtu.be/') || videoUrl.includes('youtube.com/watch')
                      ? videoUrl
                          .replace('youtu.be/', 'www.youtube.com/embed/')
                          .replace('youtube.com/watch?v=', 'youtube.com/embed/')
                          .split('?')[0] + '?autoplay=1'
                      : videoUrl + '?autoplay=1'
                    }
                    title={title || 'Zadix Overview Video'}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : (
                // Placeholder for when video URL is not available
                <div className="flex items-center justify-center h-full text-white">
                  <div className="text-center">
                    <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-semibold mb-2">Video Coming Soon</h3>
                    <p className="text-gray-300 mb-6">
                      We're preparing a comprehensive overview video that will show you exactly how our AI automation works.
                    </p>
                    <div className="space-y-4 text-left max-w-md mx-auto">
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00B3A4] rounded-full mr-3 mt-2"></div>
                        <span className="text-sm">Live demo of document processing</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00B3A4] rounded-full mr-3 mt-2"></div>
                        <span className="text-sm">Real client workflow examples</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00B3A4] rounded-full mr-3 mt-2"></div>
                        <span className="text-sm">Behind-the-scenes system architecture</span>
                      </div>
                      <div className="flex items-start">
                        <div className="w-2 h-2 bg-[#00B3A4] rounded-full mr-3 mt-2"></div>
                        <span className="text-sm">ROI and performance metrics</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <p className="text-[#6B7280] text-sm">
                    Want to see a personalized demo with your actual data?
                  </p>
                </div>
                <Button asChild>
                  <a href="/contact">
                    Book a Live Demo
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Hook for managing video modal state
export function useVideoModal() {
  const [isOpen, setIsOpen] = useState(globalModalState.isOpen);

  useEffect(() => {
    const listener = () => setIsOpen(globalModalState.isOpen);
    globalModalState.listeners.push(listener);
    return () => {
      const index = globalModalState.listeners.indexOf(listener);
      if (index > -1) globalModalState.listeners.splice(index, 1);
    };
  }, []);

  const openModal = () => globalModalState.setIsOpen(true);
  const closeModal = () => globalModalState.setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal,
  };
}