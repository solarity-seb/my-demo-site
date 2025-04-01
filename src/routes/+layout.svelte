<script>
	import Header from './Header.svelte';
	import '../app.css';
	import Footer from '$lib/sections/footer.svelte'
	

	let { children } = $props();
</script>


<div class="app">
	<Header />

	<main>
		{@render children()}
	</main>

	
</div>

<Footer />