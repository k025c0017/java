window.addEventListener("load", () => {
  gsap.set("#matsuya", { x: "-100vw" });
  gsap.set("#kawasaki", { x: "100vw" });

  gsap.to("#matsuya", {
    x: -90,
    duration: 3,
    ease: "sine.out"
  });

  gsap.to("#kawasaki", {
    x: 110,
    duration: 3,
    ease: "sine.out"
  });


});
