<script>
  import { onMount, setContext } from "svelte";

  import Table from "@/components/table/Table.svelte";
  import TableNav from "@/components/table/navigation/TableNav.svelte";

  import {
    callbacks,
    pagination,
    options,
    isLoading,
    data,
    selectedRows,
    selectedCount,
    selectedEverything,
  } from "./PostTableStore.js";

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

  setContext("callbacks", callbacks);

  onMount(() => {});
</script>

{$isLoading ? "Loading..." : ""}

<TableNav
  page={$pagination.page}
  total={$data?.total ?? 0}
  totalSelected={$selectedCount}
  bind:perPage={$pagination.limit}
  bind:isEverything={$selectedEverything}
>
  Bulk action
</TableNav>

<Table
  headers={$options.columns}
  rows={$data?.rows ?? []}
  {actions}
  getId={callbacks.getId}
  getRow={callbacks.getRow}
  bind:selected={$selectedRows}
  on:set-order-by={(e) => console.log("set-order-by", e.detail)}
/>

<TableNav
  page={$pagination.page}
  total={$data?.total ?? 0}
  totalSelected={$selectedCount}
  bind:perPage={$pagination.limit}
  bind:isEverything={$selectedEverything}
>
  Bulk action
</TableNav>
