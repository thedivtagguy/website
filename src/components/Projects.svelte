<script>
  import storiesData from '$data/stories.csv'
  import parseStories from '$utils/cleanStories';
  import StoryCard from './StoryCard.svelte';

  import { onMount } from "svelte";
    let stories = [];
    let refined = [];
    let mostRecent = [];
  
    onMount(async () => {
  
    const keys = ["url","date","heading","desc","cat","author","keyword","published", "img", "path",  "month", "date"]

    stories = parseStories(storiesData, keys)
    // Get most recent story
   
    // Filter where story category contains "story" and published is true
    refined = stories.filter(story => {
      return story.category.includes("story") && story.published === "TRUE";
    });
    mostRecent = refined.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    })[0];
    // Remove most recent story from refined array
    refined = refined.filter(story => {
      return story.heading !== mostRecent.heading;
    });
  });
</script>

<section>
    <StoryCard {...mostRecent} featured />

    {#each refined as story}
    <StoryCard {...story} />
    {/each}
</section>