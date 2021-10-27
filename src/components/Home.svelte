<script>
    export let stories;
</script>
<a href="/">Home</a> 
<!-- Iterate and show all story headings -->
<ul>
{#each stories as story}
    <li class="font-bold">{story.img}</li>
{/each}
</ul>