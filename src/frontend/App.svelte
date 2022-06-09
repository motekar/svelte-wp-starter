<script>
  import Router, { location } from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import About from "./pages/About.svelte";
  import Blog from "./pages/Blog.svelte";
</script>

<nav>
  <a href="#/">Home</a>
  <a href="#/about">About</a>
  <a href="#/blog/colors">Colors</a>
</nav>

<Router
  routes={{
    "/": Home,
    "/about": About,
    "/blog/:blogName": Blog,
  }}
/>

<hr />
/#{$location}
