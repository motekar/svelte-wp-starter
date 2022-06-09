<script>
  import TableHeader from "./header/TableHeader.svelte";
  import TableRows from "./row/TableRows.svelte";

  export let table = {};
  export let headers = [];
  export let rows = [];
  export let getRow = (row, rowParams) => {
    return headers.map((header) => {
      return {
        name: header.name,
        content: row[header.name],
      };
    });
  };
  export let getRowActions = () => {};
</script>

<table class="wp-list-table widefat fixed striped items">
  <thead>
    <TableHeader {table} {headers} />
  </thead>

  <tbody>
    <TableRows {rows} {headers} {getRow} {getRowActions} />
  </tbody>

  <tfoot>
    <TableHeader {table} {headers} />
  </tfoot>
</table>
