<!-- Buttons.svelte -->

<script lang="ts">
  export let primaryText: string = '';
  export let primaryLink: string = '';
  export let secondaryText: string = '';
  export let secondaryLink: string = '';
  export let lineText: string = '';
  export let lineLink: string = '';
  export let centered: boolean = true;
</script>

<div class={centered ? 'u-flex u-flex-h-center u-flex-v-center' : ''}>
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
