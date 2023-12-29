<script>
  import { ShoppingCart, Trash2, X } from 'lucide-svelte';
  import { CheckoutBtn } from '@btn/index.js';

  let cartModal;

  const openCart = () => cartModal.showModal();
  const closeCart = () => cartModal.close();
</script>

<button class="cart-btn" on:click={openCart}>
  <span>
    <ShoppingCart class="nav-icon" strokeWidth={1.5} fill-opacity="0" overflow="visible" />
  </span>
</button>

<dialog class="cart-modal" bind:this={cartModal}>
  <header class="modal-header">
    <p class="title">Cart</p>
    <button class="close-btn" on:click={closeCart} aria-label="Close cart">
      <span>
        <X size={28} />
      </span>
    </button>
  </header>

  <section class="modal-content">
    <div class="divider"></div>
    <section class="item-wrap">
      <img class="product-img round large" src="assets/products/thumbnail-1.jpg" alt="item" />
      <div class="desc-wrap">
        <p class="item-name">Fall Limited Edition Sneakers</p>
        <div class="price-qty">
          <p class="item-price">$125.00</p>
          <p class="item-qty">Qty: 3</p>
        </div>
      </div>
      <div><Trash2 strokeWidth={1.5} fill-opacity="0" /></div>
    </section>

    <CheckoutBtn />
  </section>
</dialog>

<style>
  .cart-modal {
    background-color: var(--page-bg);
    color: var(--primary-text);
    width: 97%;
    max-width: 400px;
    max-height: 330px;
    overflow-y: auto;
    padding-block-start: var(--gap-xs);
    padding-block-end: var(--gap-md);
    padding-inline: var(--gap-lg);
    scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
    scrollbar-width: thin;
  }

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    margin-block-end: var(--gap-xs);
  }

  .modal-content {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .title,
  .item-name,
  .item-qty {
    color: var(--accent-text);
  }

  .title {
    font-size: 18px;
    font-weight: bold;
  }

  .item-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: var(--spacing-sm);
  }

  .price-qty {
    display: flex;
    gap: var(--gap-xl);
  }

  /* TODO: Desktop */
  @media screen and (max-width: 550px) {
  }

  /* Webkit Scrollbar */
  .cart-modal::-webkit-scrollbar {
    width: 5px;
  }

  .cart-modal::-webkit-scrollbar-track {
    background: transparent;
  }

  .cart-modal::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 8px;
    border: 3px solid transparent;
  }
</style>
