//variables

let animationMonster = document.getElementById("animationMonster");

let animationToggle = document.getElementById("animationToggle");

let toggle_c = 0;



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

    let toggle =
    bodymovin.loadAnimation({
          container: animationToggle,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: "https://lottie.host/21bd1bb8-726f-4e85-aab1-b7136b561215/ovslk7UxsA.json"
        });
    


       

        //toggle to one side
  
        animationToggle.addEventListener('click', function(){
          if (toggle_c == 0) {
            toggle.playSegments([1,20], true);
            toggle_c = toggle_c + 1;
          } else {
            toggle.playSegments([21,60], true);
            let toggle_c = 0 ;
          }
        }
        );
        

//event listener 

        animationMonster.addEventListener ('mouseleave', function ()
        {
          monster.playSegments ([99,211], false);
        });
//event listener 

        animationMonster.addEventListener ('mouseenter', function (){
          monster.playSegments([256, 302], false);
        });

       