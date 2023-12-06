<script>
  import { Menu, ShoppingCart, CircleUserRound } from 'lucide-svelte';
  import MobileMenu from './MobileMenu.svelte';

  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<nav class="mobile-nav">
  <div class="left-nav">
    <button class="menu-btn" on:click={toggleMenu}>
      <Menu class="nav-icon-sm" />
    </button>
    <img class="logo" src="src/assets/icons/logo.svg" alt="sneekers Logo" />
  </div>

  <div class="right-nav">
    <ShoppingCart class="nav-icon-sm" strokeWidth={1.5} fill-opacity="0" />
    <CircleUserRound
      class="nav-icon-md"
      color={'#ff6b00'}
      size={30}
      strokeWidth={1.5}
      fill-opacity="0"
    />
  </div>
</nav>

{#if isMenuOpen}
  <MobileMenu {toggleMenu} />
{/if}

<style>
  .mobile-nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    width: 50%;
  }

  .left-nav,
  .right-nav {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-md);
  }

  @media screen and (min-width: 768px) {
    .logo {
      width: 75%;
    }
  }

  @media screen and (min-width: 1024px) {
    .mobile-nav {
      display: none;
    }
  }
</style>
