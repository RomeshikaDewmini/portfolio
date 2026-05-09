/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#6366f1',
        accent: '#22d3ee',
        ink: '#0f172a',
        mist: '#e2e8f0',
      },
      boxShadow: {
        soft: '0 20px 35px -18px rgba(15, 23, 42, 0.35)',
        glow: '0 0 25px rgba(99, 102, 241, 0.45)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 rgba(99, 102, 241, 0.35)' },
          '50%': { boxShadow: '0 0 25px rgba(99, 102, 241, 0.65)' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-8px)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        pulseGlow: 'pulseGlow 2.6s ease-in-out infinite',
        wave: 'wave 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
