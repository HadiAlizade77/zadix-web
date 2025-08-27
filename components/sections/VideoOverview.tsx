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
            From intake to decision to approval—watch an automation run end‑to‑end.
          </p>
          
          <div className="relative">
            <motion.button
              onClick={openModal}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-full max-w-2xl mx-auto aspect-video bg-gradient-to-br from-[#0B1220] to-[#2563EB] rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white rounded-full blur-xl"></div>
                  <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-white rounded-full blur-xl"></div>
                </div>
                
                {/* Play button */}
                <div className="relative z-10 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
                
                {/* Overlay text */}
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm font-medium opacity-90">Zadix Overview</div>
                  <div className="text-xs opacity-70">2:15 duration</div>
                </div>
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
      <VideoModal 
        videoUrl="https://youtu.be/FwOTs4UxQS4"
        title="Zadix AI Automation Overview"
      />
    </section>
  );
}