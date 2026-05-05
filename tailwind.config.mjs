/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand palette — pulled from the Squarespace site
        ink: {
          DEFAULT: '#000000',  // page background
          900: '#0a0a0a',      // slightly lifted black for cards
          800: '#141414',
          700: '#1f1f1f',
        },
        bone: {
          DEFAULT: '#f5f3ee',  // body text on dark
          dim: '#b8b3a8',      // muted body
          mute: '#7a7670',     // captions / meta
        },
        pulse: {
          // The red ECG / wordmark color
          DEFAULT: '#d8323c',
          bright: '#ef3b46',
          deep: '#9c1e26',
        },
      },
      fontFamily: {
        // Serif display for headings — matches the editorial feel of the original
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        // Clean sans for body
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        // Mono for the wordmark / lab acronym
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
        site: '1400px',
      },
      letterSpacing: {
        wider2: '0.18em',
        widest2: '0.32em',
      },
      animation: {
        'pulse-trace': 'pulseTrace 3.6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.9s ease-out both',
      },
      keyframes: {
        pulseTrace: {
          '0%': { strokeDashoffset: '1000' },
          '60%': { strokeDashoffset: '0' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
