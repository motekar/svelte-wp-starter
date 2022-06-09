<script>
  import CheckColumn from "./CheckColumn.svelte";
  import SortableColumn from "./SortableColumn.svelte";
  import Column from "./Column.svelte";

  export let table = {};
  export let headers = [];
  export let hasBulk = false;
</script>

<tr>
  {#each headers as item}
    {#if hasBulk}
      <CheckColumn />
    {:else if item.sortable}
      <SortableColumn {table} name={item.name} title={item.title} />
    {:else}
      <Column name={item.name} title={item.title} />
    {/if}
  {/each}
</tr>
