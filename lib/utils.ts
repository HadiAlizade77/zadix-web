export interface BusinessConfig {
  name: string;
  email: string;
  calendlyUrl: string;
}

export function getBusinessConfig(): BusinessConfig {
  return {
    name: 'Zadix',
    email: 'hello@zadix.ai',
    calendlyUrl: 'https://calendly.com/zadix/demo'
  };
}

export function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}