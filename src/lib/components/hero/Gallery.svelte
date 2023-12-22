<script>
  import { onMount } from 'svelte';
  import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-svelte';

  import { productPhotos, productThumbs } from '@scripts/images.js';

  let spotlightIndex = 0;
  let activeThumbIndex = 0;

  const updateSpotlight = (index) => {
    spotlightIndex = index;
    activeThumbIndex = index;
  };

  const handleKeyDown = (event) => (event.key === 'Enter' ? updateSpotlight() : null);

  onMount(() => updateSpotlight(0));
</script>

<section class="hero-grid">
  <div class="spotlight">
    <img class="spotlight-img" src={productPhotos[spotlightIndex]} alt="Spotlight slide" />
  </div>
  <div class="gallery">
    {#each productThumbs as thumb, i (i)}
      <div
        class="gallery-img-wrap {i === activeThumbIndex ? 'active' : ''}"
        role="button"
        on:click={() => updateSpotlight(i)}
        on:keydown={handleKeyDown}
        tabindex="0"
      >
        <img class="gallery-img" src={thumb} alt="Product img {i + 1}" />
      </div>
    {/each}
  </div>
</section>

<style>
  .hero-grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--gap-md);
  }

  .spotlight {
    width: fit-content;
    cursor: pointer;
  }

  .spotlight img {
    width: 450px;
  }

  .gallery {
    display: flex;
    justify-content: center;
    gap: var(--gap-sm);
    width: 450px;
  }

  .gallery-img-wrap {
    cursor: pointer;
    width: 95px;
  }

  .active {
    outline: 2px solid var(--primary);
    border-radius: 15px;
  }

  img {
    border-radius: 15px;
  }

  @media screen and (min-width: 1400px) {
    .spotlight img {
      width: 470px;
    }

    .gallery-img-wrap {
      width: 110px;
    }
  }

  @media screen and (max-width: 1023px) {
    .hero-grid {
      display: none;
    }
  }
</style>
