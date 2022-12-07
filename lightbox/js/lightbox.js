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

//set single variable to get all images in gallery
let galleryImages = document.getElementsByClassName("galleryImage");
//create loop to cycle through images and run onclick event per image

for (let i = 0; i < galleryImages.length; i++) {
let galleryImage = galleryImages[i];
galleryImage.onclick = openLightbox;
}


function closeLightbox(){
    lightboxContainer.classList.remove('display');
    lightbox.src = "";
}


let closers = document.getElementsByClassName('closer');

for (let i = 0; i < closers.length; i++) {
    let closer = closers [i];
    closer.onclick = closeLightbox;
}
//lightboxCloser.onclick = closeLightbox;
//lightboxBackground.onclick = closeLightbox;

