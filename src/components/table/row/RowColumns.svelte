<script>
  export let row;
  export let data = null;
  export let getRow;

  let columns = [];

  $: columns = getRow(row, data);
</script>

{#each columns as col}
  <td name={col.name} class={`column-${col.name}`}>{@html col.content}</td>
{/each}
