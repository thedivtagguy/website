<script>
  import StoryCard from "./StoryCard.svelte";
  import storiesData from "$data/stories.csv";
  import parseStories from "$utils/cleanStories";
  import wordmark from "$svg/wordmark.svg";
  import ToolList from "./ToolList.svelte";

  export let keywords;
  export let current;
  let stories = [];

  export const prerender = true;

  const links = [
    { name: "contact", url: "https://thedivtagguy.com/contact" },
    { name: "twitter", url: "https://twitter.com/thedivtagguy/" },
    { name: "instagram", url: "https://www.instagram.com/thedivtagguy"},
    { name: "github", url: "https://github.com/thedivtagguy/" }
  ];

    if(keywords){
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
      "slug",
      "month",
      "date"
    ];

    stories = parseStories(storiesData, keys);

    stories = stories.filter(story => {
      return story.keyword.some(keyword => keywords.includes(keyword));
    });

    // Remove stories.link where it is the same as current
    stories = stories.filter(story => {
      return story.link !== current && story.published !== "FALSE";
    });

    // Show two random stories
    stories = stories.sort(() => 0.5 - Math.random());
    stories = stories.slice(0, 2);

    

    }

    const external = true;
</script>

<footer class="max-w-5xl bg-white py-4">
{#if keywords}
<img src="/common/assets/resources/footer.png" alt="footer" class="mx-auto py-6" width="300"/>
<section class="flex-col  lg:w-2/3 sm:w-2/3 xl:w-2/3 md:w-2/3 lg:flex-row sm:flex-row md:flex-row mx-auto flex font-sans   text-xs justify-start items-start ">
  {#each stories as story}
    <div class="p-2">
      <StoryCard {...story} {external} />
    </div>
  {/each}
</section>

{/if}
<section class="about py-4">
  <div class="w-[40px] mx-auto pb-4">
    <a sveltekit:prefetch  href="/" aria-label="The thedivtagguy">{@html wordmark}</a>
  </div>
  <section class="flex mx-auto font-sans pb-4 font-bold gap-6 text-xs justify-center items-center ">
    {#each links as link}
      <div>
        <a
          href={link.url}
          class="hover:underline underline-offset-2  decoration-dashed hover:text-purple-800">
          <span>{link.name.toUpperCase()}</span>
        </a>
      </div>
    {/each}
  </section>
  <p class="text-center mx-auto text-xs font-mono font-semibold  text-black  whitespace-pre-wrap">
    &lt;/&gt; with Svelte, Tailwind, Google Docs & &lt;3 in Bangalore, IN
  </p>
  <p class="text-center text-[0.65rem] leading-snug font-sans font-semibold italic py-4 text-gray-600">
    Another Website Almost But Not Completely Different From Some Of The Other Websites Which Aren't Quite The Same As This One Is.
  </p>
</section>

  
  <img
  src="/common/assets/resources/end.png"
  alt="dinosaurs are dying"
  width="120"
  class="mx-auto "
  loading="lazy"
  />
</footer>
