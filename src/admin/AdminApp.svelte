<script>
  import Router, { location } from "svelte-spa-router";
  import { Modals, closeModal } from "svelte-modals";

  import Home from "./pages/Home.svelte";
  import Settings from "./pages/Settings.svelte";

  const routes = {
    "/": Home,
    "/settings": Settings,
  };
</script>

<nav>
  <a href="#/">Home</a>
  <a href="#/settings">Settings</a>
  <a href="#/settings?more=1">Settings More</a>
</nav>

<Router {routes} />

<hr />
/#{$location}

<Modals>
  <div slot="backdrop" class="backdrop" on:click={closeModal} />
</Modals>

<style>
  nav a {
    font-size: 1.5em;
  }

  .backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
  }
</style>
