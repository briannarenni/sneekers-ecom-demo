<script>
  import { Menu, ShoppingCart, CircleUserRound } from 'lucide-svelte';

  const handleDummyClick = () => {
    event.preventDefault();
  };
</script>

<div id="full-menu" class="full-menu menu">
  <a href="/" on:click={handleDummyClick}>
    <div>Collections</div>
  </a>

  <a href="/" on:click={handleDummyClick}>
    <div>Men</div>
  </a>

  <a href="/" on:click={handleDummyClick}>
    <div>Women</div>
  </a>

  <a href="/" on:click={handleDummyClick}>
    <div>About</div>
  </a>

  <a href="/" on:click={handleDummyClick}>
    <div>Contact</div>
  </a>
</div>

<style>
  #full-menu {
    width: 100%;
    margin-block-start: 0;
  }

  .full-menu a {
    padding: 0.75em;
    border-radius: 2em;
  }

  .full-menu a:hover {
    background-color: var(--secondary-container);
  }
</style>
