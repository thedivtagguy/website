const production = !process.env.ROLLUP_WATCH;
module.exports = {
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Source Sans Pro"', "sans-serif"]
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
