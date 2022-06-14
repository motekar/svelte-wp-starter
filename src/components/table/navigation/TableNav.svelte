<script>
  import { getContext } from "svelte";
  import PaginationLinks from "./PaginationLinks.svelte";

  export let page;
  export let total;
  export let perPage;
  export let totalSelected = 0;
  export let isEverything = false;

  let changeLimit = false;

  const callbacks = getContext("callbacks");

  const selectAll = () => (isEverything = true);
  const clearAll = () => (isEverything = false);
</script>

<div class="tablenav">
  <div class="table__actions"><slot /></div>

  <div class="tablenav-pages">
    {#if !totalSelected}
      Displaying
      {#if !changeLimit}
        <a href={"#"} on:click={() => (changeLimit = true)}>{perPage}</a>
      {:else}
        <select
          bind:value={perPage}
          on:change={() => {
            callbacks.changePage(1);
            changeLimit = false;
          }}
          on:blur={() => (changeLimit = false)}
        >
          {#each [5, 10, 50, 100] as num}
            <option value={num}>{num}</option>
          {/each}
        </select>
      {/if}
      of
    {/if}

    <div class="displaying-num" class:all={isEverything}>
      {#if totalSelected == 0}
        {total} items
      {:else if !isEverything && totalSelected}
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
      <PaginationLinks {page} {total} {perPage} />
    </div>
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
