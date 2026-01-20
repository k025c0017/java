window.addEventListener("load", () => {
  const duration = 3;
  const easeType = "power3.out";

 
  gsap.set("#matsuya", { x: "-100vw", opacity: 0 });
  gsap.set("#kawasaki", { x: "100vw", opacity: 0 });
  gsap.set(".title", { opacity: 1 }); 
  const tl = gsap.timeline();

 
  tl.to("#matsuya", {
    x: 0,
    opacity: 1,
    duration: duration,
    ease: easeType
  }, 0);

  tl.to("#kawasaki", {
    x: 0,
    opacity: 1,
    duration: duration,
    ease: easeType
  }, 0);

  
  tl.to(".title", {
    scale: 1.1,
    duration: 0.4,
    ease: "power1.out"
  });

  tl.to(".title", {
    scale: 1,
    duration: 0.3,
    ease: "power1.in"
  });
});
