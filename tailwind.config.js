/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "@/index.html",
    "./src/**/*.{js,vue}",
    "./src/**/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        "skills-List-columns":'repeat(auto-fit,minmax(200px,1fr))'
      }
    },
  },
  plugins: [],
}

