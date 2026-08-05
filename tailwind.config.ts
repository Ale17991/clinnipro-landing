import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta de marca 2026 — azul profundo + laranja de destaque.
        // Base: #141D23 · #003883 · #558CD3 · #8C9DB3 · #EBECF0 · #EE4B00
        ink: {
          DEFAULT: '#141D23', // texto principal, quase preto azulado
          900: '#0D1419', // fundos escuros / hover em superfícies escuras
          700: '#3A4756',
          500: '#5A6B80', // texto secundário (AA em branco: 5.4:1)
          400: '#8C9DB3', // tom apagado da paleta — decorativo / sobre escuro
        },
        navy: {
          DEFAULT: '#003883',
          deep: '#002A63',
          900: '#001E48',
          700: '#0A4A9E',
        },
        primary: '#003883',
        accent: {
          DEFAULT: '#EE4B00',
          dark: '#C23A00', // laranja legível como texto em fundo claro
          light: '#FFD3BF', // sobre fundos escuros
        },
        sky: {
          DEFAULT: '#558CD3',
          light: '#DCE7F6',
        },
        mist: {
          DEFAULT: '#EBECF0',
          light: '#F4F5F8',
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
