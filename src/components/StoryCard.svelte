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
    darker: "hsl(0, 0%, 34%)"
  };
</script>

<main>
{#if featured}
<section>
    <div class="flex justify-between items-center">
        <div>
            <img src="/common/assets/thumbnails/960/{slug}.jpg" alt="{heading}" />
        </div>
        <div>
            <h1>{heading}</h1>
            <p>{description}</p>
            <a href="/{category}/{slug}">Read more</a>
        </div>  
    </div>
</section>
    <h1 class="text-blue-500">{heading}</h1>
    {:else}
    <div>
        <img src="/common/assets/thumbnails/960/{slug}.jpg" alt="{heading}" />
    </div>
{/if}

</main>
