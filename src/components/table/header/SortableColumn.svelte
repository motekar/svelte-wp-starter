<script>
  import classNames from "classnames";

  import { createEventDispatcher } from "svelte";

  export let name;
  export let title;

  export let primary = false;
  export let sorted = false;
  export let direction = "desc";

  const dispatch = createEventDispatcher();
</script>

<th
  scope="col"
  class={classNames({
    "manage-column": true,
    sortable: true,
    asc: direction === "asc",
    desc: direction === "desc",
    sorted: sorted,
    "column-primary": primary,
    ["column-" + name]: true,
  })}
  on:click={() => {
    direction = direction === "desc" ? "asc" : "desc";
    dispatch("set-order-by", { column: name, direction });
  }}
>
  <a href={"#"}>
    <span>{title}</span>
    <span class="sorting-indicator" />
  </a>
</th>
