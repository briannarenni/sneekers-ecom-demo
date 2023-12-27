<script>
  import { ShoppingCart, Trash2 } from 'lucide-svelte';

  let isCartOpen = false;
  const toggleCart = () => (isCartOpen = !isCartOpen);
  const handleKeyDown = (event) => (event.key === 'Enter' ? toggleMenu() : null);
</script>

<!-- TODO: Overflow over Hero -->
<div class="cart-btn" role="button" on:click={toggleCart} on:keydown={handleKeyDown} tabindex="0">
  <ShoppingCart class="nav-icon" strokeWidth={1.5} fill-opacity="0" />
</div>

{#if isCartOpen}
  <section class="cart-wrap">
    <div><Trash2 strokeWidth={1.5} fill-opacity="0" /></div>
  </section>
{/if}
