<script>
  import { openModal } from "svelte-modals";

  import TestModal from "./../components/modals/TestModal.svelte";
</script>

<div class="app-settings">The Svelte Settings Page</div>

<button
  class="button button-primary"
  on:click={() =>
    openModal(TestModal, {
      title: "Alert",
      message: "This is an alert",
    })}>Open Modal</button
>
