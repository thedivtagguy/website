<script>
  import storiesData from "$data/stories.csv";
  import parseStories from "$utils/cleanStories";
  import StoryCard from "./StoryCard.svelte";

  let stories = [];
  let refined = [];
  let mostRecent = [];

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
      "date"
    ];

    stories = parseStories(storiesData, keys);
    // Get most recent story

    // Filter where story category contains "story" and published is true
    refined = stories.filter((story) => {
      return  story.category.includes("story") && story.published === "TRUE";
    });
    mostRecent = refined.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    })[0];
    console.log(mostRecent);
    // Remove most recent story from refined array
    refined = refined.filter((story) => {
      return story.heading !== mostRecent.heading;
    });
    // Get first three stories
    refined = refined.slice(0, 3);

</script>

<section class="">
  <StoryCard {...mostRecent} featured />
  <div class="flex flex-col lg:flex-row py-4 xl:flex-row w-full md:flex-row gap-4">
    {#each refined as story}
      <div class="w-full">
        <section class="basis-1/2  group">
          <a href="/projects/{story.link}">
            <div class="flex flex-col justify-items-start gap-2 items-start">
              <img
                width="600"
                height="720"
                src="/common/assets/thumbnails/32/{story.slug}.jpg"
                alt="thumbnail for story"
                srcset="/common/assets/thumbnails/1280/{story.slug}.jpg 1280w,
                      /common/assets/thumbnails/960/{story.slug}.jpg 960w,
                      /common/assets/thumbnails/640/{story.slug}.jpg 640w"
                sizes="(max-width: 320px) 640px, (max-width: 480px) 960px, 1280px"
                loading="lazy"
              />
              <h4 class="font-bold font-sans text-2xl group-hover:text-divpurple">{story.heading}</h4>
              <p class="font-sans group-hover:text-gray-700">{story.description}</p>
            </div>
          </a>
        </section>
      </div>
    {/each}
  </div>
</section>
