<script>
  import storiesData from "$data/stories.csv";
  import parseStories from "$utils/cleanStories";
  import BlogListing from "./BlogListing.svelte";
  import StoryCard from "./StoryCard.svelte";

  let stories = [];
  let refined = [];

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

  stories.forEach((story) => {
    refined.push(story);
  });

  // Sort by date
  refined = refined.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });

  // // Organize by year
  // // LIke this:
  // // [
  // //   {
  //   2022: [
  //     {
  //       title: "title",
  //       date: "date",
  //       desc: "desc",
  //       category: "category",
  //     },
  //     {
  //       title: "title",
  //       date: "date",
  //       desc: "desc",
  //       category: "category",
  //     },
  //   ],
  // //   },
  // //   {
  //   2021: [
  //     {
  //       title: "title",
  //       date: "date",
  //       desc: "desc",
  //       category: "category",
  //     },
  //     {
  //       title: "title",
  //       date: "date",
  //       desc: "desc",
  //       category: "category",
  //     },
  //   ],
  // ]

  // Organize by year

  let posts = [];
  // Year is in year key
  refined.forEach((post) => {
    // Keep only blog posts
    if (!post.category.includes("blog")) return;
    // Get year from date
    const year = post.year;
    // Check if year exists in posts
    const yearExists = posts.find((post) => post.year === year);
    // If year exists, push post to posts
    if (yearExists) {
      yearExists.posts.push(post);
    } else {
      // If year doesn't exist, create new object
      posts.push({
        year: year,
        posts: [post]
      });
    }
  });
</script>

<main>
  <div id="circle"><div class="image" /></div>
  <section
    class="flex lg:h-[150px] sm:h-[150px] md:h-[150px] xl:h-[150px] pb-4 justify-between items-center mx-auto"
  >
    <h1 class="text-5xl lg:text-6xl mx-auto text-white font-medium font-serif text-center py-4">
      Blog
    </h1>
  </section>
  <section class="z-2 py-4 bg-white min-h-[90vh]">
      <section class="flex-row   justify-center items-center">
      {#each posts as year}
        <h2 class="text-4xl font-medium font-serif text-left border-b-2 border-black pb-2 mb-2">
          {year.year}
        </h2>
        {#each year.posts as post}
          <BlogListing {...post} />
        {/each}
      {/each}
    </section>
  </section>
</main>

<style>
  #photo {
    position: absolute;
    left: -13.5rem;
    top: 9rem;
    max-width: 200px;
  }

  #science {
    position: absolute;
    left: -13.5rem;
    max-width: 200px;
  }

  #www {
    position: absolute;
    left: -13.5rem;
    top: 0rem;
    max-width: 200px;
  }
  aside {
    padding: 1.5rem;
  }

  #circle {
    /* Draw big blue circle */
    background: #904e55;
    background-image: url("/common/assets/resources/light-wool.png");
    max-width: 950px;
    max-height: 800px;
    width: 60%;
    height: 100%;
    border-radius: 50%;
    z-index: -10;
    position: absolute;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
  }

  .image {
    background-image: url("/common/assets/resources/blog.png");
    background-size: 80%;
    background-repeat: no-repeat;
    background-position: 75% 0px;
    width: 90%;
    height: 100%;
    mix-blend-mode: multiply;
    opacity: 0.6;
  }

  /* Mobile circle */
  @media screen and (max-width: 600px) {
    #circle {
      width: 86%;
      height: 30%;
      top: 88px;
    }
    .image {
      background-size: 100%;
      background-position: 10px 0px;
    }
  }
</style>
