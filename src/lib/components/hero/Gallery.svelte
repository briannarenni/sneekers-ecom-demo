<script>
  import { onMount } from 'svelte';
  import { productPhotos, productThumbs } from '@scripts/images.js';
  import Lightbox from '@components/hero/Lightbox.svelte';

  let spotlightIndex = 0;
  let lightboxComp;

  const handleKeyDown = (event) => (event.key === 'Enter' ? updateSpotlight() : null);

  const updateSpotlight = (index) => (spotlightIndex = index);

  const openModal = (index) => {
    spotlightIndex = index;
    lightboxComp.openModal();
  };

  onMount(() => updateSpotlight(0));
</script>

<section class="hero-grid">
  <div
    class="spotlight"
    role="button"
    on:click={openModal(spotlightIndex)}
    on:keydown={handleKeyDown}
    tabindex="0">
    <img class="spotlight-img" src={productPhotos[spotlightIndex]} alt="Spotlight slide" />
  </div>
  <div class="gallery">
    {#each productThumbs as thumb, i (i)}
      <div
        class="gallery-img-wrap {i === spotlightIndex ? 'active' : ''}"
        role="button"
        on:click={() => updateSpotlight(i)}
        on:keydown={handleKeyDown}
        tabindex="0">
        <img class="gallery-img" src={thumb} alt="Product img {i + 1}" />
      </div>
    {/each}
  </div>
</section>

<Lightbox bind:this={lightboxComp} {spotlightIndex} />

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
    outline: 3px solid var(--primary);
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
</style>
