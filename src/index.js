const growTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#grow",
      scrub: 1.5,
      start: "top center",
      end: "+=400",
      ease: "power1.out"
    }
  });
  growTl.to("#grow", {
    duration: 1,
    scale: 1.1
  });
  
  const shrinkTl = gsap.timeline({
    scrollTrigger: {
      trigger: "#shrink",
      scrub: 1.5,
      start: "top center",
      end: "+=400",
      ease: "power1.in"
    }
  });
  
  shrinkTl.to("#shrink", {
    duration: 2,
    scale: 0.8,
    filter: "blur(0px)"
  });
  

  const growT2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#grow2",
      scrub: 1.5,
      start: "top center",
      end: "+=400",
      ease: "power1.out"
    }
  });
  growT2.to("#grow2", {
    duration: 1,
    scale: 1.1
  });
  

  const growT3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#grow3",
      scrub: 1.5,
      start: "top center",
      end: "+=400",
      ease: "power1.out"
    }
  });
  growT3.to("#grow3", {
    duration: 1,
    scale: 1
  });
 

  const growT4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#grow4",
      scrub: 1.5,
      start: "top center",
      end: "+=400",
      ease: "power1.out"
    }
  });
  growT4.to("#grow4", {
    duration: 1,
    scale: 1
  });

  const growT5 = gsap.timeline({
    scrollTrigger: {
      trigger: "#grow5",
      scrub: 1.5,
      start: "top center",
      end: "+=400",
      ease: "power1.out"
    }
  });
  growT5.to("#grow5", {
    duration: 1,
    scale: 1.1
  });

  const shrinkT2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#shrink2",
      scrub: 1.5,
      start: "top center",
      end: "+=400",
      ease: "power1.in"
    }
  });
  
  shrinkT2.to("#shrink2", {
    duration: 2,
    scale: 0.8,
    filter: "blur(0px)"
  });

  const growT6 = gsap.timeline({
    scrollTrigger: {
      trigger: "#grow6",
      scrub: 1.5,
      start: "top center",
      end: "+=400",
      ease: "power1.out"
    }
  });
  growT6.to("#grow6", {
    duration: 1,
    scale: 1.1
  });

  const growT7 = gsap.timeline({
    scrollTrigger: {
      trigger: "#grow7",
      scrub: 1.5,
      start: "top center",
      end: "+=400",
      ease: "power1.out"
    }
  });
  growT7.to("#grow7", {
    duration: 1,
    scale: 1
  });

  const growT8 = gsap.timeline({
    scrollTrigger: {
      trigger: "#grow8",
      scrub: 1.5,
      start: "top center",
      end: "+=400",
      ease: "power1.out"
    }
  });
  growT8.to("#grow8", {
    duration: 1,
    scale: 1.1
  });
  