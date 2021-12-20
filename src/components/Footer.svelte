<script>
  import { onMount } from "svelte";
  import wordmark from "$svg/wordmark.svg";

  let localURL;
  let stories = [];

  const v = Date.now();
  const url = `/data/stories.json`;

  const links = [
    { name: "about", url: "https://thedivtagguy.cool/about" },
    { name: "facebook", url: "https://facebook.com/thedivtagguy.viz/" },
    { name: "twitter", url: "https://twitter.com/thedivtagguyviz/" },
    {
      name: "instagram",
      url: "https://www.instagram.com/thedivtagguy"
    },
  ];
  export const prerender = true;
  import storiesData from '$data/stories.csv'
  import parseStories from '$utils/cleanStories';

  onMount(async () => {
  
    const keys = ["url","date","heading","desc","cat","author","keyword","published", "img", "path", "slug", "month", "date"]

    stories = parseStories(storiesData, keys)
		
   // Find stories that are not the current page
    const storiesToShow = stories.filter(story => story.slug !== location.pathname.split("/")[2]);
    // From the stories that are not the current page, find the one where the category matches 'data'
    // Category is an array
    const dataStories = storiesToShow.filter(story => story.category.includes("data"));
   // Choose two random stories from dataStories
    stories = dataStories.sort(() => 0.5 - Math.random()).slice(0, 2);
    console.log(stories)
    stories = stories;
   
  });

</script>

<footer>
  <section class="stories">
    {#each stories as { heading }}
      <div class="story">
        <a href="https://thedivtagguy.cool/{heading}">
          <img
            src="https://thedivtagguy.cool/common/assets/thumbnails/640/{heading}.jpg"
            alt="thumbnail"
          />
          <span>{heading}</span>
        </a>
      </div>
    {/each}
  </section>

  <section class="about">
    <div class="wordmark">
      {@html wordmark}
    </div>
    <p class="whitespace-pre text-center">
      And Now! At Last!
      Another Website Almost But Not Completely Different From
      Some Of The Other Websites Which Aren't Quite The Same As This One Is.
  </section>

  <section class="links">
    <ul>
      {#each links as link}
        <li>
          <a href={link.url}>
            <span>{link.name.toUpperCase()}</span>
          </a>
        </li>
      {/each}
    </ul>
  </section>
</footer>
