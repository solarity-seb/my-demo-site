<script lang="ts">
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';
	import { onMount, tick } from 'svelte';
	import SocialLinks from '$lib/components/SocialLinks.svelte';
	import { fade } from 'svelte/transition';
	import SiteLogo from '$lib/components/SiteLogo.svelte';
	import { navLinks } from '$lib/data/navLinks.js';
	import ColorModeToggle from '$lib/components/ColorModeToggle.svelte';




	const location = 'header';

// main nav (desktop)
const mainLayout = 'main';
$: mainNavLinks = navLinks.filter(
	link =>
		['both', location].includes(link.location) &&
		['both', mainLayout].includes(link.layout) 
);

// mobile nav
const mobileLayout = 'mobile';
$: mobileNavLinks = navLinks.filter(
	link =>
		['both', location].includes(link.location) &&
		['both', mobileLayout].includes(link.layout)
);


	let menuOpen = false;
	let menuRef: HTMLElement;

	;


	const currentPath = derived(page, $page => $page.url.pathname);

	let firstFocusable: HTMLElement;
	let lastFocusable: HTMLElement;

	async function trapFocus() {
		await tick();
		const focusables = menuRef?.querySelectorAll<HTMLElement>(
			'a, button, input, textarea, select, [tabindex]:not([tabindex="-1"])'
		);
		if (!focusables?.length) return;
		firstFocusable = focusables[0];
		lastFocusable = focusables[focusables.length - 1];
		firstFocusable.focus();
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			menuOpen = false;
		}
		if (event.key === 'Tab' && menuOpen && firstFocusable && lastFocusable) {
			if (event.shiftKey && document.activeElement === firstFocusable) {
				event.preventDefault();
				lastFocusable.focus();
			} else if (!event.shiftKey && document.activeElement === lastFocusable) {
				event.preventDefault();
				firstFocusable.focus();
			}
		}
	}

	onMount(() => {
		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
		};
	});

	$: if (menuOpen) trapFocus();

	$: if (typeof document !== 'undefined') {
	document.body.classList.toggle('menu-open', menuOpen);
}
</script>

<div class:menu-open={menuOpen}>
	<nav class="navbar">
	<div class="nav-inner">
		<div class="nav-left">
			<SiteLogo width={220} className="logo"/>
		</div>

		<!-- Desktop Nav -->
		<div class="nav-center">
			<ul class="nav-links">
				{#each mainNavLinks as link}
					<li>
						<a href={link.href} class:active={$currentPath === link.href}>
							{link.name}
						</a>
					</li>
				{/each}
			</ul>
		</div>

		<div class="nav-right">
			<button
			class="hamburger"
			on:click={() => (menuOpen = !menuOpen)}
			aria-label="Toggle menu"
			aria-expanded={menuOpen}
			aria-controls="mobile-menu"
			>
			<div class="hamburger-icon" class:open={menuOpen}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			</button>
		</div>

		
	</div>

	{#if menuOpen}
	<!-- Backdrop -->
	<div class="menu-backdrop" on:click={() => (menuOpen = false)} transition:fade></div>
{/if}


	<!-- Mobile menu -->
	<div
		id="mobile-menu"
		class="mobile-menu"
		class:open={menuOpen}
		bind:this={menuRef}
		role="dialog"
		aria-modal="true"
	>
	
		<div class="mobile-menu-content" on:click|stopPropagation>
			<div inert>
				<SiteLogo width={220} className="logo" />
			</div>
			
			<!-- Mobile Nav -->
<ul>
	{#each mobileNavLinks as link}
	<li>
		<a 
			href={link.href} 
			tabindex="0"
			class:active={$currentPath === link.href}
		>
			{link.name}
		</a>
	</li>
{/each}
</ul>

			
<div class="socials-dark-mode">

	<SocialLinks
		direction="h"
		fixedPosition = {false}
		hideOnMobile = {false}
		width = "24"
/>

<ColorModeToggle />
</div>
		
		</div>
		

	</div>
</nav>
</div>


<style>
	:global(body) {
		overflow-x: hidden;
	}

	.navbar {
		background: var(--bg);
		padding: 1rem;
		border-bottom: 1px solid #eee;
		position: relative;
		z-index: 1000;
	}

	.nav-inner {
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: 1200px;
	margin: 0 auto;
	position: relative;
	height: 64px;
}

.nav-left {
	flex: 1;
	display: flex;
	justify-content: flex-start;
}

.nav-center {
	flex: 1;
	display: flex;
	justify-content: center;
}

.nav-right {
	flex: 1;
	display: flex;
	justify-content: flex-end;
}


	.logo img {
		display: block;
		height: auto;
	}

	.nav-links {
		display: flex;
		gap: 1.5rem;
		list-style: none;
		margin-bottom: 0;
	}

	.nav-links a {
		text-decoration: none;
		color: var(--text);
		font-weight: 500;
	}

	a.active {
		border-bottom: 2px solid var(--accent);
	}

	
	/* Backdrop */
	.menu-backdrop {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.3);
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.3s ease;
	z-index: 999;
	/* backdrop-filter: blur(99px); */
}

:global(body.menu-open) .menu-backdrop {
	opacity: 1;
	pointer-events: auto;
}



	/* Slide-in menu */
	.mobile-menu {
		position: fixed;
		top: 0;
		right: -100%;
		width: 80%;
		max-width: 100vw;
		height: 100vh;
		background: var(--bg);
		transition: right 0.8s var(--cubic);
		box-shadow: -4px 0 12px rgba(0, 0, 0, 0.1);
		z-index: 1000;
	}

	.mobile-menu.open {
		right: 0;
	}
	
	.mobile-menu-content {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	height: 100%;
	padding: 2rem;
}


.mobile-menu-nav {
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
	margin: 0;
}

.mobile-menu a {
	text-decoration: none;
	color: var(--text);
	font-weight: 500;
	font-size: 1.5rem;
	text-align: center;
}


	.mobile-menu ul {
		list-style: none;
		padding: 0;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	.mobile-menu a {
		text-decoration: none;
		color: var(--text);
		font-weight: 500;
		font-size: 1.2rem;
	}

	@media (max-width: 768px) {
		.nav-links {
			display: none;
		}
		.hamburger {
			display: block;
		}
	}

	.hamburger {
	display: block;
	position: relative;
	z-index: 1001; /* higher than mobile menu */
	background: none;
	border: none;
	padding: 0.5rem;
	cursor: pointer;
}


	.hamburger-icon {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 24px;
	height: 18px;
	position: relative;
	transition: transform 0.3s ease;
}

.hamburger-icon span {
	display: block;
	width: 100%;
	height: 2px;
	background-color: var(--text-color);
	border-radius: 2px;
	transition: transform 0.3s ease, opacity 0.3s ease;
}


/* Animation to X */
.hamburger-icon.open span:nth-child(1) {
	transform: translateY(8px) rotate(45deg);
}

.hamburger-icon.open span:nth-child(2) {
	opacity: 0;
}

.hamburger-icon.open span:nth-child(3) {
	transform: translateY(-8px) rotate(-45deg);
}
.socials-dark-mode {
	display: flex;
  width: 100%;
  justify-content: center;
  gap: 1rem;
}


</style>
