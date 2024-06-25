
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

/********************************************************************************************* */
function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

/*********************************************************************************************** */
function verificarIntento(){

    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if(numeroSecreto === numeroUsuario){
        asignarTextoElemento('p', `acertaste el numero secreto en ${intentos} ${(intentos == 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'el numero secreto es menor')
        } else {
            asignarTextoElemento('p', 'el numero secreto es mayor')
        }
        intentos++;
        limpiarCaja();
        
    }
    return;
}
/************************************************************************************************** */

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = ''
}



/************************************************************************************************** */

function generarNumeroSecreto(){
    return Math.floor(Math.random()*10)+1;
}

/************************************************************************************************** */

function condicionesInicales(){

    asignarTextoElemento('h1', 'juego del numero secreto');
    asignarTextoElemento('p', 'indica un numero entre 1 y 10')
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesInicales();

/************************************************************************************************** */

function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionesInicales();
    //generar numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //reiniciar el numero de intentos
    intentos = 1;
    //desavilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}