<script lang="ts">
    export let href: string = '/';
    export let alt: string = 'Site logo';
    export let width: number = 220;
    export let className: string = '';
  </script>
  
  <a href={href} class={`site-logo ${className}`} aria-label="Homepage">
    <img
      src="/images/logo-light.svg"
      alt={alt}
      width={width}
      class="light--hidden"
      loading="eager"
      decoding="async"
    />
    <img
      src="/images/logo-dark.svg"
      alt={alt}
      width={width}
      class="dark--hidden"
      loading="eager"
      decoding="async"
    />
  </a>
  
  <style>
    .site-logo img {
      display: block;
      height: auto;
      max-width: 100%;
    }
  </style>
  