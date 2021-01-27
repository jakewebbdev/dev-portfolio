const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      //gray: colors.trueGray,
      gray: colors.warmGray,
      //gray: colors.coolGray,
      //gray: colors.blueGray,
      armygreen: "#4b5320",
      armybrown: "#c19a6b",
      white: colors.white,
      black: colors.black,
      cream: "#f4f2dc",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
