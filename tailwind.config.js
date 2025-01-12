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
        'gray-light': '#f6f6f6'
      }
    },
  },
  plugins: [],
}

