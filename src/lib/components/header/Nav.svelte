<script>
  import { Menu, ShoppingCart, CircleUserRound } from 'lucide-svelte';
</script>

<!-- * If over 768px, show full Menu and bottom border -->
<nav class="full-nav">
  <h1>REG NAV BAR LONG TEST</h1>
</nav>

<style>
  .full-nav {
    width: 100%;
  }
  @media screen and (max-width: 1023px) {
    .full-nav {
      display: none;
    }
  }
</style>
