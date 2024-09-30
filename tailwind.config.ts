import type { Config } from "tailwindcss";

export default {
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
      sans: ["var(--font-inter)", "sans-serif"],
      serif: ["var(--font-source-serif)", "serif"],
    },
  },
  plugins: [],
} satisfies Config;
