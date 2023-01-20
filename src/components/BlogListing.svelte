<script>
  import colors from "$data/thumbnail-colors.json";

  export let slug;
  export let heading;
  export let description;
  export let link;
  export let fullLink;
  export let isExternal;
  export let image;
  export let keyword;
  export let day;
  export let year;
  export let monthShort;
  export let category;

  console.log("slug: " + image);



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

  if (isExternal == "TRUE" || isExternal == "true") {
    url = fullLink;
  } else if (category == "blog") {
    url = "/blog/" + link;
  } else {
    url = fullLink;
  }

  // Add year after blog/
  if (category.includes("post")) {
    url = "/blog/" + year + "/" + link;
  }
</script>

<!-- Display blogpost info -->
<a href={url}  >
  <!-- If i is even, add border. If odd, no border -->
  <div
    class="w-full my-4 pb-8 group border-t-2 group border-black hover:cursor-pointer gap-4 flex flex-col md:flex-row lg:flex-row justify-between items-center"
  >
  {#if image === 'TRUE' || image === 'true' }
  <img class="thumbnail min-h-[120px] w-full md:w-[240px] grayscale group-hover:grayscale-0 transition-all duration-900 ease-in-out"
    width="240"
    src="/common/assets/thumbnails/32/{slug}.jpg"
    alt="thumbnail for story"
    srcset="/common/assets/thumbnails/1280/{slug}.jpg 1280w,
            /common/assets/thumbnails/960/{slug}.jpg 960w,
            /common/assets/thumbnails/640/{slug}.jpg 640w"
    sizes="(max-width: 320px) 640px, (max-width: 480px) 960px, 1280px"
  />
{:else if image === 'FALSE' || image === 'false'}
<img width="240" height="500" src="/common/assets/thumbnails/960/undefined.jpg" class="thumbnail min-h-[120px] w-full md:w-[240px] grayscale group-hover:grayscale-0 transition-all duration-900 ease-in-out" alt="thumbnail forfgff  story" />
{:else}
<img width="640" height="500" src={image} alt="thumbnail story" />
{/if}

    <div class="flex gap-2 flex-col w-full">
      <h2
        class="text-4xl w-full group-hover:underline decoration-wavy  flex-grow font-bold text-left"
      >
        
        {heading}
      </h2>

      <p class="text-left truncate text-ellipsis text- max-w-[400px] font-mono text-sm">
        {description}
      </p>
    </div>
    <!-- Display tags -->
    <div class="flex flex-row justify-center self-start md:self-auto items-center">
      <div class="flex md:min-w-[70px] flex-row md:flex-col gap-2">
        {#each keyword as tag, i}
          {#if i < 2}
            <p
              class="text-sm capitalize text-center font-semibold text-white px-4 rounded-sm border-[3px] border-black bg-gray-700"
            >
              {tag}
            </p>
          {/if}
        {/each}
      </div>
      <p
        class="font-bold mx-auto self-center md:rotate-90 font-serif text-center md:text-2xl  min-w-[100px] max-w-[150px] md:border-b-2  border-black"
      >
        {day} / {monthShort}
      </p>
    </div>
  </div>
</a>

<style>

  .thumbnail {
    /* Right border */
    border-right: 2px solid #000;
  }

  @media (max-width: 768px) {
    .thumbnail {
      border-right: none;
    }
  }
</style>