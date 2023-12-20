/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "390px",

        md: "834px",

        laptop: "1300px",

        lg: "1512px",
      },
    },
  },
  plugins: [],
};
