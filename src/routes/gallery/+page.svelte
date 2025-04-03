<script>
import PageTitle from '$lib/components/PageTitle.svelte';
	import TwoCol from '$lib/sections/TwoCol.svelte';
	import CallToAction from '$lib/sections/CallToAction.svelte';
	import SEO from '$lib/components/SEO.svelte';

  import Gallery from '$lib/sections/Gallery.svelte?client';
	export let data;

	const title = 'Gallery';
	const description = 'This is a great description for SEO.';
	const image = ''; // fallback image
	const url = '';

	import { onMount } from 'svelte';
	let mounted = false;

	onMount(() => {
		mounted = true;
	});
  </script>

  <SEO {title} {description} {image} {url} />


  
  <PageTitle 
  	eyebrow="Photos"
  	heading="Gallery"
	subheading="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
    alignment="center"
    bg="bg1" />


    <Gallery images={data.images} />
   


  
  

  
<TwoCol
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