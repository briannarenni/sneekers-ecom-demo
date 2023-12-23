<script>
  import { X, ArrowBigRight, Menu } from 'lucide-svelte';
  import { fly } from 'svelte/transition';

  let isMenuOpen = false;

  const toggleMenu = () => (isMenuOpen = !isMenuOpen);
  const handleDummyClick = () => event.preventDefault();
  const handleKeyDown = (event) => (event.key === 'Enter' ? toggleMenu() : null);
</script>

<section class="menu-btn-wrap">
  <div class="menu-btn" role="button" on:click={toggleMenu} on:keydown={handleKeyDown} tabindex="0">
    <Menu class="nav-icon" />
  </div>
  <img class="logo" src="src/assets/icons/logo.svg" alt="sneekers Logo" />
</section>

{#if isMenuOpen}
  <section class="menu-wrap">
    <!-- Bkg overlay -->
    <div
      class="menu-overlay"
      role="button"
      on:click={toggleMenu}
      on:keydown={handleKeyDown}
      tabindex="-1"
      in:fly={{ duration: 200 }}
      out:fly={{ duration: 300 }}
    ></div>

    <nav
      class="menu min left drawer"
      in:fly={{ x: -100, duration: 200 }}
      out:fly={{ x: -100, duration: 300 }}
    >
      <button class="close-btn" on:click={toggleMenu}>
        <X class="mobile-icon" />
      </button>
      <a href="/" class="menu-link" on:click={handleDummyClick}>
        <ArrowBigRight size={16} fill-opacity={0} />
        <div>Collections</div>
      </a>
      <a href="/" class="menu-link" on:click={handleDummyClick}>
        <ArrowBigRight size={16} fill-opacity={0} />
        <div>Men</div>
      </a>
      <a href="/" class="menu-link" on:click={handleDummyClick}>
        <ArrowBigRight size={16} fill-opacity={0} />
        <div>Women</div>
      </a>
      <a href="/" class="menu-link" on:click={handleDummyClick}>
        <ArrowBigRight size={16} fill-opacity={0} />
        <div>About</div>
      </a>
      <a href="/" class="menu-link" on:click={handleDummyClick}>
        <ArrowBigRight size={16} fill-opacity={0} />
        <div>Contact</div>
      </a>
    </nav>
  </section>
{/if}

<style>
  .menu-btn-wrap {
    display: flex;
    gap: var(--spacing-md);
  }

  .menu-wrap {
    position: relative;
    z-index: 1;
  }

  .logo {
    display: inline-block;
  }

  .close-btn {
    color: var(--primary-text);
    width: fit-content;
  }

  .close-btn:focus {
    outline: 1px solid var(--secondary);
  }

  .menu-link {
    font-weight: 700;
  }

  .menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
</style>
