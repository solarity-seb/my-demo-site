<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { derived } from 'svelte/store';
  
	let menuOpen = false;
  
	// Define your nav links here
	const navLinks = [
	  { name: 'Home', href: '/' },
	  { name: 'About', href: '/about' },
	  { name: 'Blog', href: '/blog' },
	  { name: 'Contact', href: '/contact' }
	];
  
	// Optional: Get current path to highlight active link
	const currentPath = derived(page, $page => $page.url.pathname);
  </script>
  
  <nav class="navbar">
	<div class="nav-inner">
	  <a href="/" class="logo">
		<img src="/logo.png" alt="Site Logo" height="40" width="40" />
	  </a>
  
	  <button class="hamburger" on:click={() => (menuOpen = !menuOpen)} aria-label="Menu">
		<div class:open={menuOpen}></div>
	  </button>
  
	  <ul class:open={menuOpen}>
		{#each navLinks as link}
		  <li>
			<a href={link.href} class:active={$currentPath === link.href}>
			  {link.name}
			</a>
		  </li>
		{/each}
	  </ul>
	</div>
  </nav>
  
  <style>
	.navbar {
	  background: var(--bg);
	  padding: 1rem;
	  border-bottom: 1px solid #eee;
	}
  
	.nav-inner {
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  max-width: 1200px;
	  margin: 0 auto;
	}
  
	.logo img {
	  height: 40px;
	  width: auto;
	}
  
	ul {
	  display: flex;
	  gap: 1rem;
	  list-style: none;
	}
  
	a {
	  text-decoration: none;
	  color: var(--text);
	  font-weight: 500;
	}
  
	a.active {
	  border-bottom: 2px solid var(--accent);
	}
  
	.hamburger {
	  display: none;
	  flex-direction: column;
	  gap: 4px;
	  cursor: pointer;
	  border: none;
	  background: none;
	}
  
	.hamburger div,
	.hamburger div::before,
	.hamburger div::after {
	  content: '';
	  width: 25px;
	  height: 3px;
	  background-color: var(--text);
	  transition: 0.3s ease;
	  position: relative;
	}
  
	.hamburger div.open {
	  transform: rotate(45deg);
	}
  
	.hamburger div.open::before {
	  transform: rotate(90deg);
	  top: 0;
	}
  
	.hamburger div.open::after {
	  opacity: 0;
	}
  
	ul.open {
	  display: flex;
	  flex-direction: column;
	  position: absolute;
	  top: 100%;
	  left: 0;
	  right: 0;
	  background: var(--bg);
	  padding: 1rem;
	}
  
	@media (max-width: 768px) {
	  ul {
		display: none;
	  }
  
	  .hamburger {
		display: flex;
	  }
  
	  ul.open {
		display: flex;
	  }
	}
  </style>
  