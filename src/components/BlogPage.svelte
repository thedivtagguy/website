<script context = "module">
  export const prerender = true;
</script>
<script>
  import storiesData from "$data/stories.csv";
  import parseStories from "$utils/cleanStories";
  import BlogListing from "./BlogListing.svelte";
  import styles from '$styles/tailwind.css';



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
    "image",
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

  let posts = [];
  // Year is in year key
  refined.forEach((post) => {
   // Keep only blog posts where the category contains "post" or "blog"
    if (!post.category.includes("post") && !post.category.includes("blog")) {
      return;
    }
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



<!-- Wavy text that says 'And now for something completely different' -->

  <section class="heading-text w-2/3 min-h-[200px] mx-auto pb-8">
        <h2 class="leading-tight anfscd text-white font-medium font-serif text-center ">
          And now for some things completely different
        </h2>
  </section>



  <section class="z-2 py-4 bg-white min-h-[90vh]">
  
      <section class="flex-row   justify-center items-center">
      {#each posts as year }
        <h2 class="text-6xl font-medium font-serif text-center opacity-30 ">
          {year.year}
        </h2>
        {#each year.posts as post, i}
          <BlogListing {...post} {i}/>
        {/each}
      {/each}
    </section>
  </section>
</main>

<style>

  
 
  #circle {
    /* Draw big blue circle */
    background: #CF5C36;
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


 .anfscd  {
  font-size: 30pt;
  color: #fff;
  padding: 80px 0px 10px 0px;
  /* letter-spacing: 10px; */
  text-transform: uppercase;
  transform: rotate(-8deg);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-shadow:   0px 6px 0 #212121,  
                 0px 6px 0 #212121,
                 0px  2px 0 #212121,
                 0px  2px 0 #212121,
                6px  0px 0 #212121,  
                 2px  0px 0 #212121,
                6px  0px 0 #212121,
                 2px  0px 0 #212121,
                6px 6px 0 #212121,  
                 2px 6px 0 #212121,
                6px  2px 0 #212121,
                 2px  2px 0 #212121,
                6px  4px 0 #212121,
                 0px  4px 0 #212121,
                 2px  4px 0 #212121,
                 0 19px 1px rgba(0,0,0,.1),
                 0 0 2px rgba(0,0,0,.1),
                 0 2px 3px rgba(0,0,0,.3),
                 0 12px 2px rgba(0,0,0,.2),
                 0 18px 18px rgba(0,0,0,.25),
                 0 24px 24px rgba(0,0,0,.2),
                 0 36px 36px rgba(0,0,0,.15);
}


/* Mobile version */

@media screen and (max-width: 600px) {
 .anfscd {
    font-size: 15pt;
    transform: rotate(-8deg);
 }
}
</style>
