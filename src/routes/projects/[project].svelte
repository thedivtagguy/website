<script context="module">
	export const prerender = true;
	import "/src/styles/tailwind.css";
    import Menu from "$components/Menu.svelte";

  const render = item => item || '';

	export async function load({ page }) {
		try {
			const post = await import(`../../data/posts/${page.params.project}.json`);
            console.log(post);
			return {
				// Data passed into svelte component
				props: {
					post:post.default
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
</script>
{#if post.title != "404"}
<main>
	<div class="container max-w-5xl mt-6 px-6">
		<div class="pb-5 mb-5 border-b border-gray-100">
			<h1 class="font-bold text-5xl">{post.heading}</h1>
			<h2>{post.summary}</h2>
		</div>
		<article class="prose lg:prose-xl my-4 mx-auto">
		{#each post.text as text}
			<p>{text.value}</p>
		{/each}
		</article>
		<div class="flex flex-wrap">
			{#each post.images as image}
				<div class="w-full ">
					<img src="{image.value.src}" alt="{image.value.alt}" class="w-full h-auto" />
				</div>
			{/each}
		</div>
	</div>
</main>
{:else}
<main>
	<div class="container max-w-5xl mt-6 px-6">
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