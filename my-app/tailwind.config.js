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
      maxWidth: {
        "1/2": "50%",
      },
      minWidth: {
        "1/4": "20rem",
        "540": "32rem",
      },
      height: {
        128: "48rem",
      },
      color: {
        'modal': '#0000004a',
      },
      gridAutoColumns: {
        '1fr': 'minmax(320px,1fr)',
      }
    },
  },
};
