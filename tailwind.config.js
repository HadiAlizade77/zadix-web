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
        // Brand Colors
        'dark-ink': '#0B1220',
        'paper': '#F8FAFC',
        'headline-slate': '#111827',
        'accent-teal': '#00B3A4',
        'accent-blue': '#2563EB',
        // System Colors
        'success': '#10B981',
        'warning': '#F59E0B',
        'danger': '#EF4444',
        // Grays
        'gray-50': '#F9FAFB',
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
        'sora': ['Sora', 'Inter', 'system-ui', 'sans-serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }], // 56px
        'h2': ['2.75rem', { lineHeight: '1.2', fontWeight: '700' }], // 44px
        'h3': ['1.75rem', { lineHeight: '1.3', fontWeight: '600' }], // 28px
        'body': ['1.125rem', { lineHeight: '1.5', fontWeight: '400' }], // 18px
        'body-sm': ['1rem', { lineHeight: '1.5', fontWeight: '400' }], // 16px
      },
      maxWidth: {
        'container': '1280px',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};