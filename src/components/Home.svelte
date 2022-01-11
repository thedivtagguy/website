<script>
import Projects from "./Projects.svelte";
import Header from "./Header.svelte";
import CodeDevList from "./CodeDevList.svelte";
</script>

<!-- Iterate and show all story headings -->
<main class="">
  <Header />

  <div class="pb-2 border-b-2 mb-2 border-black">
    <h2 class="font-sans text-[15px]">
      Visual designer, developer and data enthusiast who does all three things with the varying
      levels of incompetence. Maybe you'll like some of it, idk.
    </h2>
  </div>

  <div class="flex flex-col justify-items-start items-start">
    <Projects />
    <section class="py-4 w-full">
      <!-- <CodingList /> -->
      <CodeDevList />
    </section>
  </div>
</main>
