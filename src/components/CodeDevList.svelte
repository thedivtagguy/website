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
      "path",
      "month",
      "date",
      "featured"
    ];

    stories = parseStories(storiesData, keys);
    // Get most recent story

    // Filter where story category contains "story" and published is true
    refined = stories.filter((story) => {
      return story.category.includes("development") && story.featured === "TRUE";
    });
    // Sort by date
    mostRecent = refined.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });

    refined = refined.slice(0, 3);
    console.log(refined);
  });
</script>
<main>
    <section id="code"  class="flex py-4 px-4 lg:py-10 md:py-12 sm:py-10 flex-col lg:flex-row md:flex-row items-center justify-center  bg-divpurple border-4 border-indigo-900 border-dashed md:px-4 lg:px-4">
     <div class="flex flex-col items-start justify-center  mb-10 lg:mb-0 lg:w-1/2">
        <h2 id="head-text" class="text-5xl font-extrabold tracking-tight text-white font-mono  sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl" >
            Code & Dev.
        </h2>
          <p class="my-6 text-lg lg:w-2/3 text-white">
            Programming and development insanities that escaped the lab.
          </p>
          <a href="/projects/#web" class="flex items-center w-2/3 justify-center px-8 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-divorange border border-transparent rounded-md shadow hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 hover:text-white focus:shadow-outline-indigo  md:text-lg md:px-10" >
              View All
          </a>
        </div>
        <!-- Second column -->
        <div class="flex flex-col justify-start items-start gap-4">
            {#each refined as story}
            <a sveltekit:prefetch class="w-full" href="/projects/{story.link}">
                <div  class="flex-col w-full flex justify-items-start group listing hover:cursor-pointer hover:bg-divorange rounded-lg shadow p-4 items-start">
                    <h3 class="text-sm text-gray-600 group-hover:text-white break-normal font-sans uppercase font-bold sm:text-lg lg:text-lg xl:text-lg">{story.heading}</h3>
                    <h4 class="text-sm font-medium leading-5 break-normal group-hover:text-white text-gray-800 ">{story.description}</h4>
                </div>
            </a>
            {/each}
        </div>
  </section>
</main>

<style>
    #head-text {
      text-shadow: 2px 2px 0px #eb452b, 4px 4px 0px #efa032, 6px 6px 0px #46b59b, 8px 8px 0px #052939;
    }
  
    #code {
      background-image: url("/common/assets/resources/adventures.png");
      background-repeat: no-repeat;
      background-size: 31%;
      background-position: 14.8rem;
      /* Blend mode */
      background-blend-mode: multiply;
      /* Opacity */
    }

    @media (max-width: 768px) {
      #code {
        background-position: 0rem 3rem;
        background-size: 100%;
      }
    }
  </style>
  