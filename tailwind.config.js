/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // === NEW DARK PALETTE ===
        'ink':        '#0A0907',
        'surface':    '#141210',
        'surface-2':  '#1C1814',
        'border-warm':'#2A2520',
        'cream':      '#F0EDE8',
        'muted':      '#8A8278',
        'amber':      '#E8963C',
        'amber-dim':  '#C47020',
        // === LEGACY TOKEN REMAPS (keep existing class names working) ===
        'dark-ink':       '#0A0907',
        'paper':          '#141210',
        'headline-slate': '#F0EDE8',
        'accent-teal':    '#E8963C',
        'accent-blue':    '#C47020',
        // System Colors
        'success': '#10B981',
        'warning': '#F59E0B',
        'danger':  '#EF4444',
        // Grays (kept for backward compat)
        'gray-50':  '#F9FAFB',
        'gray-100': '#F3F4F6',
        'gray-200': '#E5E7EB',
        'gray-300': '#D1D5DB',
        'gray-400': '#9CA3AF',
        'gray-500': '#6B7280',
        'gray-600': '#4B5563',
        'gray-700': '#374151',
        'gray-800': '#1F2937',
        'gray-900': '#111827',
      },
      fontFamily: {
        'cormorant': ['var(--font-cormorant)', 'Georgia', 'serif'],
        'dm-sans':   ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        // Legacy font names remapped to new fonts
        'sora':  ['var(--font-cormorant)', 'Georgia', 'serif'],
        'inter': ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1':      ['3.5rem',  { lineHeight: '1.0', fontWeight: '300' }],
        'h2':      ['2.75rem', { lineHeight: '1.1', fontWeight: '300' }],
        'h3':      ['1.75rem', { lineHeight: '1.3', fontWeight: '500' }],
        'body':    ['1.125rem',{ lineHeight: '1.6', fontWeight: '400' }],
        'body-sm': ['1rem',    { lineHeight: '1.5', fontWeight: '400' }],
      },
      maxWidth: {
        'container': '1280px',
      },
      animation: {
        'fade-in':    'fadeIn 0.5s ease-out',
        'slide-up':   'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%':   { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)',    opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
