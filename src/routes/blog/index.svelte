<script >
  import Footer from "$components/Footer.svelte";
  import Meta from "$components/Meta.svelte";
  import styles from '$styles/tailwind.css'

  import BlogPage from "$components/BlogPage.svelte";
</script>

<Meta />
<main class="max-w-5xl mx-auto">
	<BlogPage />
	<Footer />
</main>

