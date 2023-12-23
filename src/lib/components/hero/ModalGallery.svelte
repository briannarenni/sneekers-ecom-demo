<script>
  import { onMount } from 'svelte';

  import { productPhotos, productThumbs } from '@scripts/images.js';

  export let spotlightIndex;
  $: currentImg = spotlightIndex;

  const handleKeyDown = (event) => (event.key === 'Enter' ? updateSpotlight() : null);

  const updateSpotlight = (index) => (spotlightIndex = index);

  const prevImg = () => {
    currentImg = (currentImg - 1 + productPhotos.length) % productPhotos.length;
    updateSpotlight(currentImg);
  };

  const nextImg = () => {
    currentImg = (currentImg + 1) % productPhotos.length;
    updateSpotlight(currentImg);
  };
</script>

<section class="hero-grid">
  <div class="spotlight">
    <img class="spotlight-img" src={productPhotos[spotlightIndex]} alt="Spotlight slide" />
  </div>

  <button class="control-btn prev" on:click={prevImg}>
    <img src="src/assets/icons/icon-previous.svg" alt="Previous" />
  </button>
  <button class="control-btn next" on:click={nextImg}>
    <img src="src/assets/icons/icon-next.svg" alt="Next" />
  </button>

  <div class="gallery">
    {#each productThumbs as thumb, i (i)}
      <div
        class="gallery-img-wrap {i === spotlightIndex ? 'active medium-elevate' : ''}"
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
    position: relative;
  }

  .spotlight img {
    width: 450px;
    border-radius: 15px;
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
    border-radius: 15px;
  }

  .active {
    /* outline: 2px solid var(--primary); */
    outline: 2px solid #ffffff;
    border-radius: 15px;
  }

  /* Buttons */
  .control-btn {
    background-color: #ffffff;
    color: #000000;
    border-radius: 50%;
  }

  .prev {
    position: absolute;
    top: 35%;
    left: -20px;
  }

  .next {
    position: absolute;
    top: 35%;
    right: -20px;
  }

  /* Override BeerCSS style */
  .control-btn img {
    min-inline-size: initial;
    max-inline-size: initial;
    min-block-size: initial;
    max-block-size: initial;
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
