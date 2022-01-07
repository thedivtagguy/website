<script context="module">
import Icon from "./helpers/Icon.svelte";
</script>
<script>
    export let keyword;
    export let heading;
    export let link;
    export let category;
    export let slug;
    export let description;
</script>

<main class="flex flex-col gap-2 border-2 p-4 border-dashed border-zinc-300 justify-items-start items-start">
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
    <h3 class="text-4xl font-bold text-left">{heading}</h3>
    <p class="text-left">{description}</p>
    
        <div class="flex flex-wrap  gap-2">
            {#each keyword as keyword}
            <p class="text-center border-zinc-200 text-sm font-mono px-2 rounded-sm border-2 capitalize">{keyword}</p>
            {/each}
        </div>
        <button type="button" class="py-2 my-4 px-4 flex justify-center items-center gap-2   hover:bg-zinc-800 hover:text-white focus:ring-zinc-500  text-black w-full text-center text-base font-semibold  focus:ring-2 focus:ring-offset-2 out outline-2  outline rounded-sm ">
            <Icon name="link"/> 
            Check it Out
        </button>
</main>