<script>
  import { getContext } from "svelte";
  import debounce from "@/utils/debounce";

  import NavigationButton from "./NavigationButton.svelte";

  export let page;
  export let total;
  export let perPage;

  let currentPage = 1;
  let maxPage = 1;
  let onePage = true;

  $: {
    maxPage = Math.ceil(total / perPage);
    onePage = total <= perPage;
    currentPage = page;
  }

  const callbacks = getContext("callbacks");

  const dispatchChangePage = debounce(
    () => callbacks.changePage(currentPage),
    250
  );

  const changePage = (newPage, now) => {
    currentPage = newPage > maxPage ? maxPage : newPage < 1 ? 1 : newPage;

    if (now) {
      return callbacks.changePage(currentPage);
    }

    dispatchChangePage();
  };
</script>

{#if !onePage}
  <NavigationButton
    title="First page"
    button="«"
    className="first-page"
    disabled={currentPage <= 1}
    on:click={() => changePage(1, true)}
  />

  <NavigationButton
    title="Prev page"
    button="‹"
    className="prev-page"
    disabled={currentPage <= 1}
    on:click={() => changePage(currentPage - 1)}
  />

  <span class="paging-input">
    <label for="paged" class="screen-reader-text"> Current Page </label>

    <input
      class="current-page"
      type="number"
      min="1"
      max={maxPage}
      name="paged"
      bind:value={currentPage}
      size={2}
      aria-describedby="table-paging"
      on:change={() => changePage(currentPage)}
      on:keyup={() => changePage(currentPage)}
    />

    <span class="tablenav-paging-text" />
  </span>
  of
  <span>{maxPage}</span>

  <NavigationButton
    title="Next page"
    button="›"
    className="next-page"
    disabled={currentPage >= maxPage}
    on:click={() => changePage(currentPage + 1)}
  />

  <NavigationButton
    title="Last page"
    button="»"
    className="last-page"
    disabled={currentPage >= maxPage}
    on:click={() => changePage(maxPage, true)}
  />
{/if}
