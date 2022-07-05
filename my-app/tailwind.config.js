/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  theme: {
    extend: {
      top: {
        "m5": "-5rem"
      },
      maxWidth: {
        "1/2": "50%",
        "7": "1.75rem",
      },
      minWidth: {
        "1/4": "20rem",
        540: "32rem",
      },
      height: {
        128: "35rem",
      },
      gridAutoColumns: {
        "1fr": "minmax(320px,1fr)",
      },
    },
  },
};
