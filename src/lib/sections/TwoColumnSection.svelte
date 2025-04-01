<script>
  export let imageUrl = '';
  export let imageAlt = '';
  export let heading = '';
  export let text = '';
  export let reverse = false; // when true, image on the right
</script>

<section class="two-col">
  <div class={`content ${reverse ? 'reverse' : ''}`}>
    <div class="text">
      {#if heading}
        <h2>{heading}</h2>
      {/if}
      <p>{@html text}</p>
    </div>
    <div class="image">
      <img src={imageUrl} alt={imageAlt} width="600" height="400" loading="lazy" />
    </div>
  </div>
</section>

<style>
  .two-col {
    padding: 4rem 2rem;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
  }

  .content.reverse {
    flex-direction: column-reverse;
  }

  .text {
    max-width: 600px;
  }

  .image img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  }

  @media (min-width: 900px) {
    .content {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    .content.reverse {
      flex-direction: row-reverse;
    }

    .text, .image {
      flex: 1;
    }

    .text {
      padding-right: 2rem;
    }

    .content.reverse .text {
      padding-right: 0;
      padding-left: 2rem;
    }
  }
</style>
