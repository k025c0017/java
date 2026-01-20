window.addEventListener("load", () => {
  const duration = 3;
  const easeType = "power3.out";

  const matuya = document.querySelector("#matsuya");
  const kawasaki = document.querySelector("#kawasaki");
  const title = document.querySelector(".title");


  gsap.set(matuya, { x: "-100vw", opacity: 0 });
  gsap.set(kawasaki, { x: "100vw", opacity: 0 });
  gsap.set(title, { opacity: 1, scale: 1 });

  const tl = gsap.timeline();

  tl.to(matuya, { x: 0, opacity: 1, duration, ease: easeType }, 0);
  tl.to(kawasaki, { x: 0, opacity: 1, duration, ease: easeType }, 0);


  tl.to([matuya, kawasaki], {
    css:{color: "#0067C0", },
    duration: 0.4,
    ease: "power1.out"
  });

  tl.to(title, {
    scale: 1.1,
    duration: 0.4,
    ease: "power1.out",
    onStart: () => {
     
      gsap.to(title, { '--underline-width': '100%', duration: 0.5, ease: "power1.out" });
    }
  });

  tl.to(title, { scale: 1, duration: 0.3, ease: "power1.in" });


  title.style.setProperty('--underline-width', '0');
  title.style.setProperty('position', 'relative');
  const style = document.createElement('style');
  style.innerHTML = `
    .title::after {
      width: var(--underline-width);
      transition: width 0.5s ease;
    }
  `;
  document.head.appendChild(style);
});
