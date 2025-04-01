<svelte:head>
	<title>Contact</title>
	<meta name="description" content="Contact" />
</svelte:head>

<script>
	import ContactForm from "$lib/components/ContactForm.svelte";
	import TwoColumnSection from '$lib/sections/TwoColumnSection.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import PageTitle from '$lib/components/PageTitle.svelte';
	import ContactFormSection from "$lib/sections/ContactFormSection.svelte";
</script>

<PageTitle 
  eyebrow="Contact" 
  heading="Get in Touch"
  subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  alignment="left"
  bg="bg1"
/>
<ContactFormSection />