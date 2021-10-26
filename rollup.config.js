import sveltePreprocess from "svelte-preprocess";
preprocess: sveltePreprocess({
    sourceMap: !production,
    postcss: {
      plugins: [
       require("tailwindcss"), 
       require("autoprefixer"),
      ],
    },
  })
  