let video = document.getElementById('video1');


function play() {
    
    video.play();

}

function pause() {
    video.pause();
}

var visibilidade = true; //Variável que vai manipular o botão Exibir/ocultar
 
function exibir() {
    document.getElementById("play1").style.display = "block";
}

function ocultar() {
    document.getElementById("play1").style.display = "none";
}

function ocultarExibir() {

}