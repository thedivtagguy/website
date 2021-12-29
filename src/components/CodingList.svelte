<script>
  import storiesData from '$data/stories.csv'
  import parseStories from '$utils/cleanStories';
  import StoryCard from './StoryCard.svelte';

  import { onMount } from "svelte";
    let stories = [];
    let refined = [];
    let mostRecent = [];
  
    onMount(async () => {
  
    const keys = ["url","date","heading","desc","cat","author","keyword","published", "img", "path",  "month", "date", "featured"]

    stories = parseStories(storiesData, keys)
    // Get most recent story
   
    // Filter where story category contains "story" and published is true
    refined = stories.filter(story => {
      return story.category.includes("development") && story.featured === "TRUE";
    });
    // Sort by date
    mostRecent = refined.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    refined = refined.slice(0,3);
    console.log(refined)
  });
</script>
<main>
  
<!-- Section 1 -->
<section class="flex items-center justify-center py-6 bg-divpurple border-4 border-indigo-900 border-dashed min-w-screen">
    <div class="max-w-6xl px-12 mx-auto  md:px-6 xl:px-6">
        <div class="flex flex-col items-center lg:flex-row">
            <div  class="flex flex-col items-start justify-center w-full h-full px-8 mb-10 lg:mb-0 lg:w-1/2">
                <h2 id="head-text" class="text-4xl font-extrabold leading-10 tracking-tight text-white font-mono lg:w-1/2 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">Design & Dev.</h2>
                <p class="my-6 text-lg text-white">Select programming and development projects, courtesy Stack Overflow and Google.</p>
                <a href="#_" class="flex items-center justify-center px-8 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-divorange border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 hover:text-white focus:shadow-outline-indigo  md:text-lg md:px-10">View All</a>
            </div>
            <div class="w-full flex-col flex gap-4 lg:w-1/2">
                {#each refined as development}
                <div class="flex group items-center justify-between w-full col-span-1 p-2 bg-white hover:cursor-pointer hover:bg-divorange rounded-lg shadow">
                    <div class="px-4 py-1 flex flex-col">
                        <div class="relative ">
                            <p class=" text-sm text-gray-600 group-hover:text-white font-mono font-bold sm:text-lg lg:text-lg xl:text-lg">{development.heading}</p>
                        </div>

                        <h3 class="text-sm font-medium leading-5 group-hover:text-white text-gray-800 truncate">
                            {development.description}
                        </h3>
                    </div>
                </div>
                {/each}
            </div>
        </div>
    </div>
</section>

</main>

<style>
    #head-text {
        text-shadow: 2px 2px 0px #eb452b, 
                  4px 4px 0px #efa032, 
                  6px 6px 0px #46b59b, 
                  8px 8px 0px #052939;
          

    }
</style>