<script>
  import RowColumns from "./RowColumns.svelte";

  export let table;
  export let headers;
  export let rows;

  export let getRow;
  export let getRowActions;

  const primary = headers.find(item => item.primary);
</script>

{#each rows as row}
  <tr>
    <RowColumns {row} {getRow} />
  </tr>
{/each}
