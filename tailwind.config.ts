import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Modern Vibrant Color Palette
        primary: {
          DEFAULT: '#6366F1', // Indigo
          dark: '#4F46E5',
          light: '#818CF8',
        },
        secondary: {
          DEFAULT: '#EC4899', // Pink
          dark: '#DB2777',
          light: '#F472B6',
        },
        accent: {
          purple: '#A855F7',
          blue: '#3B82F6',
          cyan: '#06B6D4',
          teal: '#14B8A6',
          green: '#10B981',
          orange: '#F97316',
          red: '#EF4444',
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Helvetica Neue',
          'Helvetica',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        'display-lg': ['6rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'display': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'h1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.015em', fontWeight: '600' }],
        'h2': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h3': ['2rem', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '600' }],
        'h4': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.005em', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body': ['1rem', { lineHeight: '1.6', letterSpacing: '0', fontWeight: '400' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5', letterSpacing: '0', fontWeight: '400' }],
      },
      spacing: {
        'grid-margin': '6rem',
        'grid-gutter': '2rem',
        'section-sm': '4rem',
        'section-md': '8rem',
        'section-lg': '12rem',
      },
      maxWidth: {
        'grid': '1280px',
        'content': '960px',
        'narrow': '720px',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
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
      borderWidth: {
        'thin': '0.5px',
      },
    },
  },
  plugins: [],
};
export default config;
