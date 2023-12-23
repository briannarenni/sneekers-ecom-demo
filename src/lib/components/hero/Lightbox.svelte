<script>
  import { X } from 'lucide-svelte';
  import ModalGallery from '@components/hero/ModalGallery.svelte';

  let dialogModal;
  export let spotlightIndex;

  // Allows Gallery to access dialog method
  export function openModal() {
    dialogModal.showModal();
  }

  function closeModal() {
    dialogModal.close();
  }
</script>

<dialog class="lightbox max" bind:this={dialogModal}>
  <div class="modal-content">
    <button class="close-btn" on:click={closeModal}>
      <X class="mobile-icon" />
    </button>
    <ModalGallery {spotlightIndex} />
  </div>
</dialog>

<style>
  .lightbox {
    background-color: rgba(0, 0, 0, 0.8);
  }

  .modal-content {
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xs);
    margin: 0 auto;
  }

  .close-btn {
    align-self: flex-end;
    color: #fff;
  }

  .close-btn:active {
    color: var(--primary);
  }
</style>
