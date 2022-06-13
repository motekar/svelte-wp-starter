<script>
  import { onMount } from "svelte";

  import TableHeader from "./header/TableHeader.svelte";
  import TableRows from "./row/TableRows.svelte";

  export let headers;
  export let rows = [];
  export let selected = [];
  export let actions = [];
  export let getId = (row) => row.id;
  export let getRow = (row, rowParams) => {
    return headers.map((header) => {
      return {
        name: header.name,
        content: row[header.name],
      };
    });
  };

  let allSelected = false;

  $: allSelected = rows.length && rows.length == selected.length;

  const onCheckAll = (e) => {
    selected = e.detail ? rows.map((row) => getId(row)) : [];
  };
</script>

<table class="wp-list-table widefat fixed striped items">
  <thead>
    <TableHeader
      {headers}
      {allSelected}
      on:check-all={onCheckAll}
      on:set-order-by
    />
  </thead>

  <tbody>
    <TableRows
      {headers}
      {rows}
      {selected}
      {actions}
      {getId}
      {getRow}
      on:select-row={(e) => {
        const { id, value } = e.detail;
        if (!value && selected.includes(id)) {
          selected = selected.filter((v) => v != id);
        }
        if (value && !selected.includes(id)) {
          selected = [...selected, id];
        }
      }}
    />
  </tbody>

  <tfoot>
    <TableHeader
      {headers}
      {allSelected}
      on:check-all={onCheckAll}
      on:set-order-by
    />
  </tfoot>
</table>
