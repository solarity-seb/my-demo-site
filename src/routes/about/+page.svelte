<svelte:head>
	<title>About</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	import TwoColumnSection from '$lib/sections/TwoColumnSection.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
</script>

<PageTitle 
  eyebrow="About" 
  heading="Get to Know Us"
  subheading="We’re passionate about building clean, fast websites that help our clients shine online. Here’s a bit more about who we are and how we work."
  alignment="left"
  bg="bg1"
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


<CallToAction
  headline="Ready to start your journey?"
  text="Let’s build your future, one step at a time."
  primaryButtonText="Sign Up"
  primaryButtonLink="/contact"
  lineText="Maybe later"
  lineLink="/"
  bg="bg1"
  useCard={true}
  centered={true}
/>