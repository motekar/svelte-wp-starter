<script>
  import { createEventDispatcher } from "svelte";

  export let disabled = false;
  export let selected = false;

  const dispatch = createEventDispatcher();
</script>

<td class="manage-column column-cb">
  <label for="select-all" class="screen-reader-text">Select All</label>
  <input
    name="select-all"
    type="checkbox"
    {disabled}
    checked={selected}
    on:change={(ev) => dispatch("select-all", ev.target.checked)}
  />
</td>

<style>
  td {
    vertical-align: middle;
    padding: 2px 0 0 3px !important;
    width: 2.2em;
    margin: 0;
  }
</style>
