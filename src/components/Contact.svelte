<script>
    export let copy;
</script>


<main class="mx-auto">
	<div class="max-w-5xl mx-auto mt-6 px-2">
        <h1 class="font-bold text-5xl lg:text-6xl md:text-6xl xl:text-6xl sm:text-6xl py-6 font-serif">{copy.header}</h1>

		<div class="flex justify-between items-start justify-self-start">
            
			<div class="pb-5 hidden lg:flex md:flex xl:flex sm:flex flex-row justify-between w-full items-end gap-2 mb-5 border-b border-gray-100">
              <div><img src="/common/assets/resources/you-talking-to-me-what.gif" alt="gif" class="w-full h-auto"/></div>
                <div class="hidden lg:block md:block xl:block sm:block"><img src="/common/assets/resources/write.png" alt="gif" class="w-[220px] h-auto"/></div>
			</div>
		</div>
        
		<section class="grid grid-cols-1  gap-8 lg:grid-cols-5 sm:grid-cols-5 md:grid-cols-5">
	
			<div class="col-span-5 lg:col-span-3 md:col-span-3 sm:col-span-3 xl:col-span-3">
				<article class="prose lg:prose-xl mx-auto">
                    
					{#each copy.text as text, i }
					<!-- Render Text -->
					{#if i === 0}
					<p class="font-sans text-md">{@html text.value}</p>
					{:else}
					<p class="mt-4 font-sans text-md">{@html text.value}</p>
					{/if}
					{/each}
				</article>
			</div>
			<div class="block lg:flex justify-items-end items-end lg:flex-col md:block xl:block mx-auto col-span-2 lg:min-h-[20rem]">
                <div class="block lg:hidden md:hidden xl:hidden sm:hidden"><img src="/common/assets/resources/write.png" alt="gif" class="w-[220px] h-auto"/></div>
                <div class="my-4">
                    {#if copy.forHire === 'true'}
                        <span class="px-2 py-1 bg-green-600 text-white  rounded-sm my-2 font-bold text-sm">Available for work</span>
                     {/if}
                </div>
                <a href={copy.resume}><button class="button-31" role="button">View Resume</button></a>
                <a href={copy.portfolio}><button class="button-31 my-4" role="button">View Visual Portfolio</button></a>
                <p class="mt-4 font-sans text-sm">{@html copy.emailTagline}</p>
                <p class="bg-gray-100 text-sm px-2 py-1 my-2 font-mono">{copy.email}</p>
			</div>
		</section>
		
	</div>
</main>


<style>
    /* CSS */
    .button-31 {
      background-color: #222;
      border-radius: 4px;
      border-style: none;
      box-sizing: border-box;
      color: #fff;
      cursor: pointer;
      display: inline-block;
      font-family: "Farfetch Basis","Helvetica Neue",Arial,sans-serif;
      font-size: 16px;
      font-weight: 700;
      line-height: 1.5;
      max-width: none;
      min-height: 44px;
      min-width: 10px;
      outline: none;
      overflow: hidden;
      padding: 9px 20px 8px;
      position: relative;
      text-align: center;
      text-transform: none;
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      width: 100%;
    }
    
    .button-31:hover,
    .button-31:focus {
      opacity: .75;
    }
</style>