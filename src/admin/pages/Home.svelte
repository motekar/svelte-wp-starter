<script>
  import PostTable from "../tables/PostTable.svelte";

  let msg = "Welcome to Your Svelte Admin App";
</script>

<div class="home">
  <h2>{msg}</h2>

  <PostTable />
</div>
