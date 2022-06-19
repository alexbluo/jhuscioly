/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./components/*.{js,jsx}", "./pages/*.{js,jsx}"],
  theme: {
    extend: {
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
