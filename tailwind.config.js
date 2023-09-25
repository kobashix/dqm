/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primary : "#e41c24",
        secondary : "",
        tertiary: "",
      },
      fontFamily: {
        inter: ['Space Grotesk', "sans-serif"]
      }
    },
    screens: {
      sm: "320px",
      md: "768px",
      lg: "1024px",
    }
  },
  plugins: [],
}