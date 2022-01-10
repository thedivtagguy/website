<script context="module">
      import "../styles/tailwind.css";

      export const prerender = true;
	export const router = true;
</script>
<script>
    import copy from "$data/contact.json"
	import Meta from "$components/Meta.svelte";
    import Contact from "$components/Contact.svelte";
    import Footer from "$components/Footer.svelte";
</script>

<Meta/>
<Contact copy={copy}/>
<Footer/>
