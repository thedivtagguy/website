<script>
  import updated from "$data/last_update.json";
</script>

<header class="py-1">
  <div class="mx-auto pb-2  border-double border-gray-900">
    <div class="z-20 mx-auto">
      <div class="lg:flex  sm:flex xl:flex md:flex hidden justify-between items-center">
        <p class="font-sans text-xs font-semibold">Issue Published 

          <!-- Format as date  -->
          <time datetime={updated.last_update}>{updated.last_update}</time>
        </p>
      </div>
      <h2 class="lg:text-5xl pb-[1px] text-2xl relative  font-serif font-bold sm:text-4xl">
        Hi, I'm Aman. I create a general mishmash of <span
          class="bg-clip-text text-transparent  bg-gradient-to-l from-purple-800 via-violet-900 to-purple-800"
          >code, data & art.</span
        >
        <span class="hidden border-opacity-20 lg:inline xl:inline md:inline sm:inline text-[9px] py-1 font-sans font-semibold border-2 border-black px-2 right-0 bottom-0 absolute">
          A Scrapbook Journal of Programming & Artistic Gimmickry
        </span>
       

      </h2>
      
    </div>
    <div id="big-bar" class="mb-1 mt-4"></div>
    <div id="small-bar"></div>
  </div>
</header>

<style>
  #big-bar {
    height: 10px;
    width: 100%;
    background: #000;
  }

  #small-bar {
    height: 5px;
    width: 100%;
    background: #000;
  }

  /* Mobile */
  @media (max-width: 768px) {
    #big-bar {
      height: 8px;
    }

    #small-bar {
      height: 2px;
    }
  }
</style>
