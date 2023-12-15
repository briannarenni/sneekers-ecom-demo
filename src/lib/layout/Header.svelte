<script>
  import { Menu, ShoppingCart, CircleUserRound } from 'lucide-svelte';

  import FullMenu from '@components/FullMenu.svelte';
  import MobileMenu from '@components/MobileMenu.svelte';
</script>

<header class="header-comp">
  <nav class="nav-bar">
    <div class="left-nav">
      <MobileMenu />
      <img class="logo" src="src/assets/icons/logo.svg" alt="sneekers Logo" />
      <FullMenu />
    </div>

    <div class="right-nav">
      <ShoppingCart class="nav-icon" strokeWidth={1.5} fill-opacity="0" />
      <CircleUserRound class="nav-icon" strokeWidth={1.5} fill-opacity="0" />
    </div>
  </nav>
</header>

<style>
  header {
    height: fit-content;
  }

  .logo {
    display: none;
  }

  .nav-bar {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .left-nav,
  .right-nav {
    height: 100%;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-md);
  }

  @media screen and (min-width: 768px) {
    header {
      padding-block: var(--spacing-sm);
      padding-inline: var(--gap-xxl);
    }
  }

  @media screen and (min-width: 1024px) {
    header {
      padding-inline: var(--gap-xxl);
      border-block-end: 1px solid var(--off-white);
    }

    .left-nav {
      width: max-content;
    }

    .logo {
      display: block;
    }
  }
</style>
