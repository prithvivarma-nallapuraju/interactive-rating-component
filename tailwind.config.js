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
        orange: "hsl(25, 97%, 53%)",
        lightGray: "hsl(217, 12%, 63%)",
        mediumGray: "hsl(216, 12%, 54%)",
        darkBlue: "hsl(213, 19%, 18%)",
        veryDarkBlue: "hsl(216, 12%, 8%)",
      },
      fontFamily: {
        overPass: ["Overpass", "sans-serif"],
      },
    },
  },
  plugins: [],
};
