'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Locale } from '@/lib/i18n';

interface SecuritySnippetProps {
  locale: Locale;
}

export default function SecuritySnippet({ locale }: SecuritySnippetProps) {
  return (
    <section className="py-16 bg-surface border-y border-border-warm">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="text-amber text-xs font-dm-sans font-medium tracking-[0.25em] uppercase mb-2">
              Security
            </p>
            <h3 className="font-cormorant font-medium text-cream text-3xl">
              SOC‑aligned controls by default
            </h3>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <p className="text-muted font-dm-sans text-base max-w-sm leading-relaxed">
              Audit trails, RBAC, encryption, and full observability of every decision.
            </p>
            <Link
              href="/security"
              className="inline-flex items-center text-amber text-sm font-dm-sans whitespace-nowrap hover:underline underline-offset-4 group flex-shrink-0"
            >
              Read our security basics
              <ArrowRight className="ml-1.5 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
