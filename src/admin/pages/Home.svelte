<script>
  import { onMount } from "svelte";
  import apiFetch from "@wordpress/api-fetch";
  import Table from "@/components/table/Table.svelte";
  import TableNav from "@/components/table/navigation/TableNav.svelte";

  let msg = "Welcome to Your Svelte Admin App";

  const headers = [
    {
      name: "title",
      title: "Title",
      primary: true,
      sortable: true,
    },
    {
      name: "author",
      title: "Author",
      sortable: true,
    },
    {
      name: "categories",
      title: "Categories",
    },
    {
      name: "tags",
      title: "Tags",
    },
    {
      name: "date",
      title: "Date",
    },
  ];
  const getId = (row) => row.id;
  const getRow = (row, rowParams) => {
    return [
      {
        name: "title",
        content: `<strong>${row.title.rendered}</strong>`,
      },
      {
        name: "author",
        content: row.author,
      },
      {
        name: "categories",
        content: row.categories,
      },
      {
        name: "tags",
        content: row.tags,
      },
      {
        name: "date",
        content: row.date,
      },
    ];
  };
  const getRowActions = (row, rowParams) => {
    return "TODO";
  };

  const loadData = async () => {
    const posts = await apiFetch({
      path: `/wp/v2/posts?per_page=${perPage}&page=${page}`,
      parse: false,
    });
    rows = await posts.json();
    total = posts.headers.get("X-WP-Total");
  };

  const onChangePage = (e) => {
    page = e.detail;
    loadData();
  };

  let rows = [];
  let page = 1;
  let total = 0;
  let perPage = 7;

  onMount(() => {
    loadData();
  });
</script>

<div class="home">
  <span>{msg}</span>

  <TableNav {page} {total} {perPage} on:change-page={onChangePage}>
    Bulk action
  </TableNav>

  <Table
    {headers}
    {rows}
    {getId}
    {getRow}
    {getRowActions}
    on:set-order-by={(e) => console.log("set-order-by", e.detail)}
    on:select-all={(e) => console.log("select-all", e.detail)}
    on:select-row={(e) => console.log("select-row", e.detail)}
  />

  <TableNav {page} {total} {perPage} on:change-page={onChangePage}>
    Bulk action
  </TableNav>
</div>
