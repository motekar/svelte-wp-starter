<script>
  import TableHeader from "./header/TableHeader.svelte";
  import TableRows from "./row/TableRows.svelte";

  export let headers;
  export let sorting = {};
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

  const onSelectRow = (e) => {
    const { id, value: checked } = e.detail;
    // remove item id from selected array
    if (!checked && selected.includes(id)) {
      selected = selected.filter((v) => v != id);
    }
    if (checked && !selected.includes(id)) {
      selected = [...selected, id];
    }
  };

  const onSetOrderBy = (e) => {
    const { column, direction } = e.detail;
    sorting = { column, direction };
  };
</script>

<table class="wp-list-table widefat fixed striped items">
  <thead>
    <TableHeader
      {headers}
      {allSelected}
      {sorting}
      on:check-all={onCheckAll}
      on:set-order-by={onSetOrderBy}
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
      on:select-row={onSelectRow}
    />
  </tbody>

  <tfoot>
    <TableHeader
      {headers}
      {allSelected}
      {sorting}
      on:check-all={onCheckAll}
      on:set-order-by={onSetOrderBy}
    />
  </tfoot>
</table>
