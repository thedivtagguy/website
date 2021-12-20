<script>
    export let stories;
    console.log(stories);
</script>
<!-- Iterate and show all story headings -->
<ul>
{#each stories as story}
    <li class="text-5xl font-bold text-red-500">{story.heading}</li>
    <li class="text-5xl font-bold text-red-500">{story.keyword}</li>
{/each}
</ul>
