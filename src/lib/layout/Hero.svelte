<script>
  import { windowSizeStore } from 'svelte-legos';
  import Carousel from '@components/hero/Carousel.svelte';
  import Gallery from '@components/hero/Gallery.svelte';

  const size = windowSizeStore();
  const mobileBreakpoint = 1023;
  $: isMobile = $size.width < mobileBreakpoint;
</script>

{#if isMobile}
  <Carousel />
{:else}
  <Gallery />
{/if}
