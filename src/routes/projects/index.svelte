<script context="module">
  export const prerender = true;
  import "/src/styles/tailwind.css";
  import Footer from "$components/Footer.svelte";

  import Meta from "$components/Meta.svelte";
  import ProjectsPage from "$components/ProjectsPage.svelte";
  // Check if we're on a project page

  export const router = false;
    import "/src/styles/tailwind.css";

	export async function load({ page }) {
		try {
			const post = await import(`../../data/posts/${page.params.project}.json`);
            
			return {
				// Data passed into svelte component
				props: {
					post:post.default,
          single: false,
				}
			};
		} catch (e) {
			return {
        props: {
					post: false,
				}			};
		}
	}
</script>

<script>
  export let post;
</script>
<Meta />
<main class="max-w-5xl mx-auto">
	{#if post}
	<svelte:component this={post}/>
	{:else}
	<ProjectsPage />
	{/if}
	<Footer />
</main>

