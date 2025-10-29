/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // switched to a red + black theme per request
        primary: "#000000",
        secondary: "#ff4d4d", // red accent
        tertiary: "#0b0b0b",
        "black-100": "#080808",
        "black-200": "#050505",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        // Use public/ path so the image is available at build and runtime.
        "hero-pattern": "url('/herobg.png')",
      },
    },
  },
  plugins: [],
};
