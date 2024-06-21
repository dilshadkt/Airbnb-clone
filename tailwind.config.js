/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide"), require("daisyui")],
  daisyui: {
    darkTheme: "light", // name of one of the included themes for dark mode
  },
};
