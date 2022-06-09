<script>
  import { createEventDispatcher } from "svelte";
  import NavigationButton from "./NavigationButton.svelte";

  const dispatch = createEventDispatcher();

  export let page;
  export let total;
  export let perPage;

  let currentPage = page;
  let max = 1;
  let onePage = true;
  $: {
    max = Math.ceil(total / perPage);
    onePage = total <= perPage;
  }
</script>

{#if !onePage}
  <NavigationButton
    title="First page"
    button="«"
    className="first-page"
    disabled={page <= 1}
    on:click={() => dispatch('change-page', 0)}
  />

  <NavigationButton
    title="Prev page"
    button="‹"
    className="prev-page"
    disabled={page <= 1}
    on:click={() => dispatch('change-page', page - 1)}
  />
  <span class="paging-input">
    <label htmlFor="current-page-selector" class="screen-reader-text">
      Current Page
    </label>

    <input
      class="current-page"
      type="number"
      min="1"
      {max}
      name="paged"
      bind:value={currentPage}
      size={2}
      aria-describedby="table-paging"
      on:blur={() => dispatch('change-page', Math.min(max, Math.max(0, currentPage)))}
    />

    <span class="tablenav-paging-text" />
  </span>

  <NavigationButton
    title="Next page"
    button="›"
    className="next-page"
    disabled={page >= max}
    on:click={() => dispatch('change-page', page + 1)}
  />

  <NavigationButton
    title="Last page"
    button="»"
    className="last-page"
    disabled={page >= max}
    on:click={() => dispatch('change-page', max)}
  />
{/if}
