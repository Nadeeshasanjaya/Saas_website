export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'sans-serif'],
      },
      colors: {
        ink: {
          950: '#05060f',
          900: '#0a0c1a',
          800: '#0f1226',
        },
        accent: {
          violet: '#a78bfa',
          indigo: '#818cf8',
          sky: '#38bdf8',
        },
      },
      boxShadow: {
        glow: '0 0 40px -8px rgba(129, 140, 248, 0.45)',
        card: '0 20px 60px -20px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}