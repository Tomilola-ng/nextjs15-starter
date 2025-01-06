/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./templates/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8f9fa",
        foreground: "#212529",
        card: {
          DEFAULT: "#ffffff",
          foreground: "#495057",
        },
        popover: {
          DEFAULT: "#e9ecef",
          foreground: "#343a40",
        },
        primary: {
          DEFAULT: "#0d6efd",
          foreground: "#ffffff",
          200: "#99cfff",
          300: "#66b2ff",
          400: "#3399ff",
        },
        secondary: {
          DEFAULT: "#6c757d",
          foreground: "#ffffff",
          200: "#d6d8db",
          300: "#adb5bd",
          400: "#868e96",
        },
        muted: {
          DEFAULT: "#f8f9fa",
          foreground: "#6c757d",
          200: "#e9ecef",
          300: "#dee2e6",
          400: "#ced4da",
        },
        accent: {
          DEFAULT: "#ffc107",
          foreground: "#212529",
          200: "#ffe082",
          300: "#ffd54f",
          400: "#ffca28",
        },
        destructive: {
          DEFAULT: "#dc3545",
          foreground: "#ffffff",
          200: "#f5b5ba",
          300: "#f08086",
          400: "#e55361",
        },
        border: "#dee2e6",
        input: "#ced4da",
        ring: "#0d6efd",
        chart: {
          "1": "#ff6384",
          "2": "#36a2eb",
          "3": "#ffcd56",
          "4": "#4bc0c0",
          "5": "#9966ff",
        },
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
      },
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
