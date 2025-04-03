<script>
	import avatar1 from '$lib/images/avatars/avatar1.webp?enhanced';
	import avatar2 from '$lib/images/avatars/avatar2.webp?enhanced';
	import avatar3 from '$lib/images/avatars/avatar3.webp?enhanced';

	const people = [
		{ name: 'Alice', image: avatar1 },
		{ name: 'Ben', image: avatar2 },
		{ name: 'Cleo', image: avatar3 },
	];
</script>

<div class="social-proof">
	<div class="avatars">
		{#each people as person}
			<span class="tooltip-wrapper" tabindex="0">
				<enhanced:img
					src={person.image}
					alt={person.name}
					loading="lazy"
					width="40"
					height="40"
					class="avatar"
				/>
				<span class="tooltip-content">
					{person.name}
					<span class="tooltip-arrow" />
				</span>
			</span>
		{/each}
	</div>
	<p class="social-proof-text text--xs">
		385+ happy clients
	</p>
</div>

<style>
.social-proof {
	display: flex;
	align-items: center;
	gap: 1rem;
	color: var(--grey-900);
	font-size: var(--text-xs);
}

.social-proof-text {
    margin: 0;
}

.avatars {
	display: flex;
}

.avatars > * {
	margin-left: -15px;
}
.avatars > *:first-child {
	margin-left: 0;
}

.avatar {
	border-radius: 50%;
	object-fit: cover;
	border: 3px solid var(--light);
	background-color: white;
	display: block;
	width: 46px;
	height: 46px;
	margin: 0;
	position: relative;
}

/* Tooltip styling */
.tooltip-wrapper {
	position: relative;
	display: inline-block;
	vertical-align: top;
	transition: transform 0.4s var(--cubic);
	will-change: transform;
}

.tooltip-wrapper:hover,
.tooltip-wrapper:focus-within {
	transform: translateY(-10px) rotate(-3deg);
}


.tooltip-content {
	position: absolute;
	bottom: 125%;
	left: 50%;
	transform: translateX(-50%);
	background-color: var(--dark);
	color: var(--light);
	padding: 0.4em 0.6em;
	border-radius: 4px;
	font-size: var(--text-xs);
	white-space: nowrap;
	opacity: 0;
	transition: opacity 0.2s var(--cubic);
	pointer-events: none;
	z-index: 10;
}

.tooltip-wrapper:hover .tooltip-content,
.tooltip-wrapper:focus-within .tooltip-content {
	opacity: 1;
}

.tooltip-arrow {
	position: absolute;
	top: 100%;
	left: 50%;
	transform: translateX(-50%);
	width: 0;
	height: 0;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-top: 6px solid var(--dark);
}
</style>
