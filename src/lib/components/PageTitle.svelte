<script lang="ts">
    export let eyebrow: string | undefined;
    export let heading: string;
    export let subheading: string | undefined;
    export let alignment: 'left' | 'center' = 'left';
    export let bg: 'bg1' | 'bg2' | 'bg3' = 'bg1';
  </script>
  
  <section class={bg}>
    <div
      class="container"
      class:u-text-left={alignment === 'left'}
      class:u-text-center={alignment === 'center'}
    >
      {#if eyebrow}
        <p class="eyebrow">{eyebrow}</p>
      {/if}
      <h1>{heading}</h1>
      {#if subheading}
        <p class="subheading">{subheading}</p>
      {/if}
    </div>
  </section>
  
  <style>
    .container {
      max-width: var(--grid-max-width);
      width: var(--grid-width);
      margin: 0 auto;
      padding: 2rem 0;
    }
  
    .u-text-left {
      text-align: left;
    }
  
    .u-text-center {
      text-align: center;
    }
  
    .u-text-left .subheading {
      margin: 0;
    }
  
    @media (max-width: 768px) {
      .container {
        width: var(--grid-width-mobile);
      }
    }
  </style>
  