<script>
  import Qty from '@btn/Qty.svelte';
  import AddCartBtn from '@btn/AddCartBtn.svelte';

  const iconColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
</script>

<div class="product-info">
  <section class="title-wrap">
    <span class="hashtag">#sweaterweather</span>
    <h1 class="headline">Fall Limited Edition Sneakers</h1>
  </section>

  <p class="desc">
    These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber
    outer sole, they’ll withstand everything the weather can offer.
  </p>

  <div class="prices">
    <div class="prices-left">
      <h2 class="headline">$125.00</h2>
      <p class="discount">50%</p>
    </div>
    <p class="old-price">$250.00</p>
  </div>

  <div class="cta-wrap">
    <Qty />
    <AddCartBtn />
  </div>
</div>

<style>
  .product-info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding-inline: var(--gap-lg);
  }

  .title-wrap {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
  }

  .prices {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
  }

  .cta-wrap {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    align-items: center;
  }

  .hashtag {
    color: var(--primary);
    font-size: calc(12px + 0.2vw);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
  }

  .headline {
    color: var(--accent-text);
    font-weight: 700;
    font-size: calc(28px + (44 - 28) * ((100vw - 375px) / (1440 - 375)));
  }

  .desc {
    font-size: calc(15px + 0.1vw);
  }

  .prices-left {
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-lg);
  }

  .discount {
    font-size: calc(14px + 0.2vw);
    background-color: var(--secondary);
    color: var(--primary);
    padding-inline: var(--spacing-sm);
    border-radius: 6px;
  }

  .old-price {
    color: var(--gray);
    text-decoration: line-through;
  }
</style>
