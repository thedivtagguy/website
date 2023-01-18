<script context="module">
    export const prerender = true;
    import "/src/styles/tailwind.css";
    import Footer from "$components/Footer.svelte";
  
    import Meta from "$components/Meta.svelte";
    import styles from "$styles/blog.css"
    export const router = false;
    import "/src/styles/tailwind.css";
    import wrapLastWord from "$utils/wrapLastWord";



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

    let heading = metadata.title;
    // Wrap last word in heading in span
    heading = wrapLastWord(heading);



</script>
  <Meta />
  <main class="max-w-5xl mx-auto">
    <div class="mx-auto flex justify-center"><a href="/blog" class="flex underlineTransition flex-row justify-center items-center  gap-2 hover:underline">← Blog</a></div>
    <section class="meta">
        <hr />
       
        <h1 class="heading">{@html heading}</h1>
        <p class="description">{metadata.description}</p>
        <p class="date">
            <!-- Print date as 15 Oct, 2020 -->
              {new Date(metadata.date).toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric"
              })}
          </p>
    <!-- Tags -->
    <div class="tags flex flex-row gap-4 mx-auto justify-center items-center">
        {#each metadata.tags as tag, i}
            <p class="tags">{tag}</p> {metadata.tags.length - 1 === i ? '': '|'}
       
        {/each}
    </div>
        <hr />
    </section>

    
        <section class="text">
            <svelte:component this={post} />
        </section>

  </main>

  <Footer />

  
