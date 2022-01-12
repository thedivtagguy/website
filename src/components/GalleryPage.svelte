<script context="module">
  	import Masonry from 'svelte-bricks';
    import { onMount } from 'svelte';
    import images from "$data/gallery.json";
</script>

<script>
    let GalleryItem;
    let show = false;

    onMount(async () => {
      const module = await import('./GalleryItem.svelte');
      GalleryItem = module.default;
      show = true;
    })

    let [minColWidth, maxColWidth, gap] = [300, 1500, 10]

    let imageList = images.images;
    let filterTerm = "";

    $: filteredImages = imageList.filter(image => image.value.tag.indexOf(filterTerm) !== -1);
    let isChecked = false;
    if(isChecked == false){
      filterTerm = "";
    }

</script>
  
<main>
   
    <section class="flex  lg:h-[150px] sm:h-[150px] md:h-[150px] xl:h-[150px] pb-4 justify-between items-center mx-auto">
      <div id="circle"><div class="image"></div></div>
      <h1 class="text-5xl lg:text-6xl mx-auto text-white font-bold font-serif text-center py-4">Gallery</h1>
    </section>
   
    <section class="z-2 min-h-screen border-t-2 border-gray-300 py-4 bg-white">
      <section class="py-4 grid grid-cols-5 gap-4">
        <div class="col-span-3">
          <p>If you're using webpack with svelte-loader, make sure that you add "svelte" to resolve.mainFields in your webpack config. This ensures that webpack imports the uncompiled component (src/index.html) rather than the compiled version (index.mjs) — this is more efficient.
          </p>
        </div>
          <div class="flex col-span-2 w-full flex-row justify-center">
              <div class="form-check w-full">
                <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  value="monochrome" bind:checked={isChecked} bind:group={filterTerm} id="flexCheckDefault">
                <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
              <div class="form-check w-full">
                <input class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckChecked" checked>
                <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked">
                  Checked checkbox
                </label>
              </div>
          </div>
      </section>
        <Masonry items={filteredImages} let:item {minColWidth}
        {maxColWidth}
        {gap}>
          {#if show}
            <svelte:component this={GalleryItem} image={item}/>
          {:else}
          <div class="h-[600px] bg-gray-200 border-2 rounded-md shadow-xl animate-pulse"></div>
          {/if}
        </Masonry>

    </section>
</main>
  
  <style>

  
  #circle {
    /* Draw big blue circle */
    background: #F35E08;
    background-image: url("/common/assets/resources/light-wool.png");
    max-width: 950px;
    max-height: 800px;
    width: 60%;
    height: 100%;
    border-radius: 50%;
    z-index: -10;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
  }
  
  .image {
    background-image: url("/common/assets/resources/camera.png");
    background-size: 54%;
    background-repeat: no-repeat;
    background-position: 70% 8px;
    width: 90%;
    height: 100%;
    mix-blend-mode: multiply;
    opacity: 0.6;
  }
  
  /* Mobile circle */
  @media screen and (max-width: 600px) {
    #circle {
      width: 86%;
      height: 30%;
      top: 88px;
    }
    .image {
      background-size: 100%;
      background-position: 10px 0px;
    }
  }
  </style>
  