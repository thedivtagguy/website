<script>
  import "$styles/app.css";
  import Header from "$components/Header.svelte";
  import Menu from "$components/Menu.svelte";
  export const router = true;

</script>

<main class="max-w-5xl mx-auto " id="content">
  <Menu />
  <slot />
</main>
