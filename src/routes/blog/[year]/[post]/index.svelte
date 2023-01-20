<script context="module">
    import "/src/styles/tailwind.css";
  
    import Meta from "$components/Meta.svelte";
    import styles from "$styles/blog.css"
    import "/src/styles/tailwind.css";
    import wrapLastWord from "$utils/wrapLastWord";

    export const prerender = 'auto';

// Get the matching post
export async function load({ page }) {
  try {
    let post;
    try {
      post = await import(`../../../../data/blog/${page.params.year}/${page.params.post}.svx`);
    } catch (error) {
      post = await import(`../../../../data/blog/${page.params.year}/${page.params.post}/index.svx`);
    }
    return {
      props: {
        post: post.default,
        metadata: post.metadata
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
let date = new Date(metadata.date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "short",
        year: "numeric"
        })


</script>
<Meta />
<main class="max-w-5xl mx-auto">
   <div class="mx-auto flex justify-center"><a href="/blog" class="flex underlineTransition flex-row justify-center items-center  gap-2 hover:underline">← Blog</a></div>
   <section class="meta">
      <hr />
      <h1 class="heading">{@html heading}</h1>
      <p class="description font-mono">{metadata.description}</p>
      <p class="date">    {date}
      </p>
      <!-- Tags -->
      <div class="tags flex flex-row gap-4 mx-auto justify-center items-center">
         {#each metadata.tags as tag, i}
         <p class="tags">{tag}</p>
         {metadata.tags.length - 1 === i ? '': '|'}
         {/each}
      </div>
      <hr />
   </section>
   <section class="text">
      <svelte:component this={post} />
   </section>
</main>
