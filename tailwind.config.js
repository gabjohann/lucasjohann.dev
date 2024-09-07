/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.tsx', './index.html'],
  theme: {
    extend: {
      fontFamily: {
        baloo: ['Baloo 2', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
      },
      backgroundImage: {
        noise: "url('/bg-noise.png')",
      },
      dropShadow: {
        custom: '0 1px 1px rgb(255 255 255 / 1)',
      },
    },
  },
  plugins: [],
}
