<script context="module">
	export const prerender = true;
	import "/src/styles/tailwind.css";
	import Meta from "$components/Meta.svelte";
	import storiesData from "$data/stories.csv";
   	import parseStories from "$utils/cleanStories"; 
	import Footer from "$components/Footer.svelte";
	import ProjectDetails from "$components/ProjectDetails.svelte";
	import Error404 from '$components/Error404.svelte';



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
	import colors from "$data/thumbnail-colors.json";
 // Choose first item from category
 const DEFAULT_COLOR = {
    light: "hsl(0, 0%, 80%)",
    dark: "hsl(0, 0%, 44%)",
    darker: "red"
  };


	const lookupColor = (version) => {
    const match = colors.find((d) => d.slug === post.slug);
    return match ? match[version] : DEFAULT_COLOR;
  };
	
	const style = `
  --name: ${post.slug}
	--light: ${lookupColor("light", post)};
	--dark: ${lookupColor("dark")};
	--darker: ${lookupColor("darker")};
	--default-light: ${DEFAULT_COLOR["light"]};
	--default-dark: ${DEFAULT_COLOR["dark"]};
	--default-darker: ${DEFAULT_COLOR["darker"]};
  `;

    console.log(post.slug);
	console.log(style);
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
			</div>
		</div>

		<section class="grid grid-cols-1 py-6 gap-8 lg:grid-cols-5 sm:grid-cols-5 md:grid-cols-5">
			<div class="col-span-3">
				<article class="prose lg:prose-xl mx-auto">
					{#each post.text as text, i }
					<!-- If first text item, then add red text. Else add blue text -->
					{#if i === 0}
					<p class="font-sans">{@html text.value}</p>
					{:else}
					<p class="mt-4 font-sans">{@html text.value}</p>
					{/if}
					{/each}

					</article>
			</div>
			<div class="col-span-2 lg:min-h-[20rem]">
				<aside class="sticky top-8">
					<ProjectDetails {...post} 
					/>
				</aside>
			</div>
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