<script>
  import StoryCard from "./StoryCard.svelte";
  import storiesData from "$data/stories.csv";
  import parseStories from "$utils/cleanStories";
  import wordmark from "$svg/wordmark.svg";


  export let keywords;
  export let current;
  let stories = [];

  export const prerender = true;

  const links = [
    { name: "contact", url: "https://thedivtagguy.com/contact" },
    { name: "twitter", url: "https://twitter.com/thedivtagguy/" },
    {
      name: "instagram",
      url: "https://www.instagram.com/thedivtagguy"
    },
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

    console.log(stories)

    }

    const external = true;
</script>

<footer class="max-w-5xl py-12">
{#if keywords}

<div class="grid  max-w-md justify- justify-items-center items-center mx-auto grid-cols-5">
  <div class="col-span-1"><div class="w-[70px]">
    <a sveltekit:prefetch  href="/" aria-label="The thedivtagguy">{@html wordmark}</a>
  </div></div>
  <div class="col-span-4"><img src="/common/assets/resources/footer.png" alt="footer image" class="mx-auto py-6" width="500"/></div>
</div>
<section class="flex-col  lg:w-2/3 sm:w-2/3 xl:w-2/3 md:w-2/3 lg:flex-row sm:flex-row md:flex-row mx-auto flex font-sans font-bold  text-xs justify-start items-start ">
  {#each stories as story}
    <div class="p-2">
      <StoryCard {...story} {external} />
    </div>
  {/each}
</section>

{/if}
  <section class="about ">
    <div class="w-[40px] mx-auto pb-4">
      <a sveltekit:prefetch  href="/" aria-label="The thedivtagguy">{@html wordmark}</a>
    </div>
    <p class="text-center text-sm font-sans font-semibold italic text-gray-600 whitespace-pre-wrap">
      Another Website Almost But Not Completely Different From Some Of The Other Websites Which
      Aren't Quite The Same As This One Is.
    </p>
    <p class="text-center mx-auto text-sm font-sans font-semibold py-4 text-divpurple whitespace-pre-wrap">
      &lt;/&gt; with Svelte, Tailwind and &lt;3 in Bangalore, IN
    </p>
  </section>

  <section class="flex mx-auto font-sans font-bold gap-6 text-xs justify-center items-center ">
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
</footer>
