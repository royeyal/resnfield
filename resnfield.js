document.addEventListener("DOMContentLoaded", (event) => {
	gsap.registerPlugin(ScrollTrigger);

	const boxes = gsap.utils.toArray(".solution");
	boxes.forEach((box, i) => {
		const anim = gsap.fromTo(
			box,
			{ autoAlpha: 0, y: 50 },
			{ duration: 1, autoAlpha: 1, y: 0, delay: 0.5 + 0.5 * i }
		);

		ScrollTrigger.create({
			trigger: box,
			animation: anim,
			toggleActions: "play none none none",
			once: true,
		});
	});
});
