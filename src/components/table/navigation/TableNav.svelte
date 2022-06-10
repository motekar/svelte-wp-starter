<script>
  import PaginationLinks from "./PaginationLinks.svelte";

  export let page;
  export let total;
  export let perPage;
</script>

<div class="tablenav">
  <div class="table__actions"><slot /></div>

  <div class="tablenav-pages">
    <span class="displaying-num">{total} items</span>

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
</style>
