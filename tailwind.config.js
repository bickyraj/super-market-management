/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './src-tauri/**/*.rs',
    './public/index.html'
  ],
  theme: {
    extend: {
      colors: {
        'gray-light': '#f6f6f6',
        app: {
          // 50:  '#e3fdeb',  // Lightest shade
          // 100: '#c9f7dd',
          // 200: '#a2ecc6',
          // 300: '#79e0ae',
          // 400: '#55d598',
          // 500: '#3ac982',  // Mid shade (Primary)
          // 600: '#30b376',
          // 700: '#279e69',
          // 800: '#1f885c',
          // 900: '#1aa174', // Darkest shade
          50:  '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
      },
      fontFamily: {
        // sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

