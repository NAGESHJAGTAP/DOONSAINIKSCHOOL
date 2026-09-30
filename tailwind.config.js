/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f9',
          100: '#dce5f2',
          200: '#bdcfe6',
          300: '#90b2d6',
          400: '#5c8ec2',
          500: '#3970ab',
          600: '#28568e',
          700: '#214472',
          800: '#1b385e',
          900: '#0c1a30',
          950: '#07101f',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
          950: '#451a03',
        },
        crimson: {
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['"Outfit"', 'Montserrat', 'sans-serif'],
        display: ['"Cinzel"', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(12, 26, 48, 0.08)',
        'card': '0 10px 30px -5px rgba(12, 26, 48, 0.1)',
        'card-hover': '0 20px 40px -8px rgba(12, 26, 48, 0.16)',
        'gold-glow': '0 0 25px -3px rgba(245, 158, 11, 0.35)',
        'navy-glow': '0 10px 30px -5px rgba(12, 26, 48, 0.3)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
