<script>
  import { Menu } from 'lucide-svelte';
  import MobileMenu from '@components/header/MobileMenu.svelte';

  let isMenuOpen = false;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      toggleMenu();
    }
  };

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<div class="menu-btn" role="button" on:click={toggleMenu} on:keydown={handleKeyDown} tabindex="0">
  <Menu class="nav-icon" />
</div>

{#if isMenuOpen}
  <MobileMenu {toggleMenu} />
{/if}

<style>
  .menu-btn {
  }
</style>
