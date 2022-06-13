import { readable, writable, get } from "svelte/store";
import { asyncDerived, derived } from "@square/svelte-store";
import apiFetch from "@wordpress/api-fetch";
import writableDerived from "svelte-writable-derived";

export const isLoading = writable(false);

export const options = readable({
  columns: [
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
  ],
});

export const callbacks = {
  getId: (row) => row.id,
  getRow: (row, rowParams) => {
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
  },
  onChangePage: (e) => {
    pagination.set({ ...get(pagination), page: e.detail });
    selectedRows.set([]);
    selectedEverything.set(false);
  },
};

export const pagination = writable({ page: 1, limit: 10 });

export const filters = writable({});

// auto reload data when source variable changed
export const data = asyncDerived(
  [pagination, filters],
  async ([$pagination, $filters]) => {
    isLoading.set(true);
    const posts = await apiFetch({
      path: `/wp/v2/posts?per_page=${$pagination.limit}&page=${$pagination.page}`,
      parse: false,
    });
    const rows = await posts.json();
    const total = posts.headers.get("X-WP-Total");

    isLoading.set(false);
    return { rows, total };
  },
  1
);

export const selectedEverything = writable(false);
export const selectedRows = writableDerived(
  [data, selectedEverything],
  ([$data, $selectedEverything]) => {
    if ($selectedEverything) {
      // check all rows
      return $data.rows.map((row) => callbacks.getId(row));
    }

    // triggered on clear all selected
    if (get(selectedRows).length == $data?.rows?.length) {
      // uncheck all rows
      return [];
    }

    return get(selectedRows);
  },
  () => [], // still don't understand how this function works
  [] // initial value for selectedRows
);

export const selectedCount = derived(
  [selectedRows, data],
  ([$selectedRows, $data]) => {
    if ($selectedRows.length != $data?.rows?.length) {
      selectedEverything.set(false);
    }
    return get(selectedEverything) ? $data.total : $selectedRows.length;
  }
);
