<script>
	export let src;
	export let alt = '';
	export let width = '100%';
	export let height = 'auto';
	export let loading = 'lazy';
	export let style = '';
	export let className = '';
</script>

<img
	src={src}
	alt={alt}
	loading={loading}
	width={width}
	height={height}
	style={style}
	class={className}
/>
