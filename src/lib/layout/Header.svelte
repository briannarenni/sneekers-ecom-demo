<script>
  import { onMount, onDestroy } from 'svelte';
  import { addResizeListener, removeResizeListener, updateMobileStatus } from '@scripts/screenHelpers.js';
  import { Menu, ShoppingCart, CircleUserRound } from 'lucide-svelte';
  import FullMenu from '@components/menu/FullMenu.svelte';
  import MobileMenu from '@components/menu/MobileMenu.svelte';

  let isMobile = updateMobileStatus();

  const handleScreenResize = () => {
    isMobile = updateMobileStatus();
  };

  onMount(() => {
    addResizeListener();
    window.addEventListener('resize', handleScreenResize);
  });

  onDestroy(() => {
    removeResizeListener();
    window.removeEventListener('resize', handleScreenResize);
  });
</script>

<header class="header-comp">
  <nav class="nav-bar">
    <div class="left-nav">
      {#if isMobile}
        <MobileMenu />
        <img class="logo" src="src/assets/icons/logo.svg" alt="sneekers Logo" />
      {:else}
        <img class="logo" src="src/assets/icons/logo.svg" alt="sneekers Logo" />
        <FullMenu />
      {/if}
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
