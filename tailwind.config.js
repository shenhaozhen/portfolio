/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      backgroundImage: {
        'space' : "url(/space.jpg)",
        'bgimage': "url(/src/assets/herobg.png)",
      }
    },
  },
  plugins: [],
}

