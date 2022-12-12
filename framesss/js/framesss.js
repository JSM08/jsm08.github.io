//squares animation
gsap.from(".chucked" , {
  duration: 6,
  rotation: 720,
  ease: "bounce",
  stagger: 0.5,
  x: -500,
  y: -500,
});

//text animation

gsap.from(".headLine", {
  duration: 1.5,
  stagger: 2.5,
  opacity:0,
  y: 300,
})

gsap.from(".chuck" , {
  duration: 5,
  rotation: 720,
  ease: "bounce",
  stagger: 0.5,
  x: -500,
  y: -500,
});

gsap.from(".first",{
  duration: 1.5,
  stragger: 2.5,
  opacity: 0,
  y:150
})

gsap.from(".second",{
  duration: 2.5,
  stragger: 3.5,
  opacity: 0,
  y:150
})

gsap.from(".third",{
  duration: 3.5,
  stragger: 2.5,
  opacity: 0,
  y:150
})