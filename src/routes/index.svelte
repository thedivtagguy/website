<script context="module">
  export const prerender = true;
  import storiesData from '$data/stories.csv'
  import parseStories from '$utils/parseStories';


	export async function load({ page, fetch, session, stuff }) {
    const keys = ["url","date","heading","desc","cat","author","keyword","published", "img", "path", "slug"]
		const stories = parseStories({data: storiesData, keys });
		return {
				props: {stories}
			};
	}
</script>

<script>
  import Meta from "$components/Meta.svelte";
  import Home from "$components/Home.svelte";

  export let stories;
</script>

<Meta />
<Home {stories} />
