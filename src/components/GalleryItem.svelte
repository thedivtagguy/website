<script context='module'>
    import VideoPlayer from 'svelte-video-player';
</script>
<script>
    export let image;
    export let source = '/common/assets/resources/gallery/videos/' + image.value.filename;
    let poster;
    if(image.value.poster){
        poster = '/common/assets/resources/gallery/960/' + image.value.poster;
    }
</script>

<div>
    {#if image.value.tag.includes('video')}
    <VideoPlayer {poster} {source} width="1500"/>
    <p class="text-sm text-center hover:text-gray-600 font-sans capitalize">{image.value.caption}</p>
    {:else}
    <div class="flex flex-col gap-2">
        <img
        width="400"
        height="720"
        src="/common/assets/resources/gallery/32/{image.value.filename}"
        alt={image.value.alt}
        srcset="/common/assets/resources/gallery/1280/{image.value.filename} 1280w,
                  /common/assets/resources/gallery/960/{image.value.filename} 960w,
                  /common/assets/resources/gallery/640/{image.value.filename} 640w"
        sizes="(max-width: 320px) 640px, (max-width: 480px) 960px, 1280px"
        loading="lazy"
          />
          <span class="text-sm text-center hover:text-gray-600 font-sans capitalize">{image.value.caption}</span>
    </div>
    {/if}

</div>