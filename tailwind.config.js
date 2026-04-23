/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Oswald', 'sans-serif'],
        accent: ['Instrument Serif', 'serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        background: '#111111',
        foreground: '#F5F5F5',
        primary: {
          DEFAULT: '#DD3333',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: '#1A1A1A',
          foreground: '#A1A1A1',
        },
        accent: {
          DEFAULT: '#DD3333',
          foreground: '#FFFFFF',
        },
        border: '#2A2A2A',
      },
    },
  },
  plugins: [],
}
