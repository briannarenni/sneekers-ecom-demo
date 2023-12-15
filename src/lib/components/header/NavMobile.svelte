<script>
  import { Menu, ShoppingCart, CircleUserRound } from 'lucide-svelte';
  import { MenuBtn } from '@btn/index.js';
</script>

<nav class="mobile-nav">
  <div class="left-nav">
    <MenuBtn />
    <img class="logo" src="src/assets/icons/logo.svg" alt="sneekers Logo" />
  </div>

  <div class="right-nav">
    <ShoppingCart class="nav-icon" strokeWidth={1.5} fill-opacity="0" />
    <CircleUserRound class="nav-icon" strokeWidth={1.5} fill-opacity="0" />
  </div>
</nav>

<style>
  .mobile-nav {
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

  .left-nav {
    width: 40%;
  }

  .logo {
    width: calc(95% + 0.5vw);
  }

  @media screen and (min-width: 600px) {
    .logo {
      width: calc(60% + 0.1vw);
    }
  }

  @media screen and (min-width: 1024px) {
    .mobile-nav {
      display: none;
    }
  }
</style>
