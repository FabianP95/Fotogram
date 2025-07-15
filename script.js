
//Background change Function


function change(id) {
    document.getElementById('c').classList.remove('height')
    document.getElementById('c').classList.add('backgroundImg');
    let img = document.getElementById(id).src;
    document.getElementById('c').style.backgroundImage = "url(" + img + ")";
    document.getElementById('c').style.backgroundColor = "rgba(255,255,255,0.6)";
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
    document.getElementById('dialog').classList.add('dialogWindow');
    let element = document.getElementById("dialog");
    element.open = true;
}

function dialog_close() {
    let element = document.getElementById("dialog");
    element.open = false;
}

const imgArray = [
    img = document.getElementById('pic1').src,
    img2 = document.getElementById('pic2').src,
    img3 = document.getElementById('pic3').src,
    img4 = document.getElementById('pic4').src,
    img5 = document.getElementById('pic5').src,
    img6 = document.getElementById('pic6').src,
    img7 = document.getElementById('pic7').src,
    img8 = document.getElementById('pic8').src,
    img9 = document.getElementById('pic9').src,
    img10 = document.getElementById('pic10').src,
    img11 = document.getElementById('pic11').src,
    img12 = document.getElementById('pic12').src,
]
console.log(imgArray);








function dialogHead(id) {
    let head = document.getElementById(id).alt;
    document.getElementById('dialogHeader').innerHTML = head;
    let img = document.getElementById(id).src;
    document.getElementById('dialogImg').src = img;

    document.getElementById('dialogPosition').innerHTML = head;

}

