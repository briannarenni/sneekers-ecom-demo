<script>
  const handleMenuClick = () => {
    event.preventDefault();
  };
</script>

<nav class="menu left drawer min">
  <!-- TODO: Close button -->
  <a href="/" on:click={handleMenuClick}>
    <!-- TODO: Icon -->
    <div>Collections</div>
  </a>

  <a href="/" on:click={handleMenuClick}>
    <!-- TODO: Icon -->
    <div>Men</div>
  </a>

  <a href="/" on:click={handleMenuClick}>
    <!-- TODO: Icon -->
    <div>Women</div>
  </a>

  <a href="/" on:click={handleMenuClick}>
    <!-- TODO: Icon -->
    <div>About</div>
  </a>

  <a href="/" on:click={handleMenuClick}>
    <!-- TODO: Icon -->
    <div>Contact</div>
  </a>
</nav>

<style></style>
