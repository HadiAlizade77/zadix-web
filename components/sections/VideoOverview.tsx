'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { VideoModal, useVideoModal } from '@/components/ui/video-modal';

export default function VideoOverview() {
  const { openModal } = useVideoModal();
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