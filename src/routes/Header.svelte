<script>
	import { page } from '$app/stores';
  </script>
  
  <header id="masthead" class="site-header border dark-bg">
	<!-- Slide Menu -->
	<div class="slide-menu u-hide-mobile">
	  <div class="png_text-site-branding">
		
	  </div>
	  <a class="btn btn-outline nav-cta" href="/contact">
		Contact Us
		<i class="fa fa-arrow-right arrow" aria-hidden="true"></i>
	  </a>
	</div>
  
	<!-- Main Nav -->
	<nav id="site-navigation" class="main-navigation" style="left: 50%; transform: translateX(-50%)">
	  <div class="site-branding">
		<div class="png_text-site-branding">
		  <a href="/" class="site-branding-link">

			<span class="site-branding-text">My Site</span>
		  </a>
		</div>
	  </div>
  
	  <div id="nav-links-container">
		<ul class="menu-items-container">
		  <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
			<a href="/">Home</a>
		  </li>
		  <li aria-current={$page.url.pathname === '/about' ? 'page' : undefined}>
			<a href="/about">About</a>
		  </li>
		  <li aria-current={$page.url.pathname === '/projects' ? 'page' : undefined}>
			<a href="/projects">Projects</a>
		  </li>
		  <li aria-current={$page.url.pathname === '/contact' ? 'page' : undefined}>
			<a href="/contact">Contact</a>
		  </li>
		</ul>
	  </div>
	</nav>
	<div class="nav-spacer-block"></div>
  </header>
  
  <style>
	.site-header {
	  background-color: var(--dark);
	  border-bottom: 1px solid var(--light);
	  position: relative;
	  z-index: 10;
	}
  
	.slide-menu {
	  position: fixed;
	  top: -80px;
	  left: 50%;
	  transform: translateX(-50%);
	  max-width: 650px;
	  width: 100%;
	  height: 60px;
	  background: var(--light-transparent);
	  border: 2px solid var(--light);
	  border-radius: 10px;
	  display: flex;
	  align-items: center;
	  justify-content: space-between;
	  padding: 0 20px;
	  transition: top 0.3s ease-in-out;
	  z-index: 999;
	  backdrop-filter: blur(10px);
	  -webkit-backdrop-filter: blur(10px);
	}
  
	.slide-menu.visible {
	  top: 20px;
	}
  
	.site-branding-link {
	  display: flex;
	  align-items: center;
	  gap: 14px;
	}
  
	.png_text-site-branding img {
	  max-width: 55px;
	  height: auto;
	  transition: 0.5s ease;
	}
  
	.png_text-site-branding:hover img {
	  rotate: 7deg;
	}
  
	.site-branding-text {
	  font-size: 2.2rem;
	  line-height: 2.2rem;
	  font-weight: 900;
	  cursor: pointer;
	  white-space: nowrap;
	  display: none;
	}
  
	@media screen and (min-width: 1100px) {
	  .site-branding-text {
		display: inline !important;
	  }
	}
  
	.menu-items-container {
	  display: flex;
	  gap: 1rem;
	  list-style: none;
	}
  
	.menu-items-container li a {
	  text-decoration: none;
	  color: var(--light);
	}
  
	.menu-items-container li[aria-current='page'] a {
	  font-weight: bold;
	  border-bottom: 2px solid var(--accent);
	}
  </style>
  
  