<script lang="ts">
	import { page } from '$app/stores';

	export let title = 'Home';
	export let description = 'Default description here';
	export let image = 'https://example.com/default-og-image.jpg';
	const siteName = 'Example.com';
	const baseUrl = 'https://example.com';
</script>

<svelte:head>
	<title>{title} | {siteName}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href="{baseUrl}{$page.url.pathname}" />

	<!-- Open Graph -->
	<meta property="og:site_name" content={siteName} />
	<meta property="og:url" content="{baseUrl}{$page.url.pathname}" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={image} />

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta property="twitter:domain" content="example.com" />
	<meta property="twitter:url" content="{baseUrl}{$page.url.pathname}" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />

	<!-- Schema.org JSON-LD -->
	{@html `<script type="application/ld+json">{
		"@context": "https://schema.org",
		"@type": "Website",
		"name": "${title} | ${siteName}",
		"url": "${baseUrl}${$page.url.pathname}",
		"logo": "${image}"
	}</script>`}
</svelte:head>
