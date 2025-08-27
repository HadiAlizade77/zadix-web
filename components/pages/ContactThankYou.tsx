'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, MessageCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactThankYou() {
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
            We've received your details. Choose a time for a quick walkthrough and scoping call.
          </p>

          {/* Calendly Embed Placeholder */}
          <div className="bg-[#F8FAFC] rounded-2xl p-8 mb-8">
            <div className="w-full h-96 bg-white rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
              <div className="text-center">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
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