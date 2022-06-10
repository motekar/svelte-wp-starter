<script>
  import { createEventDispatcher } from "svelte";

  export let id;
  export let disabled = false;
  export let selected = false;

  const dispatch = createEventDispatcher();
</script>

<th scope="row" class="check-column">
  <input
    type="checkbox"
    {disabled}
    checked={selected}
    on:change={(ev) => dispatch("select-row", { id, value: ev.target.checked })}
  />
</th>
