// get element id by (this.id) on click event
// then array Images track position of object in array 
//buttons forward backward

const onClicker = (event) => {
    console.log(this.id);
}
document.getElementById('pic1').onclick = getID();

function getID(obj) {
    console.log(obj.id);
}

document.getElementById('pic1').addEventListener('click', function () {
    onClicker(); onClicker
});





var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
    
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    
}

function showSlides(n) {
    var i;
    const slides = document.getElementsByClassName("picture");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        


    }
}