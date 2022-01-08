<script context="module">
import Icon from "./helpers/Icon.svelte";
</script>
<script>
import Button from "./helpers/Button.svelte";

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
   
 <div class="w-full py-2"><Button text="CHECK IT OUT" link="/projects/{slug}"/></div>

        <div class="flex flex-wrap my-2 gap-2">
            {#each keyword as keyword}
            <p class="text-center hover:bg-gray-100 cursor-pointer border-zinc-200 text-sm font-mono px-2 rounded-sm border-2 capitalize">{keyword}</p>
            {/each}
        </div>
       
</main>
