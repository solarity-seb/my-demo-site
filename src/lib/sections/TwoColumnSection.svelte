<script lang="ts">
    import TextBlock from '$lib/components/TextBlock.svelte';
    import Buttons from '$lib/components/Buttons.svelte';

  export let imageAlt = '';
  export let heading = '';
  export let text = '';
  export let eyebrow = '';

  export let bgClass: 'bg1' | 'bg2' | 'bg3' | '' = 'bg1';
  export let col1Width: string = 'col-6';
  export let col2Width: string = 'col-6';
  export let reverseMobile: boolean = false;
  export let reverseDesktop: boolean = false;



  export let primaryText: string = '';
  export let primaryLink: string = '';
  export let secondaryText: string = '';
  export let secondaryLink: string = '';
  export let lineText: string = '';
  export let lineLink: string = '';

  import image from '$lib/images/bg.jpg?enhanced';
</script>

<section class={`two-col ${bgClass}`}>
  <div class="{`flex-grid ${bgClass} ${reverseMobile ? 'reverse-mobile' : ''} ${reverseDesktop ? 'reverse-desktop' : ''}`}">
    <div class={`${col1Width}`}>
      <TextBlock
  {eyebrow}
  {heading}
  {text}
  headingLevel="h2"
/>



{#if primaryText || secondaryText || lineText}
<Buttons
  {primaryText}
  {primaryLink}
  {secondaryText}
  {secondaryLink}
  {lineText}
  {lineLink}
  centered={false}
/>
{/if}

    </div>

    <div class="{`${col2Width}`}">
      <enhanced:img src={image} alt={imageAlt} loading="lazy" />
    </div>
  </div>
</section>