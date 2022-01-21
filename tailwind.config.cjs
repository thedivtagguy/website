const production = !process.env.ROLLUP_WATCH;
module.exports = {
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        serif: ['Evagrande', "serif"],
        sans: ['"Source Sans Pro"', "sans-serif"],
        'drops': ['"PF Goudy Initials Pro"', 'serif'],
      },
      colors: {
        divpurple: "#623cea",
        divorange: "#f85e00"
        // ...
      }
    }
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  },
  plugins: [],
  purge: {
    content: ["./src/**/*.svelte"],
    enabled: production // disable purge in dev
  }
};
