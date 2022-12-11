

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#303030",
        gray: "#D9D9D9"
      },
      fontFamily: {
        'sans': ['Inter', 'arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
