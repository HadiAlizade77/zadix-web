'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { VideoModal, useVideoModal } from '@/components/ui/video-modal';

export default function VideoOverview() {
  const { openModal } = useVideoModal();

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#111827] mb-6">
            See how it works in 2 minutes
          </h2>
          <p className="text-xl text-[#6B7280] mb-12 max-w-2xl mx-auto">
            From intake to decision to approval — watch an automation run end-to-end.
          </p>
          
          <div className="relative">
            <div className="w-full max-w-2xl mx-auto aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/XXXXXXXXXXX"
                title="Zadix AI Automation Overview"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            
            {/* Video placeholder overlay for demo */}
            <div className="absolute inset-0 w-full max-w-2xl mx-auto aspect-video bg-gradient-to-br from-[#0B1220] to-[#2563EB] rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <Play className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <h3 className="text-xl font-semibold mb-2">Video Coming Soon</h3>
                <p className="text-gray-300 text-sm">
                  2-minute overview of our automation process
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}