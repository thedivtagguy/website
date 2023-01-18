<script context="module">
  export const prerender = true;
  import "/src/styles/tailwind.css";
  import Footer from "$components/Footer.svelte";
  import Meta from "$components/Meta.svelte";
  import BlogPage from "$components/BlogPage.svelte";

  export const router = false;
  import "/src/styles/tailwind.css";
	
</script>

<Meta />
<main class="max-w-5xl mx-auto">

	<BlogPage />
	<Footer />
</main>

