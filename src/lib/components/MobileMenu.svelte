<script>
  import { X, ArrowBigRight, Menu } from 'lucide-svelte';
  import { fly } from 'svelte/transition';

  const iconColor = getComputedStyle(document.documentElement)
    .getPropertyValue('--gray-blue')
    .trim();

  let isMenuOpen = false;

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      toggleMenu();
    }
  };

  const handleDummyClick = () => {
    event.preventDefault();
  };

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };
</script>

<section>
  <div class="menu-btn" role="button" on:click={toggleMenu} on:keydown={handleKeyDown} tabindex="0">
    <Menu class="nav-icon" />
  </div>
  <img class="logo" src="src/assets/icons/logo.svg" alt="sneekers Logo" />
</section>

{#if isMenuOpen}
  <nav
    class="menu left drawer"
    in:fly={{ x: -100, duration: 200 }}
    out:fly={{ x: -100, duration: 300 }}
  >
    <button class="close-btn" on:click={toggleMenu}>
      <X class="mobile-icon" color={iconColor} />
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
{/if}

<style>
  section {
    display: flex;
    gap: var(--spacing-md);
  }

  .logo {
    display: inline-block;
  }

  .close-btn {
    width: fit-content;
  }

  .menu-link {
    font-weight: 700;
  }

  @media screen and (min-width: 1024px) {
    section {
      display: none;
    }
  }
</style>
