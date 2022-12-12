//squares animation
gsap.from(".chucked" , {
  duration: 7,
  rotation: 720,
  ease: "bounce",
  stagger: 0.5,
  x: -500,
  y: -500,
});

//text animation

gsap.from(".headLine", {
  duration: 2.5,
  stagger: 0.5,
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
  duration: 4.5,
  stragger: 9.5,
  opacity: 0,
  y:150
})

gsap.from(".second",{
  duration: 9.5,
  stragger: 8.5,
  opacity: 0,
  y:150
})

gsap.from(".third",{
  duration: 6.5,
  stragger: 5.5,
  opacity: 0,
  y:150
})