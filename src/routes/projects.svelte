<script context="module">
  export const prerender = true;
  import "../styles/tailwind.css";
  import Footer from "$components/Footer.svelte";

</script>

<script>
  import Meta from "$components/Meta.svelte";
  import ProjectsPage from "$components/ProjectsPage.svelte";
</script>

<Meta />
<ProjectsPage />
<Footer />