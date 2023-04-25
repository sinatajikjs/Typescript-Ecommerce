const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
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
