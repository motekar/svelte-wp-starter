<script>
  import Router, { location } from "svelte-spa-router";

  import ModalsWrapper from "@/components/modal/ModalsWrapper.svelte";

  import HomePage from "./pages/HomePage.svelte";
  import SettingsPage from "./pages/SettingsPage.svelte";

  const routes = {
    "/": HomePage,
    "/settings": SettingsPage,
  };
</script>

<nav class="tw-bg-green-100">
  <a href="#/">Home</a>
  <a href="#/settings">Settings</a>
  <a href="#/settings?more=1">Settings More</a>
</nav>

<Router {routes} />

<hr />
/#{$location}

<ModalsWrapper />

<style lang="postcss">
  @tailwind utilities;

  nav a {
    font-size: 1.5em;
  }
</style>
