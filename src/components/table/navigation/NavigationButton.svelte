<script>
  export let title;
  export let button;
  export let disabled;
  export let className = "";
</script>

{#if disabled}
  <span class="tablenav-pages-navspan button disabled" aria-hidden="true">
    {button}
  </span>
{:else}
  <a class={className + " button"} href={"#"} on:click|preventDefault>
    <span class="screen-reader-text">{title}</span>
    <span aria-hidden="true">{button}</span>
  </a>
{/if}
