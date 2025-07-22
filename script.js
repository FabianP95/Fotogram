//My Arrays

let imagesSrc = [
    "./img/images/sand1.jpg", "./img/images/sand2.jpg", "./img/images/sand3.jpg", "./img/images/sand4.jpg",
    "./img/images/sand8.jpg", "./img/images/sand6.jpg", "./img/images/sand7.jpg", "./img/images/sand5.jpg",
    "./img/images/sand9.jpg", "./img/images/sand10.jpg", "./img/images/sand11.jpg", "./img/images/sand12.jpg"];

let idArray = ['pic1', 'pic2', 'pic3', 'pic4', 'pic5', 'pic6', 'pic7', 'pic8', 'pic9', 'pic10', 'pic11', 'pic12'];

let altArray = ["Sand in variations 1", "Sand in variations 2", "Sand in variations 3", "Sand in variations 4", "Sand in variations 5",
    "Sand in variations 6", "Sand in variations 7", "Sand in variations 8", "Sand in variations 9", "Sand in variations 10", "Sand in variations 11",
    "Sand in variations 12"];

let titleArray = ["1/12", "2/12", "3/12", "4/12", "5/12", "6/12", "7/12", "8/12", "9/12", "10/12", "11/12", "12/12"];

let idNumArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];


// HTML Image Template

function render() {
    let contentRef = document.getElementById('firstRow');
    let contentRef1 = document.getElementById('secondRow');
    let contentRef2 = document.getElementById('thirdRow');
    for (let index = 0; index < imagesSrc.length - 8; index++) {
        contentRef.innerHTML += `<img onmouseover="change(${idNumArray[index]})" onmouseout="changeback()" onclick="dialog() ; dialogHead(${idNumArray[index]})"
          id="${idArray[index]}" class="picture" src="${imagesSrc[index]}" alt= "${altArray[index]}" title="${titleArray[index]}"> `
    }
    for (let index = 4; index < imagesSrc.length - 4; index++) {
        contentRef1.innerHTML += `<img onmouseover="change(${idNumArray[index]})" onmouseout="changeback()" onclick="dialog() ; dialogHead(${idNumArray[index]})"
          id="${idArray[index]}" class="picture" src="${imagesSrc[index]}" alt= "${altArray[index]}" title="${titleArray[index]}"> `
    }
    for (let index = 8; index < imagesSrc.length; index++) {
        contentRef2.innerHTML += `<img onmouseover="change(${idNumArray[index]})" onmouseout="changeback()" onclick="dialog() ; dialogHead(${idNumArray[index]})"
         id="${idArray[index]}" class="picture" src="${imagesSrc[index]}" alt= "${altArray[index]}" title="${titleArray[index]}"> `
    }
}

//Background change Function

function change(n) {
    document.getElementById('c').classList.remove('height');
    document.getElementById('c').classList.add('backgroundImg');
    document.getElementById('c').style.backgroundImage = "url(" + imagesSrc[n] + ")";
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

// Dialog function open/close
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

function dialogHead(n) {
    let head = document.getElementById(idArray[n]).alt;
    document.getElementById('dialogHeader').innerHTML = head;
    let img = document.getElementById(idArray[n]).src;
    document.getElementById('dialogImg').src = img;
    let title = document.getElementById(idArray[n]).title;
    document.getElementById('dialogPosition').innerHTML = title;
}
//Dialog Buttons

function cycleThrough(dialogHead) {
     dialogHead(n) {
        let head = document.getElementById(idArray[n]).alt;
        document.getElementById('dialogHeader').innerHTML = head;
        let img = document.getElementById(idArray[n]).src;
        document.getElementById('dialogImg').src = img;
        let title = document.getElementById(idArray[n]).title;
        document.getElementById('dialogPosition').innerHTML = title;
    }

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

