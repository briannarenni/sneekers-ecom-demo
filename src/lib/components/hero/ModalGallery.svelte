<script>
  import { ControlBtns } from '@btn/index.js';
  import {
    productPhotos,
    productThumbs,
    spotlightIndex,
    currentImg,
    updateSpotlight,
    keyDownHandler,
    prevImg,
    nextImg
  } from '@stores/imageStore.js';

  $: currentImg.set($spotlightIndex);
</script>

<section class="hero-grid">
  <div class="spotlight">
    <img class="spotlight-img" src={productPhotos[$currentImg]} alt="Spotlight slide" />
  </div>

  <Controls />

  <div class="gallery">
    {#each productThumbs as thumb, i (i)}
      <div
        class="gallery-img-wrap {i === $currentImg ? 'active medium-elevate' : ''}"
        role="button"
        on:click={() => updateSpotlight(i)}
        on:keydown={keyDownHandler}
        tabindex="0">
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
    gap: var(--gap-sm);
  }

  .spotlight {
    width: fit-content;
    cursor: pointer;
    position: relative;
  }

  .spotlight img {
    width: 575px;
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
    outline: 2px solid #ffffff;
    border-radius: 15px;
  }

  @media screen and (max-width: 1023px) {
    .hero-grid {
      display: none;
    }
  }
</style>
