<script>
  import colors from "$data/thumbnail-colors.json";
import Button from "./helpers/Button.svelte";
import imageURL from "$utils/imageURL.js";
  export let slug;
  export let heading;
  export let description;
  export let featured;
  export let link;
  export let fullLink;
  export let external;
  export let isExternal;
  export let image;
  export let category;
  // Choose first item from category
  const DEFAULT_COLOR = {
    light: "hsl(0, 0%, 80%)",
    dark: "hsl(0, 0%, 44%)",
    darker: "red"
  };

  const lookupColor = (version) => {
    const match = colors.find((d) => d.slug === slug);
    return match ? match[version] : DEFAULT_COLOR;
  };

  const style = `
  --name: ${slug}
	--light: ${lookupColor("light")};
	--dark: ${lookupColor("dark")};
	--darker: ${lookupColor("darker")};
	--default-light: ${DEFAULT_COLOR["light"]};
	--default-dark: ${DEFAULT_COLOR["dark"]};
	--default-darker: ${DEFAULT_COLOR["darker"]};
  `;

export let url;
const startsWithHTTP = (string) => string.startsWith("http");
if(isExternal && isExternal != "FALSE" && isExternal != "false" && startsWithHTTP(isExternal)) {
  url = isExternal;

}
else if (category == "blog")
{
  url = "/blog/" + link;
}
else {
  url = "/projects/" + link;
}


</script>

<main class="py-2">
  {#if featured}
    <section>
      <div class="relative hidden lg:block xl:block w-1/2 h-1/2">
        <aside>
          <img src="/common/assets/resources/hand.png" alt="hand" width="120" class="hand" />
        </aside>
      </div>
      <div class="flex  flex-col items-start  md:flex-row">
        
        <div class="w-full">

<!-- If image field has a link, use that link for source. Otherwise if it is blank, use slug -->

          {#if !image}
          <img
            width="640"
            height="500"
            src="/common/assets/thumbnails/32/{slug}.jpg"
            alt="thumbnail for story"
            srcset="/common/assets/thumbnails/1280/{slug}.jpg 1280w,
                    /common/assets/thumbnails/960/{slug}.jpg 960w,
                    /common/assets/thumbnails/640/{slug}.jpg 640w"
            sizes="(max-width: 320px) 640px, (max-width: 480px) 960px, 1280px"
          />
          {:else}
          <img
            width="640"
            height="500"
            src="{image}"
            alt="thumbnail for story"
          />
          {/if}
        </div>
        <div class="flex flex-col items-start justify-between w-full h-full pl-0 pt-4 lg:pt-0 md:pt-0 sm:pt-0  lg:pl-4 xl:pl-4 md:pl-4  md:mb-0 md:w-1/2">
          <div
            class="flex flex-col items-start justify-between  space-y-3 flex-grow  md:space-y-5"
          >
            <div class="bg-color-story" >
              <h3 class="font-sans font-semibold uppercase text-lg bg-zinc-800 text-white px-2">
                Hot off the press
              </h3>
            </div>
            <div>
              <h4 class="text-4xl font-sans font-bold leading-none lg:text-5xl xl:text-5xl">
                {heading}
              </h4>
            </div>
            <p class="pt-2 text-xl font-medium">{description}</p>
            <div class="w-full">
              <Button text="Read More" 
                      link="/projects/{link}" 
                      target="_blank" />
            </div>
          </div>
        </div>
      </div>
    </section>
  {:else}
    <section class="basis-1/2  group">
      <a href="{url}"  rel={external ? "external" : ''}>
        <div class="flex flex-col justify-items-start gap-2 items-start">
         
         {#if !image}
          <img
            width="600"
            height="720"
            src="/common/assets/thumbnails/32/{slug}.jpg"
            alt="thumbnail for story"
            srcset="/common/assets/thumbnails/1280/{slug}.jpg 1280w,
                  /common/assets/thumbnails/960/{slug}.jpg 960w,
                  /common/assets/thumbnails/640/{slug}.jpg 640w"
            sizes="(max-width: 320px) 640px, (max-width: 480px) 960px, 1280px"
            loading="lazy"
          />
          {:else}
          <img
            width="600"
            height="720"
            src="{image}"
            alt="thumbnail for story"
            loading="lazy"
          />
          {/if}
          <h4 class="font-bold font-sans text-2xl group-hover:text-divpurple">{heading}</h4>
          <p class="font-sans max-w-lg group-hover:text-gray-700">{description}</p>
        </div>
      </a>
    </section>
  {/if}
</main>

<style>
  img {
    max-width: 100%;
    height: auto;
    aspect-ratio: 16 / 9;
  }

  aside {
    position: absolute;
    left: -6rem;
    top: 2rem;
    max-width: 200px;
  }

  .bg-color-story{
    background-color: var(--darker);
  }
</style>
