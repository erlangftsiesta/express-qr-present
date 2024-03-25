/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*","./views/*"],
  theme: {
    extend: {
      colors: {
        'hijau': {  DEFAULT: '#C80000',  50: '#FF8181',  100: '#FF6C6C',  200: '#FF4343',  300: '#FF1B1B',  400: '#F10000',  500: '#C80000',  600: '#900000',  700: '#580000',  800: '#200000',  900: '#000000',  950: '#000000'},
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
};