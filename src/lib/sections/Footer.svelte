<script lang="ts">
	import { navLinks } from '$lib/data/navLinks.js';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import SiteLogo from '$lib/components/SiteLogo.svelte';

    import { page } from '$app/stores';
import { derived } from 'svelte/store';
    import NewsLetter from '$lib/components/NewsLetter.svelte';
	

const currentPath = derived(page, $page => $page.url.pathname);


	const location = 'footer';

	$: footerLinks = navLinks.filter(
		link => link.location === 'both' || link.location === location
	);

	const year = new Date().getFullYear();
</script>

<footer class="site-footer">
	<div class="footer-grid">
		<!-- Column 1: Logo -->
		<div class="footer-logo">
			<SiteLogo width={880} />
		</div>

		<!-- Column 2: Navigation -->
		<div class="footer-nav">
			<h4>Navigation</h4>
			<ul>
				{#each footerLinks as link}
	<li>
		<a 
			href={link.href} 
			class:active={$currentPath === link.href}
		>
			{link.name}
		</a>
	</li>
{/each}

			</ul>
		</div>

		<!-- Column 3: Newsletter -->
		<div class="footer-newsletter">
			<NewsLetter
    action="/api/newsletter"
    heading="🌱 Stay in the Loop"
    description="Join our community of growers and get monthly soil wisdom."
    emailLabel="Your email address"
    nameLabel="First name"
    buttonText="Sign me up"
    successMessage="🎉 You're in! Check your inbox."
    errorMessage="😓 Something went wrong. Try again?"
    showNameField={true}
  />
		</div>

		<!-- Column 4: Social Links -->
		<div class="footer-social">
			<h4>Connect</h4>
			<SocialLinks direction="h" fixedPosition={false} hideOnMobile={false} width="24" />
		</div>
	</div>

	<!-- Bottom Line -->
	<div class="footer-bottom">
		<p class="text--xs">&copy; {year} All rights reserved. Built by <a href="https://sebjagoe.com" target="_blank" rel="noopener">Seb</a> at <a href="https://solarity.studio" target="_blank" rel="noopener">Solarity Studio</a>.</p>
	</div>
</footer>

<style>
	.site-footer {
		background: var(--bg);
		color: var(--text);
		padding: 3rem 1rem 0rem 1rem;
	}

	.footer-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
		gap: 2rem;
		max-width: 1200px;
		margin: 0 auto;
	}

	h4 {
		margin-bottom: 1rem;
		font-size: 1.1rem;
	}

	.footer-logo {
		align-self: start;
	}

	.footer-nav ul {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}

	.footer-nav a {
		color: var(--text);
		text-decoration: none;
	}

	.footer-nav a:hover {
		color: var(--accent);
	}

	.footer-social {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	.footer-bottom {
		text-align: center;
		margin-top: 3rem;
		opacity: 0.7;
	}

	.footer-bottom a {
		text-decoration: underline;
	}

    .site-footer a.active {
	font-weight: 600;
	color: var(--accent);
}

</style>
