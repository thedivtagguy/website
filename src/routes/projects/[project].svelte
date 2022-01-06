<script context="module">
	export const prerender = true;
	import "/src/styles/tailwind.css";
    import Menu from "$components/Menu.svelte";
	import Meta from "$components/Meta.svelte";
	import storiesData from "$data/stories.csv";
	import Icon from "$components/helpers/Icon.svelte";
   	import parseStories from "$utils/cleanStories"; 
	import ButtonSet from "$components/helpers/ButtonSet.svelte";
	import Footer from "$components/Footer.svelte";
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

    // const url = "api/stories.js";
    // const response = await fetch(url);
    // console.log(response);
    // if (response.ok) {
    //   const data = await response.json();
    // }

    const stories = parseStories(storiesData, keys);

  const render = item => item || '';

	export async function load({ page }) {
		try {
			const post = await import(`../../data/posts/${page.params.project}.json`);
			// Filter stories by slug
			const story = stories.filter(story => story.link === page.params.project)[0];
			// Combine data
			const data = { ...post, ...story };

			return {
				// Data passed into svelte component
				props: {
					post: data
				}
			};
		} catch (e) {
			return {
				props: {
					post: {
						title: "404",
						content: "Page not found"
					}
				}
			};
		}
	}



</script>
<script>
    export let post;
    console.log(post);
	import { onMount } from 'svelte';
  
  let Carousel;
  onMount(async () => {
	const module = await import('svelte-carousel');
	Carousel = module.default;
  });
</script>


  

{#if post.title != "404"}
<main class="mx-auto">
	<Meta />
	<div class="max-w-5xl mx-auto mt-6 px-6">
		<div class="flex justify-between items-start justify-self-start">
			<div class="pb-5 flex flex-col justify-items-center items-start gap-2 mb-5 border-b border-gray-100">
				<span class="font-bold font-sans uppercase">{post.category[0]} 🢒 {post.date}</span>
				<h1 class="font-bold text-6xl font-serif">{post.heading}</h1>
				<h2 class="font-semibold text-xl font-sans">{post.summary}</h2>
			</div>
			<div class="sm:flex lg:flex xl:flex  hidden flex-col justify-items-center items-start">
				<h4 class="font-drops text-[9rem] uppercase leading-none">
					<!-- First letter of the title -->
					{post.heading[0]}
				</h4>
				<button type="button" class="py-2 px-4 flex justify-center items-center gap-2   hover:bg-zinc-800 hover:text-white focus:ring-zinc-500  text-black w-full text-center text-base font-semibold  focus:ring-2 focus:ring-offset-2 out outline-2  outline rounded-sm ">
					<Icon name="globe"/> 
					Upload
				</button>
			</div>
		</div>

		<section class="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-5 md:grid-cols-5">
			<div class="col-span-3">
				<article class="prose lg:prose-xl my-4 mx-auto">
					{#each post.text as text}
						<p class="mt-4">{@html text.value}</p>
					{/each}
					</article>
			</div>
		</section>
	
	</div>
	<div class="mx-auto">
		<svelte:component this={Carousel} let:showPrevPage
		let:showNextPage>
		<div slot="prev" on:click={showPrevPage} class="custom-arrow flex justify-items-center items-center custom-arrow-prev">
			<div class="text-xl sm:text-5xl lg:text-5xl mx-4  border-black border-2 hover:bg-zinc-800 hover:text-white hover:cursor-pointer">
				<Icon name="chevron-left"/>
			</div>
		  </div>
		  {#each post.images as image}
		  <div class="h-[400px] w-full">
			  <img src={image.value.src} alt={image.value.alt} class="object-cover mx-auto object-center" />
		  </div>
		  {/each}
		  <div slot="next" on:click={showNextPage} class="custom-arrow flex justify-items-center items-center custom-arrow-next">
			<div class="text-xl sm:text-5xl lg:text-5xl mx-4  border-black border-2 hover:bg-zinc-800 hover:text-white hover:cursor-pointer">
				<Icon name="chevron-right"/>
			</div>
		  </div>
		</svelte:component>
	</div>
	
</main>




{:else}
<main>
	<div class="container mx-auto max-w-5xl mt-6 px-6">
		<div class="pb-5 mb-5 border-b border-gray-100">
			<h1 class="font-bold text-5xl">404 Page Not Found</h1>
			<h2>Kuch Nahi Hai Idhar</h2>
		</div>
		<article class="prose lg:prose-xl my-4 mx-auto">
			<p>Go back</p>
		</article>
	</div>
</main>
{/if}

<footer class="max-w-5xl mx-auto mt-6 px-6">
	<Footer keywords={post.keyword} current={post.heading} />
</footer>	