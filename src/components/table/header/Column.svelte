<script>
  import classnames from "classnames";

  export let name;
  export let title;
  export let primary = false;
</script>

<th
  scope="col"
  class={classnames({
    "manage-column": true,
    "column-primary": primary,
    ["column-" + name]: true,
  })}
>
  <span>{title}</span>
</th>
