<script>
    export let slug = 'building-footprints';
    const photos = [
        `/blog/${slug}/Bangalore-min.png`,
        `/blog/${slug}/Yelahanka-min.png`,
        `/blog/${slug}/Basavanagudi-min.png`,
        `/blog/${slug}/Nandini Layout-min.png`,
        `/blog/${slug}/Majestic-min.png`,

    ]
</script>

<div class="gallery">
    {#each photos as photo}
        <img src="{photo}" alt="building footprints" />
    {/each}
</div>

<style>

.gallery {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
    margin: 1.5rem 0;
}

.gallery img:first-child {
    grid-column: span 2;
}

.gallery img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

@media (max-width: 600px) {
    .gallery {
        grid-template-columns: repeat(1, 1fr);
    }
}

</style>