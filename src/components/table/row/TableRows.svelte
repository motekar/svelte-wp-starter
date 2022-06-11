<script>
  import CheckColumn from "./CheckColumn.svelte";
  import RowActions from "./RowActions.svelte";

  export let headers;
  export let rows;
  export let hasBulk = true;
  export let actions = [];
  export let selected = [];

  export let getId;
  export let getRow;

  const primary = headers.find((item) => item.primary);
  const isPrimaryColumn = (column) => column.name === primary.name;
</script>

{#each rows as row}
  <tr>
    {#if hasBulk}
      <CheckColumn
        id={getId(row)}
        selected={selected.includes(getId(row))}
        on:select-row
      />
    {/if}

    {#each getRow(row, {}) as col}
      <td
        name={col.name}
        class:primary={isPrimaryColumn(col)}
        class={`column-${col.name}`}
      >
        {@html col.content}

        {#if isPrimaryColumn(col)}
          <RowActions {actions} {row} />
        {/if}
      </td>
    {/each}
  </tr>
{/each}
