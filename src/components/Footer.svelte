<script>
  import { onMount } from "svelte";
  import wordmark from "$svg/wordmark.svg";

  let localURL;
  let stories = [];

  const v = Date.now();
  const url = `/data/stories.json`;

  const links = [
    { name: "contact", url: "https://thedivtagguy.cool/contact" },
    { name: "twitter", url: "https://twitter.com/thedivtagguy/" },
    {
      name: "instagram",
      url: "https://www.instagram.com/thedivtagguy"
    },
    { name: "github", url: "https://github.com/thedivtagguy/" }
  ];
  export const prerender = true;
  import storiesData from "$data/stories.csv";
  import parseStories from "$utils/cleanStories";

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
      "slug",
      "month",
      "date"
    ];

    stories = parseStories(storiesData, keys);

    // Find stories that are not the current page
    const storiesToShow = stories.filter((story) => story.slug !== location.pathname.split("/")[2]);
    // From the stories that are not the current page, find the one where the category matches 'data'
    // Category is an array
    const dataStories = storiesToShow.filter((story) => story.category.includes("data"));
    // Choose two random stories from dataStories
    stories = dataStories.sort(() => 0.5 - Math.random()).slice(0, 2);
    stories = stories;
  });
</script>

<footer class="max-w-5xl py-6">
  <!-- <section class="stories">
    {#each stories as { heading }}
      <div class="story">
        <a href="https://thedivtagguy.cool/{heading}">
          <span>{heading}</span>
        </a>
      </div>
    {/each}
  </section> -->

  <section class="about py-6">
    <p class="text-center text-sm font-sans font-semibold italic text-gray-600 whitespace-pre-wrap">
      Another Website Almost But Not Completely Different From Some Of The Other Websites Which
      Aren't Quite The Same As This One Is.
    </p>
  </section>

  <section class="flex mx-auto font-sans font-bold gap-6 text-xs justify-center items-center ">
    {#each links as link}
      <div>
        <a
          href={link.url}
          class="hover:underline underline-offset-2  decoration-dashed hover:text-purple-800"
        >
          <span>{link.name.toUpperCase()}</span>
        </a>
      </div>
    {/each}
  </section>
</footer>
