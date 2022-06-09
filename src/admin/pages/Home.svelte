<script>
  import { onMount } from "svelte";
  import apiFetch from "@wordpress/api-fetch";
  import Table from "@/components/table/Table.svelte";
  import PaginationLinks from "@/components/table/navigation/PaginationLinks.svelte";

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

  let rows = [];
  let page = 1;
  let total = 0;
  onMount(() => {
    loadData();
  });

  const loadData = async () => {
    const posts = await apiFetch({
      path: "/wp/v2/posts?per_page=5&page=" + page,
      parse: false,
    });
    rows = await posts.json();
    total = posts.headers.get("X-WP-Total");
  };
</script>

<div class="home">
  <span>{msg}</span>

  <Table {headers} {rows} {getRow} />

  <PaginationLinks
    {page}
    {total}
    perPage={5}
    on:change-page={(e) => {
      page = e.detail;
      loadData();
    }}
  />
</div>
