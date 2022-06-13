<script>
  import { onMount } from "svelte";

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

  // use function to prevent reactive loop on $selectedRows
  $: updateSelection($selectedEverything);
  const updateSelection = (all) => {
    $selectedRows = all
      ? $data.rows.map((row) => getId(row))
      : $selectedRows.length == $data?.rows?.length
      ? []
      : $selectedRows;
  };

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

  onMount(() => {});
</script>

{$isLoading ? "Loading..." : ""}

<TableNav
  page={$pagination.page}
  total={$data?.total ?? 0}
  totalSelected={$selectedCount}
  bind:perPage={$pagination.limit}
  bind:isEverything={$selectedEverything}
  on:change-page={callbacks.onChangePage}
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
  on:change-page={callbacks.onChangePage}
>
  Bulk action
</TableNav>
