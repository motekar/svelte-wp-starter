<script>
  import { openModal } from "svelte-modals";

  import BaseModal from "./BaseModal.svelte";

  import TestModal2 from "./TestModal2.svelte";

  export let isOpen;

  export let title;
  export let message;
</script>

<BaseModal {isOpen} width="auto" height="auto" dismissable={false}>
  <h1>{title}</h1>
  <h1>{message}</h1>

  <p>This modal can't be dismissed</p>

  <button
    on:click={() => {
      openModal(TestModal2, {
        title: "Dismissable Modal",
        message: "Test",
      });
    }}>Open Nested Modal</button
  >
</BaseModal>
