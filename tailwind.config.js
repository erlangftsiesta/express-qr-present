/** @type {import('tailwindcss').Config} */
export default {
  content: ["./views/**/*","./views/*"],
  theme: {
    extend: {
      colors: {
        'usernameColor': '#0132BF',
        'discordPallet1': '#424549',
        'discordPallet1MediumDarker': '#303336',
        'discordPallet2': '#36393e',
        'discordPallet3': '#282b30',
        'discordNav': '#202225',
        'fontLogoColor': '#AEAEAE',
      },
    },
  },
  variants: {},
  plugins: [require("daisyui")],
};

