<script context="module">
	export const router = false;
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
				status: 401,
				error: 'Post not found'
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