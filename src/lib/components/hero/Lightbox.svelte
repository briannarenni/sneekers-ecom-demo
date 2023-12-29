<script>
  import { X } from 'lucide-svelte';
  import { ModalGallery } from '@components/hero/index.js';

  let dialogModal;

  // Allows Gallery to access dialog method
  export const openLightbox = () => dialogModal.showModal();

  const closeLightbox = () => dialogModal.close();
</script>

<dialog class="lightbox max" bind:this={dialogModal}>
  <div class="modal-content">
    <button type="button" class="close-btn" on:click={closeLightbox}>
      <X class="mobile-icon" />
    </button>
    <ModalGallery />
  </div>
</dialog>

<style>
  .lightbox {
    background-color: rgba(0, 0, 0, 0.9);
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
    transform: scale(1.3);
  }

  .close-btn:active {
    color: var(--primary);
  }
</style>
