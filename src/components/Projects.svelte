<script context = "module">
  export const prerender = true;
</script>

<script>
  import storiesData from "$data/stories.csv";
  import parseStories from "$utils/cleanStories";
  import StoryCard from "./StoryCard.svelte";

  let stories = [];
  let refined = [];
  let mostRecent = [];
    const keys = [
      "url",
      "date",
      "heading",
      "desc",
      "cat",
      "author",
      "keyword",
      "published",
      "isExternal",
      "img",
      "path",
      "month",
      "date"
    ];

    stories = parseStories(storiesData, keys);
    // Get most recent story

    // Filter where story category contains "story" and published is true
    refined = stories.filter((story) => {
      return  story.category.includes("project") || story.category.includes("story") && story.published === "TRUE";
    });
    mostRecent = refined.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    })[0];
    
    // Remove most recent story from refined array
    refined = refined.filter((story) => {
      return story.heading !== mostRecent.heading;
    });
    // Get first three stories
    refined = refined.slice(0, 3);
    const external = true;
</script>

<section class="relative">
  <div class="py-2">
    <StoryCard {...mostRecent} featured external />
  </div>
  <div class="mark"></div>
  <div class="flex flex-col lg:flex-row  xl:flex-row w-full md:flex-row gap-4">
    {#each refined as story}
      <div class="w-full">
        <StoryCard {...story} {external}/>
      </div>
    {/each}
  </div>
</section>

<style>
.mark {
  /* Draw big blue circle */
  background: #F85E00;
  background-image: url("/common/assets/resources/light-wool.png");

  width: 75%;
  height: 100%;
  border-radius: 50%;
  z-index: -10;
  opacity: 0.2;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}

/* Mobile Mark */
@media (max-width: 768px) {
  .mark {
    width: 90%;
    height: 20%;
    border-radius: 50%;
    z-index: -10;
    opacity: 0.5;
    position: absolute;
    top: 270px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>