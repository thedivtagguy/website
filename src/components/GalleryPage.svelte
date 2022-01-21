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
    let filterTerm = [];

    $: filteredImages = imageList.filter(image => image.value.tag.indexOf(filterTerm) !== -1);

    
    let isChecked = false;
    if(isChecked == false){
      filterTerm = [];
    }

</script>
  
<main>
   
    <section class="flex  lg:h-[150px] sm:h-[150px] md:h-[150px] xl:h-[150px] pb-4 justify-between items-center mx-auto">
      <div id="circle"><div class="image"></div></div>
      <h1 class="text-5xl lg:text-6xl mx-auto text-white font-medium font-britania text-center py-4">Gallery</h1>
    </section>
   
    <section class="z-2 min-h-screen border-t-2 border-gray-300 py-6 bg-white">
      <section class="py-4 grid grid-cols-1 lg:grid-cols-7 xl:grid-cols-7 sm:grid-cols-7 md:grid-cols-7 gap-4 lg:sticky sm:sticky md:sticky xl:sticky relative top-0 z-10 bg-white px-4">
        <div class="w-full col-span-7 lg:col-span-3 md:col-span-3 sm:col-span-3 xl:col-span-3">
          <p class="text-[15px] leading-tight">
            Some selected visual and motion works. I am an infrared and monochrome photographer and I also meddle with Blender from time to time.
          </p>
        </div>
          <div class="lg:flex md:flex sm:flex xl:flex col-span-4 hidden w-full flex-row items-center justify-center">
              <div class="form-check w-full">
                <input class="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  value="monochrome" bind:checked={isChecked} bind:group={filterTerm} id="monochrome">
                <label class="form-check-label inline-block font-sans  uppercase font-bold  text-lg text-gray-800" for="monochrome">
                  Monochrome
                </label>
              </div>
              <div class="form-check w-full">
                <input class="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  value="infrared" bind:checked={isChecked} bind:group={filterTerm} id="infrared">
                <label class="form-check-label inline-block font-sans  uppercase font-bold  text-lg text-gray-800" for="infrared">
                  Infrared
                </label>
              </div>
              <div class="form-check w-full">
                <input class="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  value="color" bind:checked={isChecked} bind:group={filterTerm} id="color">
                <label class="form-check-label inline-block font-sans  uppercase font-bold  text-lg text-gray-800" for="color">
                  Color
                </label>
              </div>
              <div class="form-check w-full">
                <input class="form-check-input appearance-none h-5 w-5 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox"  value="blender" bind:checked={isChecked} bind:group={filterTerm} id="blender">
                <label class="form-check-label inline-block font-sans  uppercase font-bold  text-lg text-gray-800" for="blender">
                  Blender
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
  