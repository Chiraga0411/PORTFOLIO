/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Same four theme colours as the old CSS variables
        page: "var(--color)",
        sec: "var(--seccolor)",
        txt: "var(--txtcolor)",
        hov: "var(--hovercolor)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};
