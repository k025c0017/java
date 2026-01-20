window.addEventListener("load", () => {
  gsap.set("#matsuya", { xPercent: -100 });
  gsap.set("#kawasaki", { xPercent: 100 });

  gsap.to("#matsuya", {
    xPercent: -30,
    duration: 3,
    ease: "sine.out"
  });

  gsap.to("#kawasaki", {
    xPercent: 30,
    duration: 3,
    ease: "sine.out"
  });
});
