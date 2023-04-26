const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      minHeight: {
        cart: "calc(100vh - 7rem)",
      },
      height: {
        cart: "calc(100vh - 7rem)",
      },
      colors: {
        primary: colors.blue[600],
        hoverPrimary: colors.blue[800],
        disabled: colors.gray[300],
        light: "#f8f9fa",
      },
    },
  },
  plugins: [],
};
