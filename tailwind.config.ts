import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
  plugins: [],
};
export default config;
