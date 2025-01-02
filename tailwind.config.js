/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "@/index.html",
    "./src/**/*.{js,vue}",
    "./src/**/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nastaligh: ['Nastaligh', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

