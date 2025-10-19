import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Locale, locales } from './i18n';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export interface BusinessConfig {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  calendlyUrl: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  social: {
    linkedin: string;
    twitter?: string;
  };
}

export function getBusinessConfig(): BusinessConfig {
  return {
    name: 'Zadix',
    email: 'hello@zadix.ai',
    phone: '+44 7418 635600',
    whatsapp: '+44 7418 635600',
    calendlyUrl: 'https://calendly.com/admin-zadix/meeting-with-zadix-ai',
    address: {
      street: '71-75 Shelton Street, London WC2H 9JQ',
      city: 'London',
      country: 'United Kingdom',
    },
    social: {
      linkedin: 'http://linkedin.com/company/zadix-ai',
    },
  };
}

export function getLocaleFromCookie(): Locale {
  if (typeof document === 'undefined') return 'en';
  
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('locale='))
    ?.split('=')[1] as Locale;
  
  return cookieValue && locales.includes(cookieValue) ? cookieValue : 'en';
}

export const industries = [
  {
    id: 'real-estate',
    name: 'Luxury Real Estate',
    shortName: 'Real Estate',
    description: 'Every lead qualified in 60 seconds. Every follow-up on time.',
    shortDescription: 'Qualify every lead in 60s and never miss a follow‑up.',
    icon: 'Building2',
    color: 'from-orange-500 to-red-500',
    outcomes: ['+2-3 deals/month', '5x faster response', '40% higher conversion'],
  },
  {
    id: 'investment',
    name: 'Family Offices / Investment',
    shortName: 'Investment',
    description: 'From CIM to IC memo, in minutes.',
    shortDescription: 'From CIM to IC memo—fast, consistent, auditable.',
    icon: 'Banknote',
    color: 'from-green-500 to-emerald-500',
    outcomes: ['50-70% analyst time saved', '3x faster IC cycles', '90% accuracy'],
  },
  {
    id: 'logistics',
    name: 'Logistics & Freight',
    shortName: 'Logistics',
    description: 'RFQ in, quote out—profit-guarded.',
    shortDescription: 'RFQ in, quote out—with margin guardrails.',
    icon: 'Truck',
    color: 'from-blue-500 to-cyan-500',
    outcomes: ['20+ hours/week saved', '85% faster quotes', '15% higher win rate'],
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    shortName: 'Healthcare',
    description: 'Patient intake to claim draft—accurate and compliant.',
    shortDescription: 'Patient intake to claim draft—accurate and compliant.',
    icon: 'Heart',
    color: 'from-pink-500 to-rose-500',
    outcomes: ['40% fewer denials', '60% faster billing', '25% revenue increase'],
  },
  {
    id: 'legal',
    name: 'Legal & Corporate Services',
    shortName: 'Legal',
    description: 'Contracts and corporate changes—structured and searchable.',
    shortDescription: 'Contracts and corporate changes—structured and searchable.',
    icon: 'Scale',
    color: 'from-purple-500 to-violet-500',
    outcomes: ['80% time reduction', '95% accuracy', '50% faster turnaround'],
  },
  {
    id: 'construction',
    name: 'Construction / EPC',
    shortName: 'Construction',
    description: 'Win tenders, manage submittals, protect SLAs.',
    shortDescription: 'Tender pack summaries, BoQ extraction, SLA protection.',
    icon: 'HardHat',
    color: 'from-amber-500 to-orange-500',
    outcomes: ['60% faster bids', '85% compliance', '25% higher win rate'],
  },
  {
    id: 'saas',
    name: 'B2B SaaS',
    shortName: 'SaaS',
    description: 'Clean pipeline. Faster revenue.',
    shortDescription: 'Clean pipeline, faster revenue, better hygiene.',
    icon: 'Laptop',
    color: 'from-indigo-500 to-blue-500',
    outcomes: ['3x qualification speed', '45% higher conversion', '30% less churn'],
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Luxury Retail',
    shortName: 'Hospitality',
    description: 'Guest joy, operational calm.',
    shortDescription: 'Guest support, supplier orders, rota planning.',
    icon: 'Hotel',
    color: 'from-teal-500 to-cyan-500',
    outcomes: ['95% satisfaction', '40% productivity gain', '30% cost savings'],
  },
];

export const pricingTiers = [
  {
    id: 'starter',
    name: 'Starter',
    price: '$3,900',
    description: 'Perfect for single workflow automation',
    features: [
      'One automation workflow',
      'Basic integrations (3-5 systems)',
      'Standard deployment',
      '30-day support',
      'Documentation & handover',
      'Source code included',
    ],
    popular: false,
    deliveryTime: '5-7 days',
    ideal: 'Small teams, single process',
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '$12,900',
    description: 'Most popular for growing businesses',
    features: [
      'Up to 3 automation workflows',
      'Advanced integrations (5-10 systems)',
      'Custom business logic',
      'Human approval workflows',
      '90-day support',
      'Training & documentation',
      'Source code included',
      'Priority support',
    ],
    popular: true,
    deliveryTime: '7-10 days',
    ideal: 'Growing companies, multiple processes',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '$28k+',
    description: 'For complex, multi-department automation',
    features: [
      'Unlimited workflows',
      'Enterprise integrations',
      'Custom AI models',
      'Advanced security & compliance',
      '6-month support',
      'Dedicated success manager',
      'Source code included',
      'SLA guarantees',
      'Custom training program',
    ],
    popular: false,
    deliveryTime: '2-3 weeks',
    ideal: 'Large enterprises, complex requirements',
  },
];

export const addOns = [
  { name: 'Additional Workflow', price: '$2,500', description: 'Extra automation workflow' },
  { name: 'Custom Integration', price: '$1,500', description: 'Specialized system connection' },
  { name: 'Advanced Evaluations', price: '$1,000', description: 'Quality metrics & monitoring' },
  { name: 'Custom Dashboard', price: '$2,000', description: 'Branded analytics interface' },
  { name: 'Region Pinning', price: '$500', description: 'Data residency controls' },
  { name: 'HA/DR Setup', price: '$3,000', description: 'High availability & disaster recovery' },
  { name: '24/7 On-call', price: '$1,500/month', description: 'Emergency support coverage' },
  { name: 'Extended Training', price: '$2,000', description: 'Team training workshop' },
];