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

<main class="flex flex-col gap-2  justify-items-start items-start">
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
    <button type="button" class="py-2 my-2 px-4 flex justify-center items-center gap-2 font-mono font-extrabold bg-zinc-800 hover:shadow-2xl text-white focus:ring-zinc-500  w-full text-center text-base   focus:ring-2 focus:ring-offset-2 out outline-2  outline rounded-sm ">
        <Icon name="link"/> 
        CHECK IT OUT
    </button>
        <div class="flex flex-wrap my-2 gap-2">
            {#each keyword as keyword}
            <p class="text-center hover:bg-gray-100 cursor-pointer border-zinc-200 text-sm font-mono px-2 rounded-sm border-2 capitalize">{keyword}</p>
            {/each}
        </div>
       
</main>