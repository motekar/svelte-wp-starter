<script>
  import PaginationLinks from "./PaginationLinks.svelte";

  export let page;
  export let total;
  export let perPage;
  export let totalSelected = 0;
  export let isEverything = false;

  const selectAll = () => (isEverything = true);
  const clearAll = () => (isEverything = false);
</script>

<div class="tablenav">
  <div class="table__actions"><slot /></div>

  <div class="tablenav-pages">
    <span class="displaying-num" class:all={isEverything}>
      {#if totalSelected == 0}
        {total} items
      {:else if !isEverything}
        {totalSelected} of {total} selected.
        <a href={"#"} on:click|preventDefault={selectAll}>Select All</a>.
      {:else}
        {total} of {total} selected.
        <a href={"#"} on:click|preventDefault={clearAll}>Clear All</a>.
      {/if}
    </span>

    <span class="pagination-links">
      <PaginationLinks {page} {total} {perPage} on:change-page />
    </span>
  </div>
</div>

<style>
  .tablenav {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .all {
    background-color: #f0b849;
    padding: 3px;
  }
</style>
