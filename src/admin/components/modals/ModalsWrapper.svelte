<script>
  import { Modals, modals, closeModal } from "svelte-modals";
  import { portal } from "svelte-portal";

  import { dismissableStore } from "./ModalStore.js";

  const body = document.querySelector("body");

  $: {
    if ($modals.length) {
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
    }
  }

  const maybeCloseModal = () => {
    if ($dismissableStore) {
      closeModal();
    }
  };
</script>

<div use:portal={"body"}>
  <Modals>
    <div slot="backdrop" class="backdrop" on:click={maybeCloseModal} />
  </Modals>
</div>

<style>
  .backdrop {
    position: fixed;
    min-height: 360px;
    background: #000;
    opacity: 0.7;
    z-index: 159900;
    inset: 0;
  }
</style>
