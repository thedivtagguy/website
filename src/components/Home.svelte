<script>
    import Projects from "./Projects.svelte";
    import CodingList from "./CodingList.svelte";
</script>
<!-- Iterate and show all story headings -->
<main class="">
<div class="py-4">
    <h2 class="font-sans text-lg">
        I am a visual designer, developer and data enthusiast who does all three things with the varying levels of incompetence. <br> Maybe you'll like some of it, idk.
    </h2>
</div>

<div class="flex flex-col justify-items-start items-start">
   
    <Projects />
    <section class="py-4">
        <CodingList />
    </section>
</div>
</main>