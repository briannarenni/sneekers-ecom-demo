<script>
  import { Header, Hero, Card, Footer } from '@layout/index.js';
</script>

<main class="app-container">
  <Header />
  <Hero />
  <Card />
  <Footer />
</main>

<style>
  @media screen and (min-width: 1400px) {
    .app-container {
      padding-inline: var(--gap-xxl);
    }
  }
</style>
