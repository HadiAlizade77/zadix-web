'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Banknote, Truck, Heart, Scale, HardHat, Laptop, Hotel } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Locale } from '@/lib/i18n';
import { industries } from '@/lib/utils';

interface IndustriesGridProps {
  locale: Locale;
}

const iconMap = {
  Building2,
  Banknote,
  Truck,
  Heart,
  Scale,
  HardHat,
  Laptop,
  Hotel,
};

export default function IndustriesGrid({ locale }: IndustriesGridProps) {
  return (
    <section className="py-20 bg-paper">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-h2 font-sora text-headline-slate mb-6">
            Industry-Specific Solutions
          </h2>
          <p className="text-body text-gray-600 max-w-3xl mx-auto">
            Purpose-built automation workflows designed for your sector's unique challenges and regulations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => {
            const IconComponent = iconMap[industry.icon as keyof typeof iconMap];
            
            return (
              <motion.div
                key={industry.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link href={`/industries/${industry.id}`}>
                  <Card className="h-full group cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                    <CardHeader className="text-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <CardTitle className="text-xl mb-3 group-hover:text-accent-teal transition-colors">
                        {industry.shortName}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {industry.description}
                      </p>
                      <div className="flex items-center justify-center text-accent-blue font-medium group-hover:translate-x-2 transition-transform">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link 
            href="/industries" 
            className="inline-flex items-center text-accent-blue font-medium hover:text-accent-teal transition-colors group"
          >
            View All Industries
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}