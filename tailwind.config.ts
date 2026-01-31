import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
      },
      colors: {
        primary: "#0ea5e9",
        "black-shadow-100": "#1A1A29",
        "black-shadow-200": "#181824",
      },
      rotate: {
        "360": "360deg",
      },
    },
    borderWidth: {
      0: "0px",
      1: "1px",
      2: "2px",
      3: "3px",
    },
    container: {
      screens: {
        mobile: "600px",
        tablet: "900px",
        desktop: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
