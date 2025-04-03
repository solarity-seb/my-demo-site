<script>
	import Tooltip from './Tooltip.svelte';

	const people = [
		{ name: 'Alice', image: '$lib/images/avatars/alice.jpg' },
		{ name: 'Ben', image: '/avatars/ben.jpg' },
		{ name: 'Cleo', image: '/avatars/cleo.jpg' },
		{ name: 'Darius', image: '/avatars/darius.jpg' },
	];
</script>

<div class="social-proof">
	<div class="avatars">
		{#each people as person, i}
			<Tooltip text={person.name}>
				<img
					src={person.image}
					alt={person.name}
					style="margin-left: {i === 0 ? '0' : '-10px'}"
				/>

              
			</Tooltip>
		{/each}
	</div>
	<p class="social-proof-text">Join those amazing designers who've been using ShaderGradient!</p>
</div>

<style>
.social-proof {
	display: flex;
	align-items: center;
	gap: 1rem;
	color: var(--grey-900);
	font-size: var(--text-xs);
}

.avatars {
	display: flex;
}

.avatars img {
	width: 40px;
	height: 40px;
	border-radius: 50%;
	border: 2px solid var(--bg);
	box-shadow: 0 0 0 2px var(--bg);
	object-fit: cover;
	background-color: white;
}
</style>
