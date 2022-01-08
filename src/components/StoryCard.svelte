<script>
  import colors from "$data/thumbnail-colors.json";
import Button from "./helpers/Button.svelte";

  export let slug;
  export let heading;
  export let description;
  export let featured;
  export let link;

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
        </div>
        <div class="flex flex-col items-start justify-start w-full h-full pl-0 pt-4 lg:pl-4 xl:pl-4 md:pl-4  md:mb-0 md:w-1/2">
          <div
            class="flex flex-col items-start justify-start h-full space-y-3 transform   md:space-y-5"
          >
            <div class="bg-color-story" style= {style}>
              <h3 class="font-sans font-semibold uppercase text-lg text-white px-2">
                Hot off the press
              </h3>
            </div>
            <h4 class="text-4xl font-sans font-bold leading-none lg:text-5xl xl:text-5xl">
              {heading}
            </h4>
            <p class="pt-2 text-xl font-medium">{description}</p>
            <div class="w-full">
              <Button text="Read Story" 
                      link="/projects/{link}"  
                      --bg-color={lookupColor("darker")}

                      /></div>
          </div>
        </div>
      </div>
    </section>
  {:else}
    <section class="basis-1/2 max-w-[20rem] group">
      <a href="/projects/{link}" sveltekit:prefetch>
        <div class="flex flex-col justify-items-start gap-2 items-start">
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
          <h4 class="font-bold font-sans text-2xl group-hover:text-divpurple">{heading}</h4>
          <p class="font-sans group-hover:text-gray-700">{description}</p>
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
