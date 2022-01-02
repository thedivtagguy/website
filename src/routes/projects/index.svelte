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
			const Post = await import(`../../data/posts/${page.params.project}.json`);
            console.log(Post);
			return {
				// Data passed into svelte component
				props: {
					Post:Post.default,
          single: false,
				}
			};
		} catch (e) {
			return {
        props: {
					Post: false,
				}			};
		}
	}
</script>

<script>
  export let Post;
</script>


<Meta />
{#if Post}
<svelte:component this={Post}/>
{:else}
<ProjectsPage />
{/if}
<Footer />

