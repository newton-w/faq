/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "mobile": "url('../src/images/background-pattern-mobile.svg')",
        "desktop": "url('../src/images/background-pattern-desktop.svg')"
      },
      colors: {
        lightpink: "hsl(275, 100%, 97%)",
        grayishpurple: "hsl(292, 16%, 49%)",
        darkpurple: "hsl(292, 42%, 14%) ",
        purple: "hsl(281, 55%, 45%)"

      },
      fontFamily: {
        work_sans: ['Work Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}