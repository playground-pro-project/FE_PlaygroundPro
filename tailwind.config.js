/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        
        purple: '#7D4A7D',
        darkBlue: '#0F1A90',
        primary: '#3B71D7',
        secondary: '#CECED1',
        oren: '#EB9362',
        yellow: '#F1BE2A'
      },
    },
  },
  plugins: [require("daisyui")],
};
