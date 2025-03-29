<script>
	import Hero from '$lib/components/Hero.svelte';
	import TwoColumnSection from '$lib/components/TwoColumnSection.svelte';
  </script>
  
  <Hero
  backgroundImage="/images/bg.jpg"
  textAlignment="center"
  subheadingAboveHeading="Your Tagline Here"
  heading="Welcome to the Institute"
  subheading="We’re redefining research for the Anthropocene"
  button1Text="Learn More"
  button1Link=""
  button2Text="Get Involved"
  button2Link=""
  textColor="light"
/>
  
  <TwoColumnSection
	heading="Grow food without chemicals"
	text="We use compost, worms, and rainwater to build soil instead of destroying it. Learn how to grow nutrient-dense food naturally."
	imageUrl="/images/svelte-welcome.webp"
	imageAlt="Lush garden bed full of vegetables"
	reverse={false}
  />
  
  <TwoColumnSection
	heading="Start your food forest"
	text="Perennial systems create abundance with less work over time. Fruit trees, berry bushes, and cover crops all work together."
	imageUrl="/images/svelte-welcome.webp"
	imageAlt="Young food forest"
	reverse={true}
  />
  