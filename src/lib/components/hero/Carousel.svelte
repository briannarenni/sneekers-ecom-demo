<script>
  import { productPhotos } from '@scripts/images.js';

  let currentSlide = 0;

  const prevSlide = () => (currentSlide = (currentSlide - 1 + productPhotos.length) % productPhotos.length);
  const nextSlide = () => (currentSlide = (currentSlide + 1) % productPhotos.length);
</script>

<section class="carousel">
  <section class="carousel-inner">
    {#each productPhotos as photo, i (i)}
      <section
        class="carousel-item {i === currentSlide ? 'active' : ''}"
        style="transform: translateX(-{currentSlide * 100}%)"
      >
        <div class="carousel-img-wrap">
          <img class="carousel-img" src={photo} alt="Slide {i + 1}" />
          <span class="img-chip chip primary round horizontal">{i + 1} of {productPhotos.length}</span>
        </div>
      </section>
    {/each}
  </section>

  <button class="control-btn prev" on:click={prevSlide}>
    <img src="src/assets/icons/icon-previous.svg" alt="Previous" />
  </button>
  <button class="control-btn next" on:click={nextSlide}>
    <img src="src/assets/icons/icon-next.svg" alt="Next" />
  </button>
</section>

<style>
  .carousel-inner {
    width: 100%;
    display: flex;
    overflow: hidden;
  }

  .carousel-item {
    position: relative;
    display: flex;
    justify-content: center;
    flex: 0 0 100%;
    width: 100%;
    max-height: 100%;
    transition: transform 0.3s ease;
  }

  .carousel-img-wrap {
    position: relative;
  }

  .img-chip {
    position: absolute;
    top: 12px;
    right: 5px;
    z-index: 1;
    border: none;
  }

  .control-btn {
    background-color: #ffffff;
    color: #000000;
    border-radius: 50%;
  }

  .prev {
    position: absolute;
    top: 50%;
    left: 15px;
    transform: translateY(-50%);
  }

  .next {
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
  }

  /* Override BeerCSS style */
  .control-btn img {
    min-inline-size: initial;
    max-inline-size: initial;
    min-block-size: initial;
    max-block-size: initial;
  }

  /* Queries */
  @media screen and (max-width: 549px) {
    .carousel-img-wrap {
      max-height: 440px;
      overflow: hidden;
    }
  }

  @media screen and (min-width: 550px) {
    .carousel-img-wrap {
      width: clamp(400px, 80%, 600px);
      border-radius: 15px;
    }
  }

  @media screen and (min-width: 1024px) {
    .carousel {
      display: none;
    }
  }
</style>
