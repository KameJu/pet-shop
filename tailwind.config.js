/** @type {import('tailwindcss').Config} */

const constants = {
  primary: "#FDE047",
  "primary-dark": "#ceb63e",
  gray: "#423F3F",
  "dark-gray": "#302f2f",
};

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...constants,
    },
    extend: {},
  },
  plugins: [],
};
