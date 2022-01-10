<script>
  import wordmark from "$svg/wordmark.svg";
  let menuShow = false;

  function toggleNavbar() {
    menuShow = !menuShow;
  }

  const links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" },
    { name: "Resume", link: "https://drive.google.com/file/d/17aSMtGFeFdNyNYtpYY0L7XFO1_MFBqnL/view?usp=sharing", external: true}
  ];
</script>

<div class="flex flex-wrap py-2">
  <div class="w-full ">
    <nav class="relative flex flex-wrap items-center justify-between py-3 ">
      <div class="container mx-auto flex flex-wrap items-center justify-between">
        <div
          class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
        >
          <div class="w-[50px]">
            <a sveltekit:prefetch  href="/" aria-label="The thedivtagguy">{@html wordmark}</a>
          </div>
          <button
            class="text-black cursor-pointer text-xl leading-none  py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            on:click={toggleNavbar}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-width="2px" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

        </div>
        <div class="lg:flex lg:flex-grow items-center {menuShow ? 'flex' : 'hidden'}">
          <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
            {#each links as link}
              <li>
                <a 
                  sveltekit:prefetch 
                  href={link.link}
                  class="px-3 py-2 font-sans flex items-center text-sm uppercase font-bold leading-snug text-black hover:opacity-75"
                  target= {link.external ? '_blank' : '_self'}
                >
                  {link.name}
                </a>
              </li>
            {/each}
          </ul>
        </div>
      </div>
    </nav>
  </div>
</div>
