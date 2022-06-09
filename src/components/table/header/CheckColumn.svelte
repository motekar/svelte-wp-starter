<script>
  export let disabled = false;
  export let selected = false;
  export let onSelect = () => {};
</script>

<td class="manage-column column-cb check-column-red">
  <label class="screen-reader-text">Select All</label>
  <input
    type="checkbox"
    {disabled}
    checked={selected}
    onChange={(ev) => onSelect(ev.target.checked)}
  />
</td>
