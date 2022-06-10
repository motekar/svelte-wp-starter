<script>
  export let disabled = false;
  export let selected = false;
  export let onSelect = () => {};
</script>

<td class="manage-column column-cb check-column-red">
  <label for="select-all" class="screen-reader-text">Select All</label>
  <input
    id="select-all"
    type="checkbox"
    {disabled}
    checked={selected}
    onChange={(ev) => onSelect(ev.target.checked)}
  />
</td>
