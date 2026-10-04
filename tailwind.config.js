/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        mono: ["DM Mono", "monospace"],
        syncopate: ["Syncopate", "sans-serif"],
      },

      colors: {
        genora: {
          black: "#050507",
          violet: "#8B5CF6",
          purple: "#7C3AED",
          lavender: "#C084FC",
        },
      },
    },
  },

  plugins: [],
};
