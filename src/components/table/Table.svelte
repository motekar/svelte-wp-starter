<script>
  import { onMount } from "svelte";

  import TableHeader from "./header/TableHeader.svelte";
  import TableRows from "./row/TableRows.svelte";

  export let headers;
  export let rows = [];
  export let getId = (row) => row.id;
  export let getRow = (row, rowParams) => {
    return headers.map((header) => {
      return {
        name: header.name,
        content: row[header.name],
      };
    });
  };

  /* const tableOptions =
  direction,
  displaySelected,
  filterBy,
  groupBy,
  orderby,
  page,
  per_page,
  selected,
  */

  onMount(() => {
    // console.log("table", this);
  });
</script>

<table class="wp-list-table widefat fixed striped items">
  <thead>
    <TableHeader {headers} on:set-order-by on:select-all />
  </thead>

  <tbody>
    <TableRows {rows} {headers} {getId} {getRow} on:select-row>
      <slot name="row-actions" slot="row-actions" />
    </TableRows>
  </tbody>

  <tfoot>
    <TableHeader {headers} on:set-order-by on:select-all />
  </tfoot>
</table>
