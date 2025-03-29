export function parallax(node, options = {}) {
	let gsap, ScrollTrigger;

	async function init() {
		const gsapModule = await import('gsap');
		const scrollTriggerModule = await import('gsap/ScrollTrigger');

		gsap = gsapModule.default;
		ScrollTrigger = scrollTriggerModule.ScrollTrigger;

		gsap.registerPlugin(ScrollTrigger);

		gsap.to(node, {
			x: options.x || 0,
			y: options.y || 0,
			opacity: options.opacity ?? 1,
			scrollTrigger: {
				trigger: node,
				start: options.start || 'top 90%',
				end: options.end || 'top -50%',
				scrub: 1,
				markers: options.markers || false
			}
		});
	}

	if (typeof window !== 'undefined' && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
		init();
	}

	return {
		destroy() {
			ScrollTrigger?.getById?.(node)?.kill?.();
		}
	};
}
