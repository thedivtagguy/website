<script>
    import "$styles/app.css";
    import Header from "$components/Header.svelte";
    import Menu from "$components/Menu.svelte";
    import "/src/styles/tailwind.css";
    import Footer from "$components/Footer.svelte";
    export const router = true;



  </script>
  
    <!-- Aside content outside the borders -->
    <!-- <aside class="hidden lg:block lg:w-1/4 absolute top-[50%] lg:overflow-y-auto lg:overflow-x-hidden">
      <p>dfsfsdf</p>
    </aside> -->




  <main class="px-6  border-none  lg:border-solid border-r-[1px] border-l-[1px] border-black border-opacity-40 max-w-5xl mx-auto" id="content">
   <Menu/>
    <slot />
    <Footer />

</main>

