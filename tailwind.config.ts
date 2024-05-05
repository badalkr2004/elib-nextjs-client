import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      colors: {
        primary: {
          50: '#f3f2ff',
          100: '#eae7ff',
          200: '#d6d1ff',
          300: '#b8adff',
          400: '#967eff',
          500: '#744aff',
          600: '#6426ff',
          700: '#5614ed',
          800: '#4c11d4',
          900: '#3c0fa3',
          950: '#22066f',
        },
      },
    },
  },
  plugins: [],
};
export default config;
