<script lang="ts">
    export let eyebrow: string | null = null;
    export let heading: string | null = null;
    export let text: string = '';
    export let headingLevel: string = 'h2';
    export let centered: boolean = false;
  
    $: alignmentClass = centered ? 'u-text-center' : 'u-text-left';
  </script>
  
  <div class={`textblock-container ${alignmentClass}`}>
    {#if eyebrow}
      <p class="eyebrow">{eyebrow}</p>
    {/if}
  
    {#if heading}
      {@html `<${headingLevel}>${heading}</${headingLevel}>`}
    {/if}
  
    {#if text}
      <p>{@html text}</p>
    {/if}
  </div>
  