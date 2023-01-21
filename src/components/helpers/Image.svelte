<script>
    export let url;
    export let caption = "";
    export let alt = "";

</script>

<div class="image">
<img src={url} alt = {alt} />
{#if caption}
    <div class="caption">{caption}</div>
{/if}
</div>