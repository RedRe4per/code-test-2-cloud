/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-montserrat)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          DEFAULT: "#00A0DF",
          300: "#0A7FAD",
        },
        secondary: {
          DEFAULT: "#FF5A60",
        },
        ternary: {
          DEFAULT: "#58A55C",
          100: "#CEF8D0",
        },
        quaternary: {
          DEFAULT: "#F45050",
          400: "#D30D0D",
          300: "#F12222",
          200: "#F78282",
          100: "#FAB2B2",
        },
        customGray: "#adb5bd",
      },
      fontSize: {
        "heading-1": [
          "2rem",
          {
            lineHeight: "150%",
            fontWeight: "bold",
          },
        ],
        "heading-2": [
          "0.9375rem",
          {
            lineHeight: "150%",
            fontWeight: "500",
          },
        ],
        "text-3-standard": [
          "1rem",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
        "text-2": [
          "0.875rem",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
        "text-2-bolder": [
          "0.875rem",
          {
            lineHeight: "150%",
            fontWeight: "500",
          },
        ],
        "text-1": [
          "0.75rem",
          {
            lineHeight: "150%",
            fontWeight: "400",
          },
        ],
        "text-list-box": [
          "0.875rem",
          {
            lineHeight: "112.5%",
            fontWeight: "500",
          },
        ],
        "text-button": [
          "0.9rem",
          {
            lineHeight: "150%",
            fontWeight: "500",
          },
        ],
      },
      boxShadow: {
        "inset-top": "inset 0 7.5px 15px -7.5px #6372824d",
        "list-box":
          "0 2px 4px -1px rgba(0, 0, 0, 0.012), 0 4px 5px 0 rgba(0, 0, 0, 0.144), 0 1px 10px 0 rgba(0, 0, 0, 0.121)",
        "car-info": "0 0 5px #0000000d",
      },
      borderRadius: {
        custom: "0.25rem",
      },
    },
  },
  plugins: [],
};
