export const SlugFromPath = (path) => {
  path.match(/([\w-]+)\.(svelte\.md|md|svx)/i)?.[1] ?? null;
};
