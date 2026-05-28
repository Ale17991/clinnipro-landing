import type { Config } from 'tailwindcss'

// Paleta alinhada ao app real (src/app/globals.css — design 016).
const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0E3C5B', // azul institucional (sidebar / texto forte)
          deep: '#0A2E44',
          900: '#082338',
          700: '#1C4F71', // --primary do app
        },
        primary: '#1C4F71',
        teal: {
          DEFAULT: '#1CABB0', // verde principal do designer (--success)
          dark: '#126F72', // --success-strong
          light: '#CBE1E1', // --success-bg
        },
        sky: {
          DEFAULT: '#569AC6', // --info
          light: '#CBE6F8', // --info-bg / sidebar-active-text
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      maxWidth: { content: '1160px' },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: { 'fade-up': 'fade-up 0.6s ease-out both' },
    },
  },
  plugins: [],
}

export default config
