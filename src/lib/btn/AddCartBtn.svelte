<script>
  import { ShoppingCart } from 'lucide-svelte';

  let cartBtn;
</script>

<button class="cart-btn" bind:this={cartBtn} on:click|preventDefault>
  <span>
    <ShoppingCart size={22} fill-opacity="0" overflow="visible" />
    <p>Add to Cart</p>
  </span>
</button>

<style>
  .cart-btn {
    width: 100%;
    color: var(--btn-text);
    padding-block: 0.35em;
    background-color: var(--primary);
    border-radius: 10px;
    box-shadow: 0px 12px 17px -15px var(--primary);
  }

  .cart-btn span {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-md);
    font-weight: 700;
  }
</style>
