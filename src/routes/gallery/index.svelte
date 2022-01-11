<script context="module">
    import "/src/styles/tailwind.css";

    export const prerender = true;
  export const router = true;
  import copy from "$data/contact.json"
  import Meta from "$components/Meta.svelte";
  import Footer from "$components/Footer.svelte";
import GalleryPage from "$components/GalleryPage.svelte";
</script>
<script>

</script>

<Meta/>
<GalleryPage copy={copy}/>
