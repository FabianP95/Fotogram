// Images loading in
let images23 = [
    "./img/images/sand1.jpg",
    "./img/images/sand2.jpg",
    "./img/images/sand3.jpg",
    "./img/images/sand4.jpg",
    "./img/images/sand8.jpg",
    "./img/images/sand6.jpg",
    "./img/images/sand7.jpg",
    "./img/images/sand5.jpg",
    "./img/images/sand9.jpg",
    "./img/images/sand10.jpg",
    "./img/images/sand11.jpg",
    "./img/images/sand12.jpg",
]

function renderImages() {
    document.getElementById('pic1').src = images23[0];
    document.getElementById('pic2').src = images23[1];
    document.getElementById('pic3').src = images23[2];
    document.getElementById('pic4').src = images23[3];
    document.getElementById('pic5').src = images23[4];
    document.getElementById('pic6').src = images23[5];
    document.getElementById('pic7').src = images23[6];
    document.getElementById('pic8').src = images23[7];
    document.getElementById('pic9').src = images23[8];
    document.getElementById('pic10').src = images23[9];
    document.getElementById('pic11').src = images23[10];
    document.getElementById('pic12').src = images23[11];
}

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

// Dialog functions open/close
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

// Image Dialog functions

//let imageList = document.getElementsByClassName('picture');
//for (let index = 0; index < imageList.length; index++) {
//    imageList[index].addEventListener('click', function () {
//     dialogHead(this);
//   });
//}

let idArray = [
    'pic1',
    'pic2',
    'pic3',
    'pic4',
    'pic5',
    'pic6',
    'pic7',
    'pic8',
    'pic9',
    'pic10',
    'pic11',
    'pic12',
];

function dialogHead(n) {
    let id = idArray[n]
    let head = document.getElementById(id).alt;
    document.getElementById('dialogHeader').innerHTML = head;
    let img = document.getElementById(id).src;
    document.getElementById('dialogImg').src = img;
    let title = document.getElementById(id).title;
    document.getElementById('dialogPosition').innerHTML = title;
    return id;
}

//Dialog Buttons
let altArray = [
    document.getElementById('pic1').alt,
    document.getElementById('pic2').alt,
    document.getElementById('pic3').alt,
    document.getElementById('pic4').alt,
    document.getElementById('pic5').alt,
    document.getElementById('pic6').alt,
    document.getElementById('pic7').alt,
    document.getElementById('pic8').alt,
    document.getElementById('pic9').alt,
    document.getElementById('pic10').alt,
    document.getElementById('pic11').alt,
    document.getElementById('pic12').alt,
];

function cycleThrough(n) {
    let text = document.getElementById('dialogHeader').innerHTML;
    let search = altArray.indexOf(text);
    let newID = idArray[search + n];
    let id = newID;
    let result = idArray.indexOf(id)
    let head = document.getElementById(id).alt;
    document.getElementById('dialogHeader').innerHTML = head;
    let img = document.getElementById(id).src;
    document.getElementById('dialogImg').src = img;
    let title = document.getElementById(id).title;
    document.getElementById('dialogPosition').innerHTML = title;
    if (result <= 0) {
        document.getElementById('back').classList.add('d_none');
    } else {
        document.getElementById('back').classList.remove('d_none');
    }
    if (result >= 11) {
        document.getElementById('forward').classList.add('d_none');
    } else {
        document.getElementById('forward').classList.remove('d_none');
    }
}

