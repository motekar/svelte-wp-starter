<script>
  import classnames from "classnames";

  export let name;
  export let title;
  export let primary = false;
  export let table = {};
  export let onSetOrderBy = () => {};

  const { direction, orderby } = table;
</script>

<th
  scope="col"
  class={classnames({
    "manage-column": true,
    sortable: true,
    asc: orderby === name && direction === "asc",
    desc: (orderby === name && direction === "desc") || orderby !== name,
    "column-primary": primary,
    ["column-" + name]: true,
  })}
  on:click|preventDefault={() => {
    onSetOrderBy(
      name,
      orderby === name && direction === "desc" ? "asc" : "desc"
    );
  }}
>
  <a href={"#"}>
    <span>{title}</span>
    <span class="sorting-indicator" />
  </a>
</th>
