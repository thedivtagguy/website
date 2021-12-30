<script>
  import colors from "$data/thumbnail-colors.json";
  export let slug;
  export let heading;
  export let description;
  export let featured;
  export let keyword;

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

  console.log(style);
</script>

<main class="py-2">
  {#if featured}
    <section>
      <div class="relative w-1/2 h-1/2">
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
        <div class="flex flex-col items-start justify-start w-full h-full  pl-4 md:mb-0 md:w-1/2">
          <div
            class="flex flex-col items-start justify-start h-full space-y-3 transform   md:space-y-5"
          >
            <div class="bg-slate-800">
              <h3 class="font-sans font-semibold uppercase text-lg text-white px-2">
                Hot off the press
              </h3>
            </div>
            <h4 class="text-4xl font-sans font-bold leading-none lg:text-5xl xl:text-5xl">
              {heading}
            </h4>
            <p class="pt-2 text-xl font-medium">{description}</p>
            <button
              class="text-center font-bold uppercase bg-[{DEFAULT_COLOR.darker}] w-full py-4 rounded-none"
              >Read Story</button
            >
          </div>
        </div>
      </div>
    </section>
  {:else}
    <section class="basis-1/2">
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
        <h4 class="font-bold font-sans text-2xl">{heading}</h4>
        <p class="font-sans">{description}</p>
        <!-- <div>
          {#each keyword as k}
          <span class="text-sm p-1 mx-1 bg-gray-100 rounded-md font-mono  uppercase">{k}</span>
          {/each}
        </div> -->
      </div>
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
</style>
