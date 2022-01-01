<script>
import { getStores, navigating, page, session } from '$app/stores';
console.log($page.params.project);
</script>

<main>
    <section class="flex  pb-4 justify-between items-center mx-auto">
        <h1 class="text-6xl font-bold font-serif text-center py-4">{$page.path}</h1>
      </section>
      <h2 class="text-4xl font-bold font-serif text-left border-b-2 border-black pb-2 mb-2">Data Storytelling</h2>
</main>