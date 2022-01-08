<script>
  import storiesData from "$data/stories.csv";
  import parseStories from "$utils/cleanStories";
  import StoryCard from "./StoryCard.svelte";

  import uniqueTags from "$utils/uniqueTags";
import ButtonSet from "./helpers/ButtonSet.svelte";

  let stories = [];
  let refined = [];
  let items = [];

  let favouriteFood = undefined;

  function handleSelect(event) {
    favouriteFood = event.detail;
  }

  function handleClear() {
    favouriteFood = undefined;
  }

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
  // Split categories into individual categories at comma

  const categoryList = uniqueTags(refined, "category");
    // Create a list of options for the select component    
    items = categoryList.map(category => {
        return {
            value: category.toLowerCase(),
            label: category
        };
    });
console.log(items)



</script>

<main>
    <div class="relative w-1/2 h-1/2">
      <aside id="photo">
        <img src="/common/assets/resources/dump.png" alt="hand" width="180" class="hand" />
        <!-- <Toc headingSelector="main :where(h2)" --toc-desktop-margin="1em 0 0 0;" title='' getHeadingIds = null/> -->
      </aside>
    </div>
  <section class="flex  pb-4 justify-between items-center mx-auto">
    <h1 class="text-5xl lg:text-6xl font-bold font-serif text-center py-4">Projects</h1>
  </section>
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
  <section id="r" class="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3  gap-4 py-4 mb-20">
    <!-- Projects where category includes data -->
    {#each refined as project}
      {#if project.category.includes("r")}
        <div>
          <StoryCard {...project} />
        </div>
      {/if}
    {/each}
  </section>
</main>

<style>
 #photo {
    position: absolute;
    left: -13.5rem;
    top: 8rem;
    max-width: 200px;
  }

  #science {
    position: absolute;
    left: -13.5rem;
    top: 1rem;
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
</style>
