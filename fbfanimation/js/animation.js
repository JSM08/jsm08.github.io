let starter = document.getElementById("starter");

let heartArray = [ "assets/images/Asset20.png" , "assets/images/Asset21.png" , "assets/images/Asset22.png",
"assets/images/Asset23.png" , "assets/images/Asset24.png" , "assets/images/Asset25.png" , "assets/images/Asset26.png" ,
"assets/images/Asset27.png" ] ;

// set a counter variable
let count = 0;

function animate(){

    starter.src = heartArray [count];
    //increment through array
    count++;
    //icreate count through full lenght of array
    if (heartArray.length == count) {
        count = 0;
    }
}

setInterval(animate, 100)