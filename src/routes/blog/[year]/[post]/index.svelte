<script context="module">
    export const prerender = true;
    import "/src/styles/tailwind.css";
    import Footer from "$components/Footer.svelte";
  
    import Meta from "$components/Meta.svelte";
    import styles from "$styles/blog.css"
    export const router = false;
      import "/src/styles/tailwind.css";




// Get the matching post

export async function load ({ page }) {
    try {
        const Post = await import(`../../../../data/blog/${page.params.year}/${page.params.post}.svx`);
        return {
            props: {
                post: Post.default,
                metadata: Post.metadata
            }
        };
    } catch (error) {
        console.log(error);
        return {
    status: 404,
    error: new Error("Not found")
};
    }
}
  </script>
  
  <script>
    export let post;
    export let metadata;
 
    // Show page params

</script>
  <Meta />
  <main class="max-w-5xl mx-auto markdown-body">
    <h1 class="text-4xl font-bold">{metadata.title}</h1>
    <p class="text-gray-500">{metadata.date}</p>
    <p class="text-gray-500">{metadata.description}</p>

    
        <svelte:component this={post} />

  </main>

  <Footer />
