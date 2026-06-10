import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta restrita — fidelidade ao app real, sem excessos.
        ink: {
          DEFAULT: '#0B1B26', // texto principal, quase preto azulado
          900: '#0A1620',
          700: '#1F3645',
          500: '#516676',
        },
        navy: {
          DEFAULT: '#0E3C5B',
          deep: '#0A2E44',
          900: '#082338',
          700: '#1C4F71',
        },
        primary: '#1C4F71',
        teal: {
          DEFAULT: '#1CABB0',
          dark: '#126F72',
          light: '#CBE1E1',
        },
        sky: {
          DEFAULT: '#569AC6',
          light: '#CBE6F8',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
      },
      maxWidth: { content: '1200px', prose: '720px' },
      letterSpacing: {
        'tightest-2': '-0.045em',
      },
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
