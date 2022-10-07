const { colors } = require(`tailwindcss/defaultTheme`)

module.exports = {
  mode: "jit", // see https://tailwindcss.com/docs/just-in-time-mode
  purge: ["./components/**/*.js", "./pages/**/*.js", "./lib/**/*.js"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        'orange': {"50":"#fffbeb","100":"#fef3c7","200":"#fde68a","300":"#fcd34d","400":"#fbbf24","500":"#eb5b28","600":"#d97706","700":"#b45309","800":"#92400e","900":"#78350f"}
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
        },
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
