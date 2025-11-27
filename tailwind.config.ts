import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Cornwall-inspired color palette
        'slate-deep': '#2D3A3A',
        'trevaunance-teal': '#3D7A7A',
        'trevaunance-teal-dark': '#2D5A5A', // WCAG AA compliant for links on light backgrounds (4.92:1)
        'trevaunance-teal-light': '#7FBFBF', // WCAG AA compliant for text on dark backgrounds (5.2:1 on #1E2828)
        'harbour-rust': '#A86641', // WCAG AA compliant with white text (4.53:1) - darkened from #C17F59
        'harbour-rust-dark': '#8B5535', // WCAG AA+ compliant with white text (5.1:1) - darker for better contrast
        'cottage-cream': '#F7F4F0',
        'mist-white': '#FDFCFB',
        'slate-wash': '#1E2828',
        'secondary-text': '#526060', // WCAG AA compliant (4.51:1) - darkened from #5C6B6B
        'muted-text': '#5F6D6D', // WCAG AA compliant (4.52:1) - darkened from #8A9696

        // Legacy support (can be removed later)
        primary: '#2D3A3A',
        secondary: '#FDFCFB',
        accent: {
          light: '#F7F4F0',
          DEFAULT: '#3D7A7A',
          dark: '#C17F59',
        },
      },
      fontFamily: {
        'dm-serif': ['var(--font-dm-serif)', 'serif'],
        'inter': ['var(--font-inter)', 'system-ui', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display': ['4.5rem', { lineHeight: '1.1', fontWeight: '400' }],
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '400' }],
        'h2': ['2.25rem', { lineHeight: '1.25', fontWeight: '400' }],
        'h3': ['1.688rem', { lineHeight: '1.3', fontWeight: '500' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['1.25rem', { lineHeight: '1.7' }],
        'body': ['1.125rem', { lineHeight: '1.7' }],
      },
      keyframes: {
        // Base animations
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // Directional fade animations
        'fade-up-left': {
          '0%': { opacity: '0', transform: 'translate(-30px, 20px)' },
          '100%': { opacity: '1', transform: 'translate(0, 0)' },
        },
        'fade-up-right': {
          '0%': { opacity: '0', transform: 'translate(30px, 20px)' },
          '100%': { opacity: '1', transform: 'translate(0, 0)' },
        },
        // Scale animation
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        // Pulse glow for CTAs (updated for new Harbour Rust #A86641)
        'pulse-glow': {
          '0%, 100%': {
            boxShadow: '0 4px 6px -1px rgba(168, 102, 65, 0.3), 0 2px 4px -1px rgba(168, 102, 65, 0.2), 0 0 0 0 rgba(168, 102, 65, 0.4)'
          },
          '50%': {
            boxShadow: '0 4px 6px -1px rgba(168, 102, 65, 0.3), 0 2px 4px -1px rgba(168, 102, 65, 0.2), 0 0 0 8px rgba(168, 102, 65, 0)'
          },
        },
        // Bounce in animation
        'bounce-in': {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out forwards',
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'fade-up-left': 'fade-up-left 0.6s ease-out forwards',
        'fade-up-right': 'fade-up-right 0.6s ease-out forwards',
        'scale-in': 'scale-in 0.5s ease-out forwards',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'bounce-in': 'bounce-in 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
};

export default config;
