<script>
  import { ShoppingCart, Trash2, X } from 'lucide-svelte';
  import { CheckoutBtn } from '@btn/index.js';

  let cartModal;
  let isModalOpen = false;

  const toggleCart = () => (cartModal.open ? cartModal.close() : cartModal.showModal());
</script>

<button type="button" class="cart-btn" on:click={toggleCart}>
  <span>
    <ShoppingCart class="nav-icon" strokeWidth={1.5} fill-opacity="0" overflow="visible" />
  </span>
</button>

<dialog class="cart-modal" bind:this={cartModal}>
  <header class="modal-header">
    <p class="title">Your Cart</p>
    <button type="button" class="close-btn" on:click={toggleCart} aria-label="Close cart">
      <span>
        <X size={30} strokeWidth={1.5} />
      </span>
    </button>
  </header>

  <section class="modal-content">
    <div class="divider"></div>
    <section class="item-wrap">
      <img class="product-img round extra" src="assets/products/thumbnail-1.jpg" alt="item" />
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
    width: 98%;
    max-width: 450px;
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
  .close-btn,
  .item-name {
    color: var(--accent-text);
    font-weight: 700;
  }

  .close-btn:hover {
    outline: 1px solid var(--gray);
  }

  .title {
    font-size: 20px;
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

  /* Positioning */
  @media screen and (min-width: 550px) {
    .cart-btn {
      position: relative;
    }

    .cart-modal {
      position: absolute;
      top: 10%;
      left: 60%;
    }

    .item-wrap {
      width: 95%;
    }
  }

  @media screen and (min-width: 768px) {
    .cart-modal {
      top: 8%;
      left: 70%;
    }
  }

  @media screen and (min-width: 1024px) {
    .cart-modal {
      max-width: 500px;
    }
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
