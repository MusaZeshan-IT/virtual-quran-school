/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel-decorative': ['Cinzel Decorative', 'sans-serif'],
        'philosopher': ['Philosopher', 'sans-serif'],
        'aladin': ['Aladin', 'system-ui'],
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}