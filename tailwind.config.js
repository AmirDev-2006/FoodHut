/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "sofia bold":"sofia bold",
        "sofia regular":"sofia regular",
        "sofia medium":"sofia medium"
      }
    },
  },
  plugins: [],
}

