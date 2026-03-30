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
      boxShadow: {
        floating: "0 10px 40px -10px rgba(0, 0, 0, 0.15)",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(15px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "pop-in": {
          "0%": { opacity: "0", transform: "scale(0.5)" },
          "70%": { transform: "scale(1.1)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.4s ease-out forwards",
        "pop-in": "pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards",
      },
    },
  },
  plugins: [],
};
export default config;
