<script>
    import "$styles/app.css";
    import Header from "$components/Header.svelte";
    import Menu from "$components/Menu.svelte";
    import "/src/styles/tailwind.css";
    export const router = true;
  
  </script>
  
  <main class="px-6 max-w-5xl mx-auto" id="content">
   <Menu/>
    <slot />
  </main>
  