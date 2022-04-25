<script>
    import storiesData from "$data/stories.csv";
  import parseStories from "$utils/cleanStories";
  import StoryCard from "./StoryCard.svelte";

  import { onMount } from "svelte";
  let stories = [];
  let refined = [];
  let mostRecent = [];

  onMount(async () => {
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
      "isExternal",
      "path",
      "month",
      "date",
      "featured"
    ];

    stories = parseStories(storiesData, keys);
    // Get most recent story

    // Filter where story category contains "teaching" and published is true
    refined = stories.filter((story) => {
      return story.category.includes("teaching");
    });
    // Sort by date
    mostRecent = refined.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    refined = refined.slice(0, 3);
    console.log(refined);
    
  });
</script>
<section class="relative py-8">
    <div class="flex flex-col lg:flex-row  xl:flex-row w-full md:flex-row gap-4">
      {#each refined as story}
        <div class="w-full">
          <StoryCard {...story}/>
        </div>
      {/each}
    </div>
  </section>