<script>
  import { X, ArrowBigRight } from 'lucide-svelte';
  import { fly } from 'svelte/transition';

  export let toggleMenu;

  const handleDummyClick = () => {
    event.preventDefault();
  };

  const iconColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--gray-blue')
    .trim();
</script>

<nav
  class="menu left drawer min"
  in:fly={{ x: -100, duration: 200 }}
  out:fly={{ x: -100, duration: 300 }}
>
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

  a div {
    font-weight: 700;
  }
</style>
