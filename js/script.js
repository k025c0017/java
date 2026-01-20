window.addEventListener("load", () => {
  gsap.set("#matsuya", { xPercent: "-100vw" });
  gsap.set("#kawasaki", { xPercent: "100vw" });

  gsap.to("#matsuya", {
    xPercent: -20,
    duration: 3,
    ease: "sine.out"
  });

  gsap.to("#kawasaki", {
    xPercent: 100,
    duration: 3,
    ease: "sine.out"
  });


});
