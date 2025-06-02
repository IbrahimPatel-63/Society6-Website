gsap.to(".marquee", {
  transform: "translateX(-100%)",
  duration: 5,
  repeat: -1,
  ease: "none",
});

gsap.from(".dabba1",{
  y:100,
  duration:1,
  delay:1,
  opacity:0,
   scrollTrigger:".features"
   
})


gsap.from(".pets2",{
  y:100,
  duration:1,
  delay:1,
  opacity:0,
   scrollTrigger:".features"
})

gsap.from(".dabba2 h1 span",{
  duration:0.6,
  delay:1,
  opacity:0,
  stagger:0.2,
   scrollTrigger:".features"
})

let tl = gsap.timeline()

gsap.from(".inner-d1 h1 span",{
  y:200,
  duration:0.6,
  opacity:0,
  stagger:0.2,
  scrollTrigger:".difference"
})



gsap.from(".circle-text .text-circle",{
  y:200,
  duration:1.8,
  delay:1,
  opacity:0,
  scrollTrigger:".difference"
})

gsap.from(".circle-text .circle-image",{
  y:200,
  duration:2,
  delay:2,
  opacity:0,
  scrollTrigger:".difference"
})

gsap.from(".inner-t1 h1 span",{
  y:150,
  duration:0.5,
  opacity:0,
  stagger:0.2,
  scrollTrigger:".trade"
})

gsap.from(".trade .t2",{
  y:200,
  duration:2,
  delay:1,
  opacity:0,
  scrollTrigger:".trade"
})
