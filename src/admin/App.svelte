<script>
  import Router, { location } from "svelte-spa-router";
  import Home from "./pages/Home.svelte";
  import Settings from "./pages/Settings.svelte";
</script>

<nav>
  <a href="#/">Home</a>
  <a href="#/settings">Settings</a>
</nav>

<Router
  routes={{
    "/": Home,
    "/settings": Settings,
  }}
/>

<hr />
/#{$location}

<style>
  nav a {
    font-size: 1.5em;
  }
</style>
