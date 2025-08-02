let numeroSecreto = 0;    
let intentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

function condicionesIniciales(){
    asignarTextoElemnto("h1", "Juego del número secreto"); 
    asignarTextoElemnto("p",`Indica el número del 1 al ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();    
    intentos =1;
    console.log(numeroSecreto);
  }

function asignarTextoElemnto (elemento, texto){
  let elementoHtml = document.querySelector(elemento);
  elementoHtml.innerHTML = texto;
  return;

}

function verificarIntento(){
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

  if (numeroUsuario === numeroSecreto) {
        asignarTextoElemnto("p", `Acertaste el número en ${intentos} ${intentos === 1 ? "vez":"veces"}`);
        // document.getElementById("reiniciar").disabled = false;
        document.getElementById("reiniciar").removeAttribute("disabled");
      
      }else{
        if (numeroUsuario > numeroSecreto) {
          asignarTextoElemnto("p", "El número secreto es menor que " + numeroUsuario);
        }else{
          asignarTextoElemnto("p", "El número secreto es mayor que " + numeroUsuario);
        }
        intentos++;
        console.log("Intento número: " + intentos);
        limpiarInput();
      }
  return;
}

function limpiarInput (){
  document.querySelector("#valorUsuario").value = "";
  }

function generarNumeroSecreto(){
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  console.log("Número generado: " + numeroGenerado);
  console.log("Números sorteados: " + numerosSorteados);

  if(numerosSorteados.length == numeroMaximo){
    asignarTextoElemnto("p", "No hay más números disponibles para jugar.");
    return;

  }else{
     if(numerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
    }else{
    numerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }

  }
 

  }


function reiniciarJuego() {
  limpiarInput();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", true);
}

condicionesIniciales();