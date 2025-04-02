<script lang="ts">
	const pricingPlans = [
		{
			name: 'Custom Website',
			description: 'A fully custom website designed and built specifically for you. Multiple revisions during the design phase, lead to a polished and customized website. Custom code means a highly performant website with lighting fast load times, strong security and good SEO from the ground up.',
			price: "3500 - $12'000+",
			bestValue: false,
			features: [
				{ name: 'Custom, unique design', available: true },
				{ name: 'Custom coded development', available: true },
				{ name: '3-5 pages + blog/articles', available: true },
				{ name: 'No eCommerce functionality', available: false },
				{ name: 'Single sign-on (SSO)', available: false },
				{ name: 'Priority phone support', available: false }
			]
		},
		{
			name: 'Custom eCommerce',
			description: 'A completely custom storefront designed and developed specifically for your brand. Multiple design revisions to nail the exact aesthetic that tells your story, coupled with a highly performant custom Shopify theme gives you a high-converting custom ecommerce solution that will turn heads.',
			price: "4250 - $20'000+",
			bestValue: true,
			features: [
				{ name: 'Custom domains', available: true },
				{ name: 'Edge content delivery', available: true },
				{ name: 'Advanced analytics', available: true },
				{ name: 'Quarterly workshops', available: true },
				{ name: 'Single sign-on (SSO)', available: false },
				{ name: 'Priority phone support', available: false }
			]
		},
		{
			name: 'Awwwards-worthy',
			description: "If you're truly serious about making an impact, we'll spend weeks refining every single element of your website. Unique interactions and animations coupled with stand out design and every element painstaking hand-coded leads to a website that will make waves.",
			price: 99,
			bestValue: false,
			features: [
				{ name: 'Custom domains', available: true },
				{ name: 'Edge content delivery', available: true },
				{ name: 'Advanced analytics', available: true },
				{ name: 'Quarterly workshops', available: true },
				{ name: 'Single sign-on (SSO)', available: true },
				{ name: 'Priority phone support', available: true }
			]
		}
	];
</script>

<section class="pricing">
    <div class="container">
	{#each pricingPlans as plan, i}
    <div class="card-border">
		<article class="pricing-card {plan.bestValue ? 'featured' : ''}">
			{#if plan.bestValue}
				<div class="badge text--xs">Best Value</div>
			{/if}

			<h2 class="text--md">{plan.name}</h2>
			<p class="description">{plan.description}</p>
			<p class="price">${plan.price} <span class="u-text-grey">USD</span></p>

			<ul class="features">
				{#each plan.features as feature}
					<li class:available={feature.available}>
						{#if feature.available}
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
						{:else}
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ccc" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
						{/if}
						<span>{feature.name}</span>
					</li>
				{/each}
			</ul>
            <a href="/contact" class="btn btn-secondary btn-full-width">Get Yours</a>
		</article>
    </div>
	{/each}
</div>
</section>

<style>
	.pricing .container {
		display: flex;
		flex-wrap: wrap;
		gap: 2rem;
		justify-content: center;
		padding: 3rem 1rem;
		background: var(--bg);
		color: var(--text-color);
	}

	.pricing-card {
		flex: 1 1 300px;
		max-width: 350px;
		background: var(--bg-gradient);
		border-radius: 1rem;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
		padding: 2rem;
		position: relative;
		transition: transform 0.2s ease, box-shadow 0.2s ease;
        border: 2px solid var(--bg);
	}

	.pricing-card:hover {
		box-shadow: 0 6px 30px rgba(255, 255, 255, 0.5);
	}

	.featured {
		border: 2px solid var(--accent);
	}

	.badge {
		position: absolute;
		top: -0.9rem;
		right: 1rem;
		background: var(--accent);
		color: var(--light);
		padding: 0.25rem 0.75rem;
		border-radius: 999px;
	}

	h2 {
		margin: 0;
		color: var(--accent);
	}

	.description {
		margin: 0.5rem 0 1.5rem;
		font-size: 0.95rem;
		color: var(--grey-700);
	}

	.price {
		font-size: 2rem;
		font-weight: bold;
		margin: 0 0 1rem;
	}

	.price span {
		display: block;
		font-size: 0.9rem;
		font-weight: normal;
		color: var(--grey-700);
	}

	.features {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
	}

	.features li {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		color: var(--grey-700);
	}

	.features li.available {
		color: var(--text-color);
	}

    .card-border {
        border: 1px solid var(--grey-300);;
        padding: 8px;
        border-radius: 1.2rem;
    }
</style>
