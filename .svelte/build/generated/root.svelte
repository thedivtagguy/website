<!-- This file is generated by @sveltejs/kit — do not edit it! -->
<script>
  import { setContext, afterUpdate, onMount } from "svelte";

  // stores
  export let stores;
  export let page;

  export let components;
  export let props_0 = null;
  export let props_1 = null;
  export let props_2 = null;

  setContext("__svelte__", stores);

  $: stores.page.set(page);
  afterUpdate(stores.page.notify);

  let mounted = false;
  let navigated = false;
  let title = null;

  onMount(() => {
    const unsubscribe = stores.page.subscribe(() => {
      if (mounted) {
        navigated = true;
        title = document.title || "untitled page";
      }
    });

    mounted = true;
    return unsubscribe;
  });
</script>

<svelte:component this={components[0]} {...props_0 || {}}>
  {#if components[1]}
    <svelte:component this={components[1]} {...props_1 || {}}>
      {#if components[2]}
        <svelte:component this={components[2]} {...props_2 || {}} />
      {/if}
    </svelte:component>
  {/if}
</svelte:component>

{#if mounted}
  <div id="svelte-announcer" aria-live="assertive" aria-atomic="true">
    {#if navigated}
      Navigated to {title}
    {/if}
  </div>
{/if}

<style>
  #svelte-announcer {
    position: absolute;
    left: 0;
    top: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    overflow: hidden;
    white-space: nowrap;
    width: 1px;
    height: 1px;
  }
</style>
