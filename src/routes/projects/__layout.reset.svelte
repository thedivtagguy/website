<script>
    import "$styles/app.css";
    import Header from "$components/Header.svelte";
    import Menu from "$components/Menu.svelte";
    import "/src/styles/tailwind.css";
    export const router = true;
  
  </script>
  
  <main class="max-w-5xl mx-auto px-6" id="content">
    <Menu/>
    <slot />
  </main>
  