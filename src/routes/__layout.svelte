<script>
  import "$styles/app.css";
  // import Header from "$components/Header.svelte";
</script>
<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
<!-- <Header /> -->
<main id="content">
  <slot />
</main>
