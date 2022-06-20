const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./components/*.{js,jsx}", "./pages/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          dark: "#002D72",
          light: "#68ACE5",
        },
      },
    },
  },
  plugins: [],
};
