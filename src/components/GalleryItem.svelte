<script context='module'>
    import VideoPlayer from 'svelte-video-player';
</script>
<script>
    export let image;
    export let source = '/common/assets/resources/gallery/videos/' + image.value.filename;
    export let poster = 'https://wesbos.com/static/83ff22ad325f96d7f69f822a5385b55e/b46b0/syntax-logo.webp';
</script>

<div>
    {#if image.value.tag.includes('video')}
    <VideoPlayer {poster} {source} />

    {:else}
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
    {/if}

</div>