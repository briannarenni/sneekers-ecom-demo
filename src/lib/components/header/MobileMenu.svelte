<script>
  import { X, ArrowBigRight } from 'lucide-svelte';

  export let toggleMenu;

  const handleDummyClick = () => {
    event.preventDefault();
  };

  const iconColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--gray-blue')
    .trim();
</script>

<nav class="menu left drawer min">
  <button class="close-btn" on:click={toggleMenu}>
    <X class="mobile-icon" color={iconColor} />
  </button>

  <a href="/" on:click={handleDummyClick}>
    <ArrowBigRight size={16} fill-opacity={0} />
    <div>Collections</div>
  </a>

  <a href="/" on:click={handleDummyClick}>
    <ArrowBigRight size={16} fill-opacity={0} />
    <div>Men</div>
  </a>

  <a href="/" on:click={handleDummyClick}>
    <ArrowBigRight size={16} fill-opacity={0} />
    <div>Women</div>
  </a>

  <a href="/" on:click={handleDummyClick}>
    <ArrowBigRight size={16} fill-opacity={0} />
    <div>About</div>
  </a>

  <a href="/" on:click={handleDummyClick}>
    <ArrowBigRight size={16} fill-opacity={0} />
    <div>Contact</div>
  </a>
</nav>

<style>
  .close-btn {
    width: fit-content;
  }
</style>
