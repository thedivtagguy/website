<script context="module">
	import Masonry from 'svelte-bricks';
    import { onMount } from 'svelte';
    import images from "$data/gallery.json";

</script>

<script>
    let GalleryItem;

onMount(async () => {
  const module = await import('./GalleryItem.svelte');
  GalleryItem = module.default;
})
    let [minColWidth, maxColWidth, gap] = [300, 1500, 10]
    let width, height
    console.log(images);
</script>
  
<main>
    <div id="circle"><div class="image"></div></div>
    <section class="flex  lg:h-[150px] sm:h-[150px] md:h-[150px] xl:h-[150px] pb-4 justify-between items-center mx-auto">
      <h1 class="text-5xl lg:text-6xl mx-auto text-white font-bold font-serif text-center py-4">Gallery</h1>
    </section>
    <section class="z-2 border-t-2 border-gray-300 py-4 bg-white">
        <Masonry items={images.images} let:item {minColWidth}
        {maxColWidth}
        {gap}>
            <svelte:component this={GalleryItem} image={item}/>
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
    background-image: url("/common/assets/resources/projects.png");
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: 75% 0px;
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
  