<script context="module">
    import "../../styles/tailwind.css";

    export const prerender = true;
  export const router = true;
</script>
<script>
  import Meta from "$components/Meta.svelte";
  import Footer from "$components/Footer.svelte";
  import copy from "$data/internships.json";
</script>

<Meta
 title = {"So, internships, huh?"}
 description = {"FAQs about portfolios and internships I wish I had."}
 slug = {"/common/assets/resources/internship/sharecard.jpg"}
 url = {"https://thedivtagguy.com/internships"}
/>



<main class="mx-auto">
	<div class="max-w-5xl mx-auto  px-2">
      <div class="grid grid-cols-1 md:grid-cols-2">
          <div>
              <h1 class="text-5xl lg:text-6xl mx-auto font-medium font-serif text-left py-4">{copy.headline}</h1>
                  <p class="text-lg lg:text-xl w-4/5 text-left font-medium  py-4">{copy.text1}</p>
          </div>
          <img src="/common/assets/resources/intern.jpg" class="h-full " alt="Internships">
      </div>
		
    <section class=" bg-white ">
        {#each copy.points as point}
        <div class="py-8">
            <p class="mt-1 text-4xl font-serif text-gray-900 sm:text-5xl sm:tracking-tight lg:text-4xl">{point.heading}</p>
            <p class="text-lg py-4 w-4/5 text-left font-medium">{@html point.text}</p>
            {#if point.tweet}
            {@html point.tweet}
            {/if}
        </div>
        <!-- If not the last item, draw divider -->
        {#if point !== copy.points[copy.points.length - 1]}
        <div class="border-t-2 border-gray-200"></div>
        {/if}
        {/each}
    </section>
		
	</div>
</main>


<style global>
    /* CSS */
    .link {
        color: #7d1df2;
    }
    blockquote.twitter-tweet {
  display: inline-block;
  font-family: "Helvetica Neue", Roboto, "Segoe UI", Calibri, sans-serif;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
  border-color: #eee #ddd #bbb;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
  margin: 10px 5px;
  padding: 16px 16px 16px 16px;
  max-width: 468px;
}

blockquote.twitter-tweet p {
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
}
.twitter-tweet > p:nth-child(1) {
    margin-bottom: 10px;
}
blockquote.twitter-tweet a {
  color: #7d1df2;
  font-weight: bold;
  text-decoration: underline;
  outline: 0 none;
}

blockquote.twitter-tweet a:hover,
blockquote.twitter-tweet a:focus {
  text-decoration: underline;
}

</style>
<Footer/>
