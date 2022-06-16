<script>
  import BaseModal from "./BaseModal.svelte";

  export let isOpen;

  export let title;
  export let message;
</script>

<BaseModal {isOpen} width="auto" height="auto" dismissable={true}>
  <h1>{title}</h1>
  <h1>{message}</h1>

  <p>This Modal can be dismissed</p>
</BaseModal>
