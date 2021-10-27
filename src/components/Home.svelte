<script>
    export let stories;
</script>
<a href="/">Home</a> 
<!-- Iterate and show all story headings -->
<ul>
{#each stories as story}
    <li class="text-5xl font-bold text-indigo-500">{story.img}</li>
{/each}
</ul>