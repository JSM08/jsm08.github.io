//get container
let animationMonster = document.getElementById("animationMonster");

let monster =
bodymovin.loadAnimation({
      container: animationMonster,
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: "https://lottie.host/58aafa9a-9a09-4520-87e6-060c3fb18714/u92BUIWArn.json"
    });


    //monster emotes w event listeners
    //play excited frames

    animationMonster.addEventListener('click' , function () {
      monster.playSegments([110, 215], true);
    })