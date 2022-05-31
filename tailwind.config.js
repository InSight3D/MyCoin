module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: false,
    themes: true,
    base: false,
    utils: false,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
}

