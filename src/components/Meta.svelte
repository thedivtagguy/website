<script>
  export let title = "Aman Bhargava";
  export let description =
    "Aman's platform for a regular mishmash of design and code gimmickry";
  export let url = "https://thedivtagguy.com";
  export let slug = 
    "social.jpg"

    
  const orgLdJson = {
    "@context": "http://schema.org",
    "@type": "CreativeWork",
    "@id": "https://www.thedivtagguy.com",
    name: "Aman Bhargava",
    logo: {
      "@type": "ImageObject",
      url: "https://thedivtagguy.com/common/assets/resources/favicon/apple-touch-icon.png",
      width: "200",
      height: "200",
    },
    url: "https://www.thedivtagguy.com/",
  };
  const articleLdJson = {
    "@context": "http://schema.org",
    "@type": "CreativeWork",
    headline: title,
    url: url,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    thumbnailUrl: slug,
    image: [
      {
        "@context": "http://schema.org",
        "@type": "ImageObject",
        url: slug,
      },
    ],
    publisher: { "@id": "https://www.thedivtagguy.com" },
    copyrightHolder: { "@id": "https://www.thedivtagguy.com" },
    sourceOrganization: { "@id": "https://www.thedivtagguy.com" },
    copyrightYear: new Date().getFullYear(),

   
    articleSection: "Projects",
    isAccessibleForFree: true,
    creator: ["Aman Bhargava"],
    keywords: [
      "Aman Bhargava",
      "thedivtagguy",
      "data visualization",
      "Interactives",
    ],
  };
</script>

<svelte:head>
  <title>{title}</title>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="description" content={description} />
  <meta name="author" content="Aman Bhargava" />
  <meta name="news_keywords" content="" />

  <meta property="og:title" content={title} />
  <meta property="og:site_name" content="thedivtagguy" />
  <meta property="og:url" content={url} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="article" />
  <meta property="og:locale" content="en_US" />

  <meta property="og:image" content="https://thedivtagguy.com/common/assets/thumbnails/960/{slug}" />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="600" />

  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="https://thedivtagguy.com" />
  <meta name="twitter:creator" content="@thedivtagguy" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image:src" content="https://thedivtagguy.com/common/assets/thumbnails/960/{slug}" />

  <meta name="robots" content="max-image-preview:large" />

  <link rel="canonical" href="{url}/" />
  <link rel="apple-touch-icon" sizes="180x180" href="/common/assets/resources/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/common/assets/resources/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/common/assets/resources/favicon/favicon-16x16.png">
  <link rel="manifest" href="/common/assets/resources/favicon/site.webmanifest">
</svelte:head>
