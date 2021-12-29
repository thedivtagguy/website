<script>
  import colors from "$data/thumbnail-colors.json";
  export let slug;
  export let heading;
  export let description;
  export let month;
  export let category;
  export let keyword;
  export let featured;

  const DEFAULT_COLOR = {
    light: "hsl(0, 0%, 80%)",
    dark: "hsl(0, 0%, 44%)",
    darker: "red"
  };

  // Get matching color data from colors.json
    const getColor = () => {
        const match = colors.find(c => c.slug === slug);
        return match ? match : DEFAULT_COLOR;
    };

    // Export the color data
    export const color = getColor();

</script>

<main>
{#if featured}
<section>
    <div class="flex justify-between items-center">
        <div>
            <img
            src="/common/assets/thumbnails/32/{slug}.jpg"
            alt="thumbnail for story"
            srcset="/common/assets/thumbnails/1280/{slug}.jpg 1280w,
                  /common/assets/thumbnails/960/{slug}.jpg 960w,
                  /common/assets/thumbnails/640/{slug}.jpg 640w"
            sizes="(max-width: 320px) 640px, (max-width: 480px) 960px, 1280px"
            loading="lazy"
          />
        </div>
        <div class="flex flex-col justify-between items-stretch bg-[{color.light}]">
            <div>
                <h1>{heading}</h1>
            </div>
            <div>
                <p>{description}</p>
            </div>
            <div><a href="/{category}/{slug}">Read more</a></div>
        </div>  
    </div>
</section>
    <h1 class="text-blue-500">{heading}</h1>
    {:else}
    <div>
        <img
        src="/common/assets/thumbnails/32/{slug}.jpg"
        alt="thumbnail for story"
        srcset="/common/assets/thumbnails/1280/{slug}.jpg 1280w,
              /common/assets/thumbnails/960/{slug}.jpg 960w,
              /common/assets/thumbnails/640/{slug}.jpg 640w"
        sizes="(max-width: 320px) 640px, (max-width: 480px) 960px, 1280px"
        loading="lazy"
      />
    </div>
{/if}

</main>
