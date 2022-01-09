<script context="module">
	export const prerender = true;
	import "/src/styles/tailwind.css";
	import Meta from "$components/Meta.svelte";
	import storiesData from "$data/stories.csv";
   	import parseStories from "$utils/cleanStories"; 
	import Footer from "$components/Footer.svelte";
	import ProjectDetails from "$components/ProjectDetails.svelte";
	import Error404 from '$components/Error404.svelte';
	import Prism from 'svelte-prism';

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

</script>


  

{#if post.title != "404"}
<main class="mx-auto">
	<Meta />
	<div class="max-w-5xl mx-auto mt-6 px-2">
		<div class="flex justify-between items-start justify-self-start">
			<div class="pb-5 flex flex-col justify-items-center items-start gap-2 mb-5 border-b border-gray-100">
				<span class="font-bold font-sans uppercase">{post.category[0]} | {post.date}</span>
				<h1 class="font-bold text-5xl lg:text-6xl md:text-6xl xl:text-6xl sm:text-6xl font-serif">{post.heading}</h1>
				<h2 class="font-semibold text-xl font-sans">{post.summary}</h2>
			</div>
			<div class="sm:flex lg:flex xl:flex  hidden flex-col justify-items-center items-start">
				<h4 class="font-drops text-[9rem] uppercase leading-none">
					<!-- First letter of the title -->
					{post.heading[0]}
				</h4>
			</div>
		</div>

		<section class="grid grid-cols-1  py-6 gap-8 lg:grid-cols-5 sm:grid-cols-5 md:grid-cols-5">
			<div class="block lg:hidden md:hidden xl:hidden col-span-5 lg:min-h-[20rem]">
				<aside class="sticky top-8">
					<ProjectDetails {...post} 
					/>
				</aside>
			</div>
			<div class="col-span-5 lg:col-span-3 md:col-span-3 sm:col-span-3 xl:col-span-3">
				<article class="prose lg:prose-xl mx-auto">
					{#each post.text as text, i }
					<!-- If first text item, then add red text. Else add blue text -->
					{#if i === 0}
					<p class="font-sans text-md">{@html text.value}</p>
					{:else}
					<p class="mt-4 font-sans text-md">{@html text.value}</p>
					{/if}
					{/each}

					</article>
			</div>
			<div class="hidden lg:block md:block xl:block col-span-2 lg:min-h-[20rem]">
				<aside class="sticky top-8">
					<ProjectDetails {...post} 
					/>
				</aside>
			</div>
		</section>

		<Prism language="r">
			{`
				# Create a function to print squares of numbers in sequence.
				new.function <- function(a) {
				   for(i in 1:a) {
					  b <- i^2
					  print(b)
				   }
				}
				
				# Call the function new.function supplying 6 as an argument.
				new.function(6)
				`}
		</Prism>

		<section class="mx-auto">
		<!-- Show images -->
		
		<!-- <Masonry {items} {minColWidth} {maxColWidth} {gap} let:item bind:width bind:height >
			{#each post.images as image, i}
				<img
				{item}
				width="600"
						height="720"
						src="/common/assets/resources/32/{image.value.src}"
						alt="{image.value.alt}"
						srcset="/common/assets/resources/1280/{image.value.src} 1280w,
							  /common/assets/resources/960/{image.value.src} 960w,
							  /common/assets/resources/640/{image.value.src} 640w"
						sizes="(max-width: 320px) 640px, (max-width: 480px) 960px, 1280px"
						loading="lazy" />
			{/each}
		</Masonry> -->

		</section>
	
	</div>
	<div class="mx-auto">
	
	</div>
	
</main>
{:else}
<Error404/>
{/if}

<footer class="max-w-5xl mx-auto mt-6 px-6">
	<Footer keywords={post.keyword} current={post.heading} />
</footer>	