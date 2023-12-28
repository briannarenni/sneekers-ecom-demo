<script>
  import { onMount, onDestroy } from 'svelte';
  import { addResizeListener, removeResizeListener, updateMobileStatus } from '@scripts/screenUtil.js';
  import Carousel from '@components/hero/Carousel.svelte';
  import Gallery from '@components/hero/Gallery.svelte';

  let isMobile = updateMobileStatus();

  const handleScreenResize = () => {
    isMobile = updateMobileStatus();
  };

  onMount(() => {
    addResizeListener();
    window.addEventListener('resize', handleScreenResize);
  });

  onDestroy(() => {
    removeResizeListener();
    window.removeEventListener('resize', handleScreenResize);
  });
</script>

{#if isMobile}
  <Carousel />
{:else}
  <Gallery />
{/if}
