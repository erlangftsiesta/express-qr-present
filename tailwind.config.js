/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*","./views/*"],
  theme: {
    extend: {
      colors: {
        'usernameColor': '#0132BF',
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
};

