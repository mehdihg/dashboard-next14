/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#151c2c",
        secondary:"#182237",
        primaryText:"white",
        secondaryText:"#b7bac1"
      }
    },
  },
  plugins: [],
}

