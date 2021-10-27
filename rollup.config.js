import sveltePreprocess from "svelte-preprocess";
const production = !process.env.ROLLUP_WATCH;

preprocess: sveltePreprocess({
    sourceMap: !production,
    postcss: {
      plugins: [
       require("tailwindcss"), 
       require("autoprefixer"),
      ],
    },
  })
  