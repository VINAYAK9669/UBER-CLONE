/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        uber: ["UberFont", ...defaultTheme.fontFamily.sans],
        uber_text: ["UberMoveText", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: {
          dark_gray: "#000000",
        },
      },
    },
  },
  plugins: [],
};
