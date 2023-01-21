import remarkGithub from "remark-github";
import remarkAbbr from "remark-abbr";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { defineMDSveXConfig as defineConfig } from "mdsvex";
import relativeImages from "mdsvex-relative-images";
const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  smartypants: {
    dashes: "oldschool"
  },

  remarkPlugins: [
    [
      remarkGithub,
      {
        // TODO: Replace with your own repository
        repository: "https://github.com/thedivtagguy/website.git"
      }
    ],
    remarkAbbr,
    relativeImages
  ],
  rehypePlugins: [
    rehypeSlug,
    [
      rehypeAutolinkHeadings,
      {
        behavior: "wrap"
      }
    ]
  ]
});

export default config;
