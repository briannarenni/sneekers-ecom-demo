<script>
  let checkoutBtn;
</script>

<button class="checkout-btn" bind:this={checkoutBtn}> Checkout: $375.00 </button>

<style>
  .checkout-btn {
    width: 100%;
    color: var(--btn-text);
    font-weight: 700;
    padding-block: 0.35em;
    background-color: var(--primary);
    border-radius: 10px;
    box-shadow: 0px 12px 17px -15px var(--primary);
  }
</style>
