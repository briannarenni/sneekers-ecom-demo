<script>
  import { windowSizeStore } from 'svelte-legos';
  import { Carousel, Gallery } from '@components/hero/index.js';

  const size = windowSizeStore();
  const mobileBreakpoint = 1023;
  $: isMobile = $size.width < mobileBreakpoint;
</script>

{#if isMobile}
  <Carousel />
{:else}
  <Gallery />
{/if}
