<script>
    import colors from "$data/thumbnail-colors.json";
  import Button from "./helpers/Button.svelte";
  
    export let slug;
    export let heading;
    export let description;
    export let featured;
    export let link;
    export let fullLink;
    export let external;
    export let isExternal;
    export let image;
    export let date;
    export let day;
    export let month;
    export let monthShort;
    export let category;
    // Choose first item from category
    const DEFAULT_COLOR = {
      light: "hsl(0, 0%, 80%)",
      dark: "hsl(0, 0%, 44%)",
      darker: "red"
    };
  
    const lookupColor = (version) => {
      const match = colors.find((d) => d.slug === slug);
      return match ? match[version] : DEFAULT_COLOR;
    };
    const style = `
    --name: ${slug}
      --light: ${lookupColor("light")};
      --dark: ${lookupColor("dark")};
      --darker: ${lookupColor("darker")};
      --default-light: ${DEFAULT_COLOR["light"]};
      --default-dark: ${DEFAULT_COLOR["dark"]};
      --default-darker: ${DEFAULT_COLOR["darker"]};
    `;
  console.log(fullLink);
  
  export let url;
  
  if(isExternal == "TRUE" || isExternal == "true") {
    url = fullLink;
  
  }
  else if (category == "blog")
  {
    url = "/blog/" + link;
  }
  else {
    url = "/projects/" + link;
  }
  
  </script>


<!-- Display blogpost info -->
<a href="{url}">
    <div class="w-full hover:cursor-pointer hover:bg-divpurple px-6 hover:text-white hover:border-4 border-black  py-8 flex flex-row justify-between items-center">
          <div class="flex gap-2 flex-col w-full">
            <h2 class="text-4xl w-full  font-bold text-left">
              {heading}
            </h2>
            <p class="text-left w-full font-mono text-sm">
              {description}
            </p>
          </div>
          <p class="w-full font-bold font-serif text-right text-5xl p-0 opacity-20">
            {day} / {monthShort}
         </p>
    </div>
</a>
