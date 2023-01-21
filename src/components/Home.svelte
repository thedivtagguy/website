<script context = "module">
  export const prerender = true;
</script>
<script>
import Projects from "./Projects.svelte";
import Header from "./Header.svelte";
import CodeDevList from "./CodeDevList.svelte";
import Log from "./Log.svelte";
import timelines from "$data/logs/timeline.json";
import Resources from "./Resources.svelte";
import Publications from "./Publications.svelte";
</script>

<!-- Iterate and show all story headings -->
<main class="">
  <Header />

  <div class="pb-2 border-b-2 mb-2 border-black">
    <h2 class="font-sans text-[15px]">
      Designer, developer and data enthusiast juggling things with the varying
      levels of tomfoolery. 
    </h2>
  </div>

  <div class="flex flex-col justify-items-start items-start">
    <Projects />

    <section class="w-full">
      <!-- <CodingList /> -->
      <CodeDevList />
      <Publications />
      <Resources />
     
    </section>
  </div>
</main>
