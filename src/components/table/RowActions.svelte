<script>
  export let row;
  export let disabled = false;
  export let actions = [];
</script>

<div class="row-actions">
  {#if disabled || !actions.length}
    <span>&nbsp;</span>
  {:else}
    {#each actions as action}
      <span class={action.name}>
        <a
          href={action.href ?? "#"}
          on:click={(ev) => action.action && action.action(row)}
        >
          {action.label ?? action.name}
        </a>
      </span>
    {/each}
  {/if}
</div>

<style type="text/scss">
  div.row-actions {
    display: flex;
    gap: 0.5rem;
  }

  span {
    padding-right: 0.5rem;
    border-right: 1px solid #d3d3d3;

    &:last-child {
      padding-right: 0;
      border-right: none;
    }
  }
</style>
