<script>
  import storiesData from "$data/stories.csv";
  import parseStories from "$utils/cleanStories";
  import StoryCard from "./StoryCard.svelte";


  let stories = [];
  let refined = [];

  const keys = [
    "url",
    "date",
    "heading",
    "desc",
    "cat",
    "author",
    "keyword",
    "published",
    "img",
    "path",
    "month",
    "date",
  ];

  stories = parseStories(storiesData, keys);
  
    stories.forEach(story => {
        refined.push(story);
        }
    );

  // Sort by date
  refined = refined.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });



</script>

<main>
    <div class="relative w-1/2 h-1/2">
      <aside id="photo">
        <img src="/common/assets/resources/dump.png" alt="hand" width="180" class="hand" />
        <!-- <Toc headingSelector="main :where(h2)" --toc-desktop-margin="1em 0 0 0;" title='' getHeadingIds = null/> -->
      </aside>
    </div>
    <div id="circle"><div class="image"></div></div>
  <section class="flex lg:h-[150px] sm:h-[150px] md:h-[150px] xl:h-[150px] pb-4 justify-between items-center mx-auto">
    <h1 class="text-5xl lg:text-6xl mx-auto text-white font-bold font-serif text-center py-4">Projects</h1>
  </section>
  <section class="z-2 py-4 bg-white">
    <h2 class="text-4xl font-bold font-serif text-left border-b-2 border-black pb-2 mb-2">Data Storytelling</h2>
    <section id="data" class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3  gap-4 py-4">
      <!-- Projects where category includes data -->
      {#each refined as project}
        {#if project.category.includes("story")}
          <div>
            <StoryCard {...project} />
          </div>
        {/if}
      {/each}
    </section>
    <div class="relative w-1/2 h-1/2">
      <aside id="www">
        <img src="/common/assets/resources/www.png" alt="hand" width="180" class="hand" />
        <!-- <Toc headingSelector="main :where(h2)" --toc-desktop-margin="1em 0 0 0;" title='' getHeadingIds = null/> -->
      </aside>
    </div>
    <h2 class="text-4xl font-bold font-serif text-left border-b-2 border-black pb-2 mb-2">Web Development</h2>
    <section id="web" class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3  gap-4 py-4">
      <!-- Projects where category includes data -->
      {#each refined as project}
        {#if project.category.includes("website")}
          <div>
            <StoryCard {...project} />
          </div>
        {/if}
      {/each}
    </section>
    <div class="relative w-1/2 h-1/2">
      <aside id="science">
        <img src="/common/assets/resources/science.png" alt="hand" width="180" class="hand" />
      </aside>
    </div>
    <h2 class="text-4xl font-bold font-serif text-left border-b-2 border-black pb-2 mb-2">R Programming</h2>
    <section id="r" class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3  gap-4 ">
      <!-- Projects where category includes data -->
      {#each refined as project}
        {#if project.category.includes("r")}
          <div>
            <StoryCard {...project} />
          </div>
        {/if}
      {/each}
    </section>
  </section>
</main>

<style>
 #photo {
    position: absolute;
    left: -13.5rem;
    top: 9rem;
    max-width: 200px;
  }

  #science {
    position: absolute;
    left: -13.5rem;
    max-width: 200px;
  }

  #www {
    position: absolute;
    left: -13.5rem;
    top: 0rem;
    max-width: 200px;
  }
aside {
  padding: 1.5rem;
}

#circle {
  /* Draw big blue circle */
  background: #623CEA;
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
