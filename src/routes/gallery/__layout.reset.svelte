<script>
    import "$styles/app.css";
    import Header from "$components/Header.svelte";
    import Menu from "$components/Menu.svelte";
    import "/src/styles/tailwind.css";
import Footer from "$components/Footer.svelte";
    export const router = true;
  
  </script>
    <div class="max-w-5xl mx-auto"><Menu/></div>
  <main class="px-6  border-black border-opacity-40 max-w-7xl mx-auto" id="content">
    <slot />
  </main>
  <div class="max-w-5xl mx-auto">
     <Footer/>
  </div>