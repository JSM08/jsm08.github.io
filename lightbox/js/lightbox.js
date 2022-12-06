let lightboxContainer = document.getElementById('lightboxContainer');

let lightboxBackground = document.getElementById('lightboxBackground');

let lightbox = document.getElementById('lightbox');

let lightboxCloser = document.getElementById('lightboxCloser');

// function to open lightbox
function openLightbox(){
    //turn on dispaly class (from display : none to dispaly: flex)
    lightboxContainer.classList.add
 ('display');
 //dispaly image src inside lightbox
 lightbox.src = this.src;

}

let photo = document.getElementById('photo4');
//when you click image, refernce openlightbox function
photo.onclick = openLightbox;

//make function to make closer clickable

function closeLightbox(){
    lightboxContainer.classList.remove('display');
    lightbox.src ="";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;




let hands = document.getElementById('hands2');
//when you click image, refernce openlightbox function
hands.onclick = openLightbox;

//make function to make closer clickable

function closeLightbox(){
    lightboxContainer.classList.remove('display');
    lightbox.src ="";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;



let art = document.getElementById('art3');
//when you click image, refernce openlightbox function
art.onclick = openLightbox;

//make function to make closer clickable

function closeLightbox(){
    lightboxContainer.classList.remove('display');
    lightbox.src ="";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;




let me = document.getElementById('me4');
//when you click image, refernce openlightbox function
me.onclick = openLightbox;

//make function to make closer clickable

function closeLightbox(){
    lightboxContainer.classList.remove('display');
    lightbox.src ="";
}

lightboxCloser.onclick = closeLightbox;
lightboxBackground.onclick = closeLightbox;