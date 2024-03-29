import fs from "fs";
import path from "path";
import adapterStatic from "@sveltejs/adapter-static";
import svg from "vite-plugin-svgstring";
import dsv from "@rollup/plugin-dsv";
import sveltePreprocess from "svelte-preprocess";
import autoprefixer from "autoprefixer";
import { mdsvex } from "mdsvex";
import mdsvexConfig from "./mdsvex.config.js";
const { thedivtagguy } = JSON.parse(fs.readFileSync("package.json", "utf8"));
const dev = process.env.NODE_ENV === "development";
const dir = thedivtagguy ? thedivtagguy.subdirectory : "";
const prefix = dir.startsWith("/") ? "" : "/";
const base = dev || !dir ? "" : `${prefix}${dir}`;

const config = {
  extensions: [".svelte", ...mdsvexConfig.extensions],
  preprocess: [
    mdsvex(mdsvexConfig),
    sveltePreprocess({
      preserve: ["ld+json"],
      postcss: {
        plugins: [autoprefixer]
      }
    })
  ],
  kit: {
    adapter: adapterStatic(),
    target: "#svelte",
    vite: {
      resolve: {
        alias: {
          $actions: path.resolve("./src/actions"),
          $components: path.resolve("./src/components"),
          $data: path.resolve("./src/data"),
          $stores: path.resolve("./src/stores"),
          $styles: path.resolve("./src/styles"),
          $svg: path.resolve("./src/svg"),
          $utils: path.resolve("./src/utils")
        }
      },
      plugins: [dsv(), svg()],
      optimizeDeps: {
        exclude: ["@svelte-video-player", "svelte-fuzzy"]
      }
    },
    paths: {
      base
    }
  }
};

export default config;
