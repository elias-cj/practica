
let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

asignarTextoElemento('h1', 'juego del numero secreto');
asignarTextoElemento('p', 'indica un numero entre 1 y 10')

function intentoDeUsuario(){
    alert('click desde el boton');
}

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}