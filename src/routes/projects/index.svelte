<script context="module">
  export const prerender = true;
  import "/src/styles/tailwind.css";
  import Footer from "$components/Footer.svelte";

</script>

<script>
  import Meta from "$components/Meta.svelte";
  import ProjectsPage from "$components/ProjectsPage.svelte";
  import { page } from "$app/stores"
  // State to check if page has a slug after 'projects'
  let slug = $page.params;
  // If page has a slug, remove 'projects' from the slug
  console.log(slug)
</script>


<Meta />
<ProjectsPage />
<Footer />

<main>
    <section class="flex  pb-4 justify-between items-center mx-auto">
        <h1 class="text-6xl font-bold font-serif text-center py-4">{$page.path}</h1>
      </section>
      <h2 class="text-4xl font-bold font-serif text-left border-b-2 border-black pb-2 mb-2">Data Storytelling</h2>
</main>