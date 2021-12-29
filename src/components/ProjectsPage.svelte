<script>
  import storiesData from "$data/stories.csv";
  import parseStories from "$utils/cleanStories";
  import StoryCard from "./StoryCard.svelte";
  import Select from "svelte-select";
  import uniqueTags from "$utils/uniqueTags";

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
    "featured"
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
  <section class="flex flex-col justify-items-center items-center mx-auto">
    <h1 class="text-6xl font-bold font-serif text-center py-4">Projects</h1>
    <div>
      <img src="/common/assets/resources/toc.png" alt="table of contents" width="300" />
    </div>
  </section>
  <section class="flex flex-row justify-items-center items-center">
    <div class=" flex-grow">
      <form>
        <label for="food">Category</label>
        <Select id="food" class="w-full" {items} on:select={handleSelect} on:clear={handleClear} />
      </form>

      {#if favouriteFood}
        <!-- Display only those refined stories where  category matches selection-->
       {favouriteFood.value}
      {/if}
    </div>
  </section>
  {#each refined as project}
    <p>{project.heading}</p>
  {/each}
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
