<script>
  export let disabled = false;
  export let actions = [];
</script>

<div class="row-actions">
  {#if !disabled}
    {#each actions as action}
      <span class={action.class}>{action.content}</span>
    {/each}
  {/if}
</div>
