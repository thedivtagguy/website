<script context="module">
	export const prerender = true;
  import "/src/styles/tailwind.css";

	export async function load({ page }) {
		try {
			const Post = await import(`../../data/posts/${page.params.project}.json`);
            console.log(Post);
			return {
				// Data passed into svelte component
				props: {
					Post:Post.default
				}
			};
		} catch (e) {
			return {
				props: {
					Post: {
						headling: "404",
						content: "Page not found"
					}
				}
			};
		}
	}
</script>
<script>
    export let Post;
    console.log(Post);
</script>
<main>
    <div class="articleContainer">
       {Post.headline}
    </div>
</main>