<script context = "module">
  export const prerender = true;
</script>

<script>
    export let copy;
    import storiesData from "$data/stories.csv";
  import parseStories from "$utils/cleanStories";


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
    "date",
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

  let selectedCategory = "all";

  let categories = [
    "All",
    "Data Story",
    "Web Development",
    "Web Design",
    "Tool Development",
    "Graphic Design",
    "Photography",
    "3D Art"
  ]

</script>


<main class="mx-auto">
	<div class="max-w-5xl mx-auto  px-2">
    <section class="flex  pb-4 justify-between items-center mx-auto">
      <h1 class="text-5xl lg:text-6xl mx-auto font-medium font-serif text-center py-4">You talkin to me?</h1>
    </section>

		<div class="flex justify-between items-start justify-self-start">
            
			<div class="pb-5 flex lg:flex md:flex xl:flex sm:flex flex-row justify-between w-full items-end gap-2 mb-5 border-b border-gray-100">
              <div><img src="/common/assets/resources/you-talking-to-me-what.gif" alt="gif" class="w-full lg:w-4/5 md:w-4/5 sm:w-4/5 xl:w-4/5 h-auto"/></div>
                <div class="hidden lg:block md:block xl:block sm:block"><img src="/common/assets/resources/write.png" alt="gif" class="w-[220px] h-auto"/></div>
			</div>
		</div>
        
		<section class="grid grid-cols-1  gap-8 lg:grid-cols-5 sm:grid-cols-5 md:grid-cols-5">
	
			<div class="col-span-5 lg:col-span-3 md:col-span-3 sm:col-span-3 xl:col-span-3">
				<article class="prose lg:prose-xl mx-auto">
                    
					{#each copy.text as text, i }
					<!-- Render Text -->
					{#if i === 0}
					<p class="font-sans text-md">{@html text.value}</p>
					{:else}
					<p class="mt-4 font-sans text-md">{@html text.value}</p>
					{/if}
					{/each}
				</article>
			</div>
			<div class="block lg:flex justify-items-end items-end lg:flex-col md:block xl:block mx-auto col-span-5 lg:col-span-2 xl:col-span-2 md:col-span-2 sm:col-span-2 lg:min-h-[20rem]">
                <div class="block lg:hidden md:hidden xl:hidden sm:hidden"><img src="/common/assets/resources/write.png" alt="gif" class="w-[220px] h-auto"/></div>
                <div class="my-4">
                    {#if copy.forHire === 'true'}
                        <span class="px-2 py-1 bg-green-600 text-white  rounded-sm my-2 font-bold text-sm">Available for work</span>
                    {:else}
                        <span class="px-2 py-1 bg-red-600 text-white  rounded-sm my-2 font-bold text-sm">Not available for work</span>
                     {/if}
                </div>
                <a href={copy.resume}><button class="button-31" role="button">View Resume</button></a>
                <a href={copy.portfolio}><button class="button-31 my-4" role="button">View Visual Portfolio</button></a>
                <p class="mt-4 font-sans text-sm">{@html copy.emailTagline}</p>
                <p class="bg-gray-100 text-sm px-2 py-1 my-2 font-mono">{copy.email}</p>
                <div class="flex py-2 gap-4 justify-items-center items-center">
                  <a href="https://github.com/{copy.username}">
                    <svg class="w-8 " role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitHub</title><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                  </a>
                  <a href="https://twitter.com/{copy.username}">
                    <svg class="w-8" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>                  
                  </a>
                  <a href="https://instagram.com/{copy.username}">
                     <svg class="w-8" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/></svg>
                  </a>
                </div>
			</div>
		</section>
		
    <!-- Allow users to sort through categories and display a refined list of projects -->
    <!-- <section class="py-12">
      <h3 class="text-3xl font-bold mb-4 ">How can I help you?</h3>
      <p class="mb-4 w-3/5">I'd like to make it easier for you to decide if I can help you with something. Select a category below to see a list of projects I've worked on.
      </p>
      <select class="w-full mb-4" v-model="selectedCategory">
        {#each categories as post}
          <option value="{post}">{post}</option>
        {/each}
      </select>
      
      {#each refined as listing}
        <div class="mb-4">
          <h4 class="text-xl font-bold">{listing.heading}</h4>
          <p>{listing.description}</p>
        </div>
      {/each}
    </section>
     -->



	</div>
</main>


<style>
    /* CSS */
    .button-31 {
      background-color: #222;
      border-radius: 4px;
      border-style: none;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
      max-width: none;
      min-height: 44px;
      min-width: 10px;
      outline: none;
      overflow: hidden;
      padding: 9px 20px 8px;
      position: relative;
      text-align: center;
      text-transform: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: 100%;
    }
    
    .button-31:hover,
    .button-31:focus {
      opacity: .75;
    }
</style>