<script>
  import { prevImg, nextImg } from '@stores/imageStore.js';
</script>

<button class="control-btn prev" on:click={prevImg}>
  <img src="src/assets/icons/icon-previous.svg" alt="Previous" />
</button>
<button class="control-btn next" on:click={nextImg}>
  <img src="src/assets/icons/icon-next.svg" alt="Next" />
</button>

<style>
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
</style>
