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
        'shihuai': "url(/ygo1109/sekai1.webp)",
        'bgimage': "url(/src/assets/herobg.png)",
      }
    },
  },
  plugins: [],
}

