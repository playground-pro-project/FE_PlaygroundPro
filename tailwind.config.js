/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {},
    mytheme: {
      primary: "#3782FF",
      "base-100": "#ffffff",
      success: "#27FB23",
      warning: "#FBBD23",
      error: "#D73B3B",
    },
  },
  plugins: [require("daisyui")],
};
