<script>
  export let params;
</script>

<h1>
  This is the {params.blogName} blog!
</h1>
<p>
  I think {params.blogName} are cool!
</p>
<hr />
{JSON.stringify(params)}
