//let parrafo = document.querySelector('p');         
//parrafo.innerHTML = 'Indica un número del 1 al 10'

//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del Número Secreto'


let numeroSecreto = 0;
let intentos = 0;   
let listaNumerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);


function asignarTextoElemento(elemento, texto) {   
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}


function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);  
    /* El "parseInt" es para convertir algo que esta en otro tipo de dato
    a entero. Esto se hace como buena practicas para comparar enteros con enteros, etc */
    //console.log(typeof(numeroDeUsuario))
    /* El "typeof()" sirve para saber que tipo de dato es lo que necesitamos saber */
    //console.log(numeroSecreto);
    //console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p' , `Acertaste el número en ${intentos} ${intentos === 1 ? 'vez' : 'veces'}`);
        //Activar el botón reiniciar juego.
        document.getElementById('reiniciar').removeAttribute('disabled')
    } else {
        //El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p' , 'El número es menor');
        } else {
            asignarTextoElemento('p' , 'El número es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    /* El triple igual "===" sirve para comparar algo mas estrictamente estipulado. En el doble igual 
    "==" compara solamente el valor, obviando el tipo de dato. Por el contrario, el triple igual 
    compara tanto el valor como el tipo de dato. Tiene q ser estrictamente iguales */
    return;
}


//Función para limpiar el input.
function limpiarCaja() {
    //Forma corta
    document.querySelector('#valorUsuario').value = '';
    //Forma larga
    /*let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value = '';*/
}


//Función que genera el número y chequea que no este ninguno repetido.
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles')
    } else {
        //Si el numero generado esta incluido en la lista
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
    }
    
}


//Función funcionalidades para el botón Reiniciar Intento.
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Número Secreto');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);  
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;   
}


//Función que le da funcionalidad al botón Reiniciar Intento.
function reiniciarJuego() {
    //Limpiar el input.
    limpiarCaja();
    //Reiniciar mensaje.
    //Generar el número aleatorio.
    //Reiniciar el número de intentos.
    condicionesIniciales()
    //Deshabilitar el botón de Nuevo Juego.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();