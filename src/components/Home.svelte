<script>
    export let stories;
    console.table(stories);
</script>
<a href="/">Home</a> 
<a href="/projects">Projects</a>  
<a href="/blog">Blog</a>
<a href="/resume">Resume</a> 
<!-- Iterate and show all story headings -->
<ul>
{#each stories as story}
    <li class="font-bold">{story.slug}</li>
{/each}
</ul>
