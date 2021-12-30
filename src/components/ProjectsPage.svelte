<script>
  import storiesData from "$data/stories.csv";
  import parseStories from "$utils/cleanStories";
  import StoryCard from "./StoryCard.svelte";
  import Select from "svelte-select";
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
  <section class="flex flex-col pb-4 justify-items-center items-center mx-auto">
    <h1 class="text-6xl font-bold font-serif text-center py-4">Projects</h1>
    <div>
      <img src="/common/assets/resources/toc.png" alt="table of contents" width="300" height="200" />
    </div>
  </section>
 
  <section class="grid grid-cols-3 gap-4">
    {#each refined as project}
      <div>
        <StoryCard {...project} />
      </div>
    {/each}
  </section>
</main>

<style>
  form {
    max-width: 400px;
    padding: 20px;
    border-radius: 4px;
  }
  label {
    margin: 0 0 10px;
  }
</style>
