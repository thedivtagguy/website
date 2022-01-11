<script>
  import "$styles/app.css";
  import Header from "$components/Header.svelte";
  import Menu from "$components/Menu.svelte";
  export const router = true;

</script>

<main class="max-w-5xl border-none  lg:border-solid border-r-[1px] border-l-[1px] border-black border-opacity-40 mx-auto px-6" id="content">
  <Menu />
  <slot />
</main>
