<script>
	import Hero from '$lib/sections/Hero.svelte';
	import TwoColumnSection from '$lib/sections/TwoColumnSection.svelte';
  import CallToAction from '$lib/sections/CallToAction.svelte';
  </script>
  
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
  
  <TwoColumnSection
  eyebrow="Eyebrow"
	heading="Grow food without chemicals"
	text="We use compost, worms, and rainwater to build soil instead of destroying it. Learn how to grow nutrient-dense food naturally."
	imageUrl="/images/svelte-welcome.webp"
	imageAlt="Lush garden bed full of vegetables"
	reverse={false}
  bgClass="bg2"
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
	heading="Start your food forest"
	text="Perennial systems create abundance with less work over time. Fruit trees, berry bushes, and cover crops all work together."
	imageUrl="/images/svelte-welcome.webp"
	imageAlt="Young food forest"
	reverse={true}
  />
  