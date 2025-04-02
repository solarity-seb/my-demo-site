<svelte:head>
	<title>Pricing</title>
	<meta name="description" content="About this app" />
</svelte:head>

<script>
	import TwoColumnSection from '$lib/sections/TwoColumnSection.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
  import Pricing from '$lib/components/Pricing.svelte';
</script>



    <PageTitle 
    eyebrow="Pricing" 
    heading="Pricing"
    subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    alignment="left"
    bg="bg1"
  />


<Pricing />


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