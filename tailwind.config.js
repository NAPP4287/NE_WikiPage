/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      blue: {
        main: "#639fff",
        dark: "#3b82f6",
      },
      slate: {
        200: "#e2e8f0",
        400: "#94a3b8",
        600: "#475569",
      },
      red: {
        rose: "#f87171",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    spacing: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "20px",
    },
    extend: {
      padding: {
        1: "12px",
        2: "20px",
        3: "30px",
        4: "40px",
      },
      flex: {
        7: "7",
      },
    },
  },
  plugins: [],
};
