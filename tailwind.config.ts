import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#ffffff",
          surface: "#f8faf9",
          card: "#f1f5f3",
          border: "#e2e8e4",
          text: "#1a2e1f",
          muted: "#5a6b5e",
          green: "#16a34a",
          "green-light": "#22c55e",
          "green-dark": "#15803d",
          "green-bg": "#f0fdf4",
          red: "#dc2626",
          "red-bg": "#fef2f2",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
