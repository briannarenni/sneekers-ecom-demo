<script>
  import { AddCartBtn, QtyBtn } from '@btn/index.js';
</script>

<div class="product-card">
  <section class="product-info">
    <header class="title-wrap">
      <span class="hashtag">#sweaterweather</span>
      <h1 class="headline">Fall Limited Edition Sneakers</h1>
    </header>
    <p class="desc">
      These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer
      sole, they’ll withstand everything the weather can offer.
    </p>
    <section class="prices">
      <div class="prices-left">
        <h2 class="headline">$125.00</h2>
        <p class="discount">50%</p>
      </div>
      <p class="old-price">$250.00</p>
    </section>
    <div class="cta-wrap">
      <QtyBtn />
      <AddCartBtn />
    </div>
  </section>
</div>

<style>
  .product-card {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-block: var(--gap-md);
  }

  .product-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--gap-md);
    padding-inline: var(--gap-md);
  }

  .title-wrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
    /* Override BeerCSS style */
    padding: 0;
  }

  .prices {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 700;
  }

  .cta-wrap {
    width: 100%;
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

  /* Queries */
  @media screen and (min-width: 450px) {
    .prices {
      display: block;
    }

    .old-price {
      margin-block-start: var(--spacing-sm);
    }
  }

  @media screen and (min-width: 550px) {
    .product-info {
      width: clamp(450px, 80%, 650px);
    }
  }

  @media screen and (min-width: 1024px) {
    .product-card {
      margin-block: 0;
      align-items: center;
    }

    .product-info {
      padding-inline: 0;
    }

    .cta-wrap {
      flex-direction: row;
    }

    .prices {
      display: block;
    }

    .old-price {
      margin-block-start: var(--spacing-sm);
      margin-inline-start: 0;
    }
  }
</style>
