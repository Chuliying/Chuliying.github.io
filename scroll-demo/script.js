gsap.to(".parallax-bg", {
  scrollTrigger: {
    scrub: true
  }, 
  x: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
  ease: "slow"
});