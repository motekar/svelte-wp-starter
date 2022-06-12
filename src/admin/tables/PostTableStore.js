import { readable, writable, get } from "svelte/store";
import { asyncDerived, derived } from "@square/svelte-store";
import apiFetch from "@wordpress/api-fetch";

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

export const selectedRows = writable([]);
export const selectedEverything = writable(false);
export const selectedCount = derived(
  [selectedRows, data],
  ([$selectedRows, $data]) => {
    if ($selectedRows.length != $data?.rows?.length) {
      selectedEverything.set(false);
    }
    return get(selectedEverything) ? $data.total : $selectedRows.length;
  }
);
