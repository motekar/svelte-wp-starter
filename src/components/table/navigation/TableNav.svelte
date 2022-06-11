<script>
  import { createEventDispatcher } from "svelte";
  import PaginationLinks from "./PaginationLinks.svelte";

  export let page;
  export let total;
  export let perPage;
  export let totalSelected = 0;
  export let isEverything = false;

  const dispatch = createEventDispatcher();
  const selectAll = () => (isEverything = true);
  const clearAll = () => (isEverything = false);
</script>

<div class="tablenav">
  <div class="table__actions"><slot /></div>

  <div class="tablenav-pages">
    <div class="displaying-num" class:all={isEverything}>
      {#if totalSelected == 0}
        {total} items
      {:else if !isEverything && totalSelected == perPage}
        {totalSelected} of {total} selected.
        <a href={"#"} on:click|preventDefault={selectAll}>Select All</a>.
      {:else if !isEverything}
        {totalSelected} of {total} selected.
      {:else}
        {total} of {total} selected.
        <a href={"#"} on:click|preventDefault={clearAll}>Clear All</a>.
      {/if}
    </div>

    <div class="pagination-links">
      <PaginationLinks {page} {total} {perPage} on:change-page />
    </div>

    <select bind:value={perPage} on:change={() => dispatch("change-page", 1)}>
      {#each [10, 50, 100] as num}
        <option value={num}>{num}</option>
      {/each}
    </select>
  </div>
</div>

<style type="text/scss">
  .tablenav {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .tablenav-pages {
      display: flex;
      align-items: center;
      gap: 5px;
    }
  }
  .all {
    background-color: #f0b849;
    padding: 3px;
  }
</style>
