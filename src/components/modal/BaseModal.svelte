<script>
  import { onMount } from "svelte";
  import { closeModal } from "svelte-modals";

  import { dismissableStore } from "@/components/modal/ModalStore.js";

  // provided by Modals
  export let isOpen;

  export let width = "auto";
  export let height = "auto";
  export let dismissable = false;

  function handleKeydown({ key }) {
    if (key == "Escape" && dismissable) {
      closeModal();
    }
  }

  onMount(() => {
    $dismissableStore = dismissable;
  });
</script>

<svelte:window on:keydown={handleKeydown} />

{#if isOpen}
  <div
    role="dialog"
    class="modal"
    class:center={width != "auto"}
    class:middle={height != "auto"}
    style:max-width={width == "auto" ? false : width}
    style:max-height={height == "auto" ? false : height}
  >
    <div class="contents">
      <slot />
      <div class="actions">
        {#if $$slots.action}
          <slot name="actions" />
        {:else}
          <button class="button button-primary" on:click={closeModal}>OK</button
          >
        {/if}
      </div>
    </div>
  </div>
{/if}

<style lang="scss">
  .modal {
    position: fixed;
    z-index: 160000;
    inset: 30px;

    &.center {
      left: 50%;
      transform: translateX(-50%);
    }
    &.middle {
      top: 50%;
      transform: translateY(-50%);
    }
    &.center.middle {
      transform: translate(-50%, -50%);
    }
  }

  .contents {
    position: absolute;
    inset: 0;
    overflow: auto;
    box-shadow: 0 5px 15px rgb(0 0 0 / 70%);
    background: #fff;
    -webkit-font-smoothing: subpixel-antialiased;
  }
</style>
