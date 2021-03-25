module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media",
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      lightGreen: "#ceff41",
      darkGreen: "#5b8600",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      serif: ["Source Serif Pro", "serif"],
    },
    extend: {
      strokeWidth: {
        8: "8",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
