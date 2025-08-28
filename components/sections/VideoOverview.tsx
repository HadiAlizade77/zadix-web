'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { VideoModal, useVideoModal } from '@/components/ui/video-modal';

export default function VideoOverview() {
  const { openModal } = useVideoModal();

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            See Zadix AI in Action
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Watch how our AI automation platform transforms businesses and streamlines operations
          </p>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
              <button
                onClick={() => openModal('FwOTs4UxQS4')}
                className="absolute inset-0 z-20 flex items-center justify-center group"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-8 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110">
                  <Play className="w-16 h-16 text-white ml-2" />
                </div>
              </button>
              
              <div className="w-full h-full">
                <iframe
                  src="https://www.youtube.com/embed/FwOTs4UxQS4"
                  title="Zadix AI Automation Overview"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}