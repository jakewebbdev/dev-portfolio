const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      gray: colors.trueGray,
      //gray: colors.warmGray,
      //gray: colors.coolGray,
      //gray: colors.blueGray,
      armygreen: "#4b5320",
      armybrown: "#c19a6b",
      white: colors.white,
      cream: "#f4f2dc",
      lightgray: "#e6e6e6",
      camel: "#c5a880",
      brown: "#532e1c",
      black: "#0f0f0f",
      lightbrown: "#80461b",
      green: colors.green,
      utorange: "#FF8200",
      uttorch: "#E65933",
      smokey: "#58595B",
    },
    fill: (theme) => theme("colors"),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
