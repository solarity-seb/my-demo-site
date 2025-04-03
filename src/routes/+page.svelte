<script>
	import Hero from '$lib/sections/Hero.svelte';
	import TwoColumnSection from '$lib/sections/TwoColumnSection.svelte';
  import CallToAction from '$lib/sections/CallToAction.svelte';
  import VideoEmbed from '$lib/components/VideoEmbed.svelte';

  import OneCol from '$lib/sections/OneCol.svelte';
  import TextBlock from '$lib/components/TextBlock.svelte';
  import Buttons from '$lib/components/Buttons.svelte';
  
  // SEO props
  import SEO from '$lib/components/SEO.svelte';
	const title = 'My Page Title';
	const description = 'This is a great description for SEO.';
	const image = '/images/opengraph.jpg'; // fallback image
	const url = '';
  </script>

  <SEO {title} {description} {image} {url} />
  
  <Hero
  backgroundImage="images/bg.jpg"
  textAlignment="center"
  subheadingAboveHeading="Your Tagline Here"
  heading="Welcome to the Institute"
  subheading="We’re redefining research for the Anthropocene"
  button1Text="Learn More"
  button1Link=""
  button2Text="Get Involved"
  button2Link=""
  textColor="light"
  primaryButtonText="Sign Up"
  primaryButtonLink="/contact"
  
  lineText="Maybe later"
  lineLink="/"
/>


<OneCol>
  <TextBlock
    eyebrow="Welcome"
    heading="This is a one-column layout"
    text="You can add any content here — text, buttons, images, videos."
    centered={true}
  />

  <Buttons
    primaryText="Learn more"
    primaryLink="/about"
    secondaryText="Contact us"
    secondaryLink="/contact"
    centered={true}
  />


  <VideoEmbed
  src="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
  title="Never Gonna Give You Up"
  thumbnail=""
  aspectRatio="16:9"
  autoplay={true}
/>
</OneCol>



  
  <TwoColumnSection
  eyebrow="Eyebrow"
	heading="Grow food without chemicals"
	text="We use compost, worms, and rainwater to build soil instead of destroying it. Learn how to grow nutrient-dense food naturally."
	imageUrl="/images/svelte-welcome.webp"
	imageAlt="Lush garden bed full of vegetables"
  bgClass="bg2"
  col1Width="col-4"
  col2Width="col-8"
  reverseMobile={false}
  reverseDesktop={true}
  />

  <TwoColumnSection
  heading="Grow Nutrient-Rich Soil"
  eyebrow="Soil Wisdom"
  text="Healthy soil grows healthy food. We believe in no-till, compost, and living systems."
  reverse={true}
  bgClass="bg1"
  primaryText="Contact"
  primaryLink="/contact"
  lineText="About"
  lineLink="/about"
/>

  
<TwoColumnSection
heading="Grow Nutrient-Rich Soil"
eyebrow="Soil Wisdom"
text="Healthy soil grows healthy food. We believe in no-till, compost, and living systems."
reverse={false}
bgClass="bg2"
primaryText="Contact"
primaryLink="/contact"
lineText="About"
lineLink="/about"
/>
  

<CallToAction
  headline="Ready to start your journey?"
  text="Let’s build your future, one step at a time."
  primaryButtonText="Sign Up"
  primaryButtonLink="/contact"
  secondaryButtonText="Learn More"
  secondaryButtonLink="/about"
  lineText="Maybe later"
  lineLink="/"
  bg="bg1"
  useCard={true}
  centered={true}
/>