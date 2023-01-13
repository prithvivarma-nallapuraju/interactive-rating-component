/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    screens: {
      sm: "375px",
      xl: "1440px",
    },
    extend: {
      colors: {
        orangeCustom: "hsl(25, 97%, 53%)",
        lightGrayCustom: "hsl(217, 12%, 63%)",
        mediumGrayCustom: "hsl(216, 12%, 54%)",
        darkBlueCustom: "hsl(213, 19%, 18%)",
        veryDarkBlueCustom: "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        overPass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
