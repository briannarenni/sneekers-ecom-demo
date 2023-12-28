<script>
  import { windowSizeStore } from 'svelte-legos';
  import { Menu, ShoppingCart, CircleUserRound } from 'lucide-svelte';
  import { CartModal, FullMenu, MobileMenu } from '@components/index.js';

  const size = windowSizeStore();
  const mobileBreakpoint = 1023;
  $: isMobile = $size.width < mobileBreakpoint;
</script>

<header class="header-comp">
  <nav class="nav-bar">
    <div class="left-nav">
      {#if isMobile}
        <MobileMenu />
        <img class="logo" src="public/assets/icons/logo.svg" alt="sneekers Logo" />
      {:else}
        <img class="logo" src="public/assets/icons/logo.svg" alt="sneekers Logo" />
        <FullMenu />
      {/if}
    </div>

    <div class="right-nav">
      <CartModal />
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
      padding-inline: var(--gap-lg);
      border-block-end: 1px solid var(--off-white);
    }
  }

  @media screen and (max-width: 1023px) {
    header {
      margin-block-end: var(--spacing-sm);
    }
  }

  @media screen and (min-width: 1024px) {
    header {
      width: 95%;
      margin: 0 auto;
      padding-inline: var(--gap-xl);
    }

    .logo {
      display: block;
    }

    .left-nav {
      width: max-content;
    }
  }

  @media screen and (min-width: 1440px) {
    header {
      width: 90%;
      margin: 0 auto;
    }
  }
</style>
