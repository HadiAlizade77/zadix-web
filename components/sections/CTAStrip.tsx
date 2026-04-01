'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getBusinessConfig } from '@/lib/utils';

const CTAStrip = () => {
  const business = getBusinessConfig();

  return (
    <section className="py-20 bg-gradient-to-r from-[#0B1220] via-[#0F1629] to-[#0B1220]">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to eliminate busywork?
          </h2>
          <p className="text-xl text-muted mb-8 leading-relaxed">
            Tell us about your workflow challenge and we'll show you exactly how our automation would handle it—with real data and your specific business rules.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" asChild>
              <Link href="/contact">
                <MessageCircle className="mr-2 h-5 w-5" />
                Book a Demo
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="bg-cream/5 border-cream/20 text-cream hover:bg-cream/10" asChild>
              <a href={business.calendlyUrl} target="_blank" rel="noopener noreferrer">
                Schedule a Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          <p className="text-muted/60 text-sm mt-6">
            30-minute demo • No sales pitch • See your automation in action
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTAStrip;