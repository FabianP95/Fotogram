
//Background change Function


function change(id) {
    document.getElementById('c').classList.remove('height')
    document.getElementById('c').classList.add('backgroundImg');
    let img = document.getElementById(id).src;
    document.getElementById('c').style.backgroundImage = "url(" + img + ")";
    document.getElementById('c').style.backgroundColor = "rgba(255,255,255,0.2)";
    document.getElementById('c').style.backgroundBlendMode = "lighten";

}

function changeback() {
    document.getElementById('c').classList.remove('backgroundImg');
    document.getElementById('c').classList.add('height');
    document.getElementById('c').style.backgroundImage = "initial";
    document.getElementById('c').style.backgroundColor = "rgb(196 234 250)";
    document.getElementById('c').style.backgroundBlendMode = "initial";

}


function dialog() {
    let element = document.getElementById("dialog");
    element.open = true;
}

function dialog_close() {
    let element = document.getElementById("dialog");
    element.open = false;
}

window.onclick = function (event) {
    let element = document.getElementById("dialog");
    if (event.target == element) {
        element.open = false;;
    }
}



let imageList = document.getElementsByClassName('picture')
for (let index = 0; index < imageList.length; index++) {
    imageList[index].addEventListener('click', function () {
        dialogHead(this)
    }); 
}



function dialogHead(obj) {
    let id = obj.id
    let head = document.getElementById(id).alt;
    document.getElementById('dialogHeader').innerHTML = head;
    let img = document.getElementById(id).src;
    document.getElementById('dialogImg').src = img;
    let title = document.getElementById(id).title;
    document.getElementById('dialogPosition').innerHTML = title;

}

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

