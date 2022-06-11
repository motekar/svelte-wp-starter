<script>
  import CheckColumn from "./CheckColumn.svelte";
  import SortableColumn from "./SortableColumn.svelte";

  export let headers = [];
  export let hasBulk = true;
  export let allSelected = false;
</script>

<tr>
  {#if hasBulk}
    <CheckColumn selected={allSelected} on:check-all />
  {/if}
  {#each headers as item}
    {#if item.sortable}
      <SortableColumn
        name={item.name}
        title={item.title}
        primary={item.primary}
        on:set-order-by
      />
    {:else}
      <th
        scope="col"
        class={"manage-column column-" + item.name}
        class:column-primary={item.primary}
      >
        <span>{item.title}</span>
      </th>
    {/if}
  {/each}
</tr>
