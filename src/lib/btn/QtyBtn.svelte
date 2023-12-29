<script>
  import { Plus, Minus } from 'lucide-svelte';

  let productQty = 0;
  const increaseQty = () => productQty++;
  const decreaseQty = () => (productQty > 0 ? productQty-- : 0);
</script>

<div class="qty-select">
  <button type="button" on:click={decreaseQty}>
    <span class="qty-icon">
      <Minus size={18} strokeWidth={4} />
    </span>
  </button>
  <span class="qty">{productQty}</span>
  <button type="button" on:click={increaseQty}>
    <span class="qty-icon">
      <Plus size={18} strokeWidth={4} />
    </span>
  </button>
</div>

<style>
  .qty-select {
    width: 100%;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
    padding: 0.35em;
    background-color: #f6f8fd;
    border-radius: 10px;
  }

  .qty {
    color: var(--accent-text);
  }

  .qty-icon {
    color: var(--primary);
  }
</style>
