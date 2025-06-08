/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Fira Code", "monospace"],
      },
      scrollBehavior: ['responsive', 'smooth'],
      colors: {
        background: "#2C1F43",
        header: "#A9A1B0",
        backgroundColor: "oklch(25.7% 0.09 281.288)"
      },
    },
  },
  plugins: [],
};
