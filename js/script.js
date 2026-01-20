window.addEventListener("load", () => {
  gsap.set("#matsuya", { x: "-100vw" });
  gsap.set("#kawasaki", { x: "100vw" });

  gsap.to("#matsuya", {
    x: "-60",
    duration: 3,
    ease: "power3.out"
  });

  gsap.to("#kawasaki", {
    x: "60",
    duration: 3,
    ease: "power3.out"
  });
});
