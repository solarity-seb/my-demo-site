<script>
    export let backgroundImage = '';
    export let textAlignment = 'center'; // 'start', 'center', 'end'
    export let subheadingAboveHeading = '';
    export let heading = '';
    export let subheading = '';
    export let button1Text = '';
    export let button1Link = '';
    export let button2Text = '';
    export let button2Link = '';
  </script>
  
  <section id="hero-section" class="full-page-image bg1">
    <!-- Background Image -->
    <div class="image-background">
      <img src={backgroundImage} alt="" aria-hidden="true" />
    </div>
  
    <div class={`grid-container full hero-grid ${textAlignment}`}>
      <div class="hero-text-container bottom parallax" data-y="-240" data-start="top 80%" data-end="top -40%">
        {#if subheadingAboveHeading}
          <p class="u-text-sm u-text-accent">{subheadingAboveHeading}</p>
        {/if}
  
        {#if heading}
          <h1>{heading}</h1>
        {/if}
  
        {#if subheading}
          <p>{subheading}</p>
        {/if}
  
        {#if button1Link && button1Text}
          <a href={button1Link} class="btn btn-outline">{button1Text}</a>
        {/if}
  
        {#if button2Link && button2Text}
          <a href={button2Link} class="btn btn-primary">{button2Text}</a>
        {/if}
      </div>
    </div>
  </section>
  
  <section class="rounded-border-slide-up bg3 parallax" data-y="-140" data-start="top 80%" data-end="top -40%">
    <div class="grid-container full">
      <div>
        <p class="u-subheading">📍 University of Toronto Scarborough</p>
        <h2>The IECS recognizes that old approaches won’t work for new problems.</h2>
        <p>
          The challenges posed by the Anthropocene are multiple and deeply intertwined.
          To successfully address climate change and its impacts requires genuine innovation in research to identify,
          articulate, examine, and explore the globe’s challenges, leading to actionable solutions which are just and equitable.
        </p>
      </div>
      
    </div>
  </section>
  
  <style>
    .hero-grid {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;
      height: 100%;
      position: relative;
      text-align: center;
    }
  
    .hero-text-container.center {
      align-self: center;
    }
  
    .hero-text-container.bottom {
      margin-top: auto;
      margin-bottom: 8%;
    }
  
    .rounded-border-slide-up {
      border-radius: 30px;
      margin-top: -30px;
    }
  
    #hero-section {
      position: relative;
      width: 100vw;
      height: 90vh;
      overflow: hidden;
      padding: 0;
      max-height: 1080px;
    }
  
    #hero-section h1 {
      color: var(--dark);
    }
  
    .image-background {
      position: absolute;
      inset: 0;
      overflow: hidden;
      pointer-events: none;
      z-index: 0;
    }
  
    .image-background img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  
    .image-background::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(to top, rgba(25, 34, 58, 0.7) 20%, rgba(0, 0, 0, 0) 70%);
      z-index: 1;
      pointer-events: none;
    }
  
    @media screen and (min-width: 2233px) {
      #hero-section {
        max-height: 1280px;
      }
    }
  
    .u-subheading {
      display: inline-block;
      border: 1px solid var(--light);
      border-radius: 6px;
      background-color: var(--bg3);
      padding: 0.1em 1em 0em 0.6em;
      text-align: center;
    }
  </style>