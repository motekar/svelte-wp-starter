<script>
  import { onMount } from "svelte";
  import apiFetch from "@wordpress/api-fetch";

  import Table from "@/components/table/Table.svelte";
  import TableNav from "@/components/table/navigation/TableNav.svelte";

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

  const updateSelection = (all) => {
    if (
      !isEverything &&
      selected.length > 0 &&
      selected.length != rows.length
    ) {
      return;
    }
    selected = all ? rows.map((row) => getId(row)) : [];
  };
  $: updateSelection(isEverything);

  $: if (selected.length != rows.length) {
    isEverything = false;
  }

  let rows = [];
  let selected = [];
  let isEverything = false;
  let page = 1;
  let total = 0;
  let perPage = 10;

  const actions = [
    {
      name: "edit",
      label: "Edit",
      action: (data) => {
        console.log("edit", data);
      },
    },
    {
      name: "trash",
      label: "Delete",
    },
    {
      name: "preview",
      label: "Preview",
      href: "https://google.com",
    },
  ];

  let totalSelected;

  $: totalSelected = selected.length;

  onMount(() => {
    loadData();
  });
</script>

<TableNav
  {page}
  {total}
  {totalSelected}
  bind:perPage
  bind:isEverything
  on:change-page={onChangePage}
>
  Bulk action
</TableNav>

<Table
  {headers}
  {rows}
  {actions}
  {getId}
  {getRow}
  bind:selected
  on:set-order-by={(e) => console.log("set-order-by", e.detail)}
/>

<TableNav
  {page}
  {total}
  {totalSelected}
  bind:perPage
  bind:isEverything
  on:change-page={onChangePage}
>
  Bulk action
</TableNav>
