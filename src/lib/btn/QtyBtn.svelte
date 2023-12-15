<script>
  import { Plus, Minus } from 'lucide-svelte';

  const iconColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
  let productQty = 0;
  const increaseQty = () => productQty++;
  const decreaseQty = () => (productQty > 0 ? productQty-- : 0);
</script>

<div class="qty-select">
  <button on:click={decreaseQty}>
    <span>
      <Minus size={18} strokeWidth={4} color={iconColor} />
    </span>
  </button>
  <span class="qty">{productQty}</span>
  <button on:click={increaseQty}>
    <span>
      <Plus size={18} strokeWidth={4} color={iconColor} />
    </span>
  </button>
</div>

<style>
  .qty-select {
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    color: var(--accent-text);
    font-weight: 700;
    padding: 0.35em;
    background-color: #f6f8fd;
    border-radius: 10px;
  }
</style>
