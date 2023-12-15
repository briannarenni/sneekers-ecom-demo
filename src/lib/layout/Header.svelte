<script>
  import NavMobile from '../components/header/NavMobile.svelte';
  import Nav from '../components/header/Nav.svelte';
</script>

<header class="header-comp">
  <NavMobile />
  <Nav />
</header>

<style>
  header {
    padding-inline: var(--gap-lg);
  }

  @media screen and (min-width: 768px) {
    header {
      padding-block: var(--spacing-sm);
    }
  }
</style>
