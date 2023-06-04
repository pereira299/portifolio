/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs': '400px',
    },
    extend: {
      fontFamily: {
        oxanium: ["var(--font-oxanium)", "sans-serif"],
        "oxanium-bold": ["var(--font-oxanium-bold)", "sans-serif"],
        lato: ["var(--font-lato)", "sans-serif"],
        "lato-bold": ["var(--font-lato-bold)", "sans-serif"],
      },
      backgroundImage: {
        radial: "radial-gradient(var(--tw-gradient-stops))",
        conic:
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        section: "calc(100vh - 4rem)",
      },
      colors: {
        rhino: {
          50: "#f4f9fd",
          100: "#e9f3fa",
          200: "#cfe6f4",
          300: "#a6d4ec",
          400: "#69b0d4",
          500: "#3c8cb5",
          600: "#266d95",
          700: "#1d557a",
          800: "#13415f",
          900: "#0e314b",
          950: "#061b2e",
        },
      },
    },
  },
  plugins: [],
};
