<script>
  import wordmark from "$svg/wordmark.svg";
</script>

<header>
  <div class="wordmark">
    <a href="https://thedivtagguy.cool" aria-label="The thedivtagguy">{@html wordmark}</a>
  </div>
</header>

<style>
  .wordmark {
    max-width: 4em;
    margin: 0 auto;
    padding: 1em 0;
  }

  .wordmark a {
    border: none;
    color: var(--color-body);
  }

  .wordmark a:hover {
    background-color: transparent;
  }

  :global(.wordmark svg path) {
    fill: currentColor;
  }
</style>
