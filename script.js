
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
    document.getElementById("dialog").classList.add('dialogWindow'); 
}

function close() {
    
    document.getElementById("dialog").classList.remove('dialogWindow');
    
}


