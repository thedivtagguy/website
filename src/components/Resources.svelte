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
    <h2 class="text-4xl -mt-4 text-black font-serif stroke-black ">Resources</h2>
    <div id="small-bar" class="mb-2"></div>
    <p class="font-sans mb-2 text-[15px] max-w-[100ch] leading-normal">
        I am conducting mentoring sessions at Srishti Institute of Art, Design and Technology on web development for students. All the resource material I create is available here.
      </p>
    <div class="flex flex-col lg:flex-row  xl:flex-row w-full md:flex-row gap-4">
      {#each refined as story}
        <div class="w-full">
          <StoryCard {...story} external/>
        </div>
      {/each}
    </div>
  </section>

  <style>
        .head-text {
      text-shadow: 2px 2px 0px #eb452b, 4px 4px 0px #efa032, 6px 6px 0px #46b59b, 8px 8px 0px #052939;
    }
    #small-bar {
    height: 2px;
    width: 100%;
    background: #000;
  }

  
  </style>