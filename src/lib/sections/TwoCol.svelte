<!-- <TwoCol
bgClass="bg2"
col1Width="col-6"
col2Width="col-6"
reverseMobile={false}
reverseDesktop={false}
>

<div slot="left">
  <TextBlock
    eyebrow="Eyebrow here"
    heading="Dynamic content layout"
    text="This layout now uses slots. That means full flexibility!"
    centered={false}
  />

  <Buttons
    primaryText="Get Started"
    primaryLink="/start"
    secondaryText="More Info"
    secondaryLink="/about"
    centered={false}
  />
</div>

<div slot="right">
  <enhanced:img src={image} alt="Cool layout" loading="lazy" width="1200" height="600" />
</div>
</TwoCol> -->

<script lang="ts">
  export let bgClass: 'bg1' | 'bg2' | 'bg3' | '' = 'bg1';
  export let col1Width: string = 'col-6';
  export let col2Width: string = 'col-6';
  export let reverseMobile: boolean = false;
  export let reverseDesktop: boolean = false;
</script>

<section class={`two-col ${bgClass}`}>
  <div class={`flex-grid ${bgClass} ${reverseMobile ? 'reverse-mobile' : ''} ${reverseDesktop ? 'reverse-desktop' : ''}`}>
    <div class={`${col1Width} u-flex-v-center`}>
      <slot name="left" />
    </div>

    <div class={`${col2Width} u-flex-v-center`}>
      <slot name="right" />
    </div>
  </div>
</section>
