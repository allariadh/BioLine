/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}", "./BioLineLanding.jsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "Tajawal",
          "Cairo",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
