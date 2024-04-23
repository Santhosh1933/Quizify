/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F4F4F4B7",
        primaryBg: "#86469C",
        primaryText: "#2F58CD",
        secondaryText: "#365486",
        territory: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
