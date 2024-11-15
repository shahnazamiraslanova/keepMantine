/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/*/.{js,ts,jsx,tsx}"],
  darkMode: "selector",
  theme: {
    colors: {},
    extend: {
      colors: {
        primary: {
          light: "#194185",
          DEFAULT: "#1570ef",
          dark: "#102A56",
          transparent: "#edf5ff",
        },
        blue: {
          50: "#a1c6f9",
          100: "#8ab8f7",
          200: "#73a9f5",
          300: "#5b9bf4",
          400: "#448df2",
          500: "#2c7ef1",
          600: "#1570ef",
          700: "#1365d7",
          800: "#115abf",
          900: "#0f4ea7",
        },
        white: "#ffffff",
        black: "#000000",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};