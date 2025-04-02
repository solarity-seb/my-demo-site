<script lang="ts">
  export let imageAlt = '';
  export let heading = '';
  export let text = '';
  export let eyebrow = '';
  export let reverse = false;
  export let bgClass: 'bg1' | 'bg2' | 'bg3' | '' = 'bg1';

  export let primaryText: string = '';
  export let primaryLink: string = '';
  export let secondaryText: string = '';
  export let secondaryLink: string = '';
  export let lineText: string = '';
  export let lineLink: string = '';

  import image from '$lib/images/bg.jpg?enhanced';
</script>

<section class={`two-col ${bgClass}`}>
  <div class={`content ${reverse ? 'reverse' : ''}`}>
    <div class="text">
      {#if eyebrow}
        <p class="eyebrow">{eyebrow}</p>
      {/if}
      {#if heading}
        <h2>{heading}</h2>
      {/if}
      <p>{@html text}</p>

      {#if primaryText || secondaryText || lineText}
        <div class="button-row">
          {#if primaryText && primaryLink}
            <a href={primaryLink} class="btn btn-primary">{primaryText}</a>
          {/if}
          {#if secondaryText && secondaryLink}
            <a href={secondaryLink} class="btn btn-secondary">{secondaryText}</a>
          {/if}
          {#if lineText && lineLink}
            <a href={lineLink} class="line-link">{lineText}</a>
          {/if}
        </div>
      {/if}
    </div>

    <div class="image">
      <enhanced:img src={image} alt={imageAlt} loading="lazy" />
    </div>
  </div>
</section>

<style>
  .content {
    width: var(--grid-width-mobile);
    max-width: var(--grid-max-width);
    margin-inline: auto;
  }

  @media (min-width: 900px) {
    .content {
      width: var(--grid-width);
    }
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

  .button-row {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  @media (min-width: 600px) {
    .button-row {
      flex-direction: row;
      align-items: center;
    }
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

    .text,
    .image {
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
