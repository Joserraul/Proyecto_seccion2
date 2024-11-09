/**
 * @function jugador para que el jugador pueda escoger, entre sus 3 opciones
 * @let almacena una variale vacia con un bucle que la arroja como verdadera hasta que el jugador escoja
 * @if si no escribe el string verdadero, le saldra un mensaje y regresa a la variable.
*/
function jugador(){
  let escoger;
  while (true) {
    escoger = prompt("Escoge entre piedra, papel o tijera").toLowerCase();
    if (escoger === "piedra" || escoger === "papel" || "tijera"){
      break
    }
    alert("No valido, intentalo nuevamente")
  }
  return escoger;
}

/**
 * @function almanecena  valeres que no pueden cambiar, pero estos son para el computador, haciendo que tenga una opcion aleatoria.
 */

function computadora(){
  const jugadas = ["piedra", "papel", "tijera"];
  const escogerAleatorio = Math.floor(Math.random() * 3);
  return jugadas [escogerAleatorio];
}

/**
 * @function contiene 2 parametros para determinar el ganador.
 * @param {*} player  dependiendo de lo que escoja ganara o perdera, haciendo una comparacion con la pc
 * @param {*} computer hara la misma comparacion.
 * @returns retornara el ganador o el empate
 */
function ganador (player, computer){
  if(player === computer){
    return "empate";
  }else if (
    (player === "piedra" && computer === "tijera" ) ||
    (player === "tijera" && computer === "papel")||
    (player === "papel" && computer === "piedra")){
    return  "Usuario";
  }else {
    return "computadora";
  }
}

/**
 * estoy cansado jefe, ahorita comento esto
 * nota:me falta acomodar lo de los empates y conteo de jugadas
 */

function repetirJugada(){
  let partidas = 0;
  let victoriaJ = 0;
  let victoriaC = 0;
  let repetir;

  do{
    const opcionPlayer = jugador();
    const opcionPc = computadora();
    const resultado = ganador(opcionPlayer, opcionPc);

    alert(`Escogiste: ${opcionPlayer} la computadora escogio ${opcionPc}`);

    if (resultado === "empate"){
      alert("IGUALADO! UN EMPATE NO ES UNA VICTORIA!!");
    }else if (resultado === "Usuario"){
      alert("Ganaste esta vez... ");
      victoriaJ++;
    }else{
      alert("JA! PERDEDOR...");
      victoriaC++;
    }

    partidas++;

    repetir = prompt("Repetimos? (si/no)");
  } while(repetir === "si");

  alert(`Terminamos y el resultado es: ${partidas} Jugador: ${victoriaJ} Enemigo: ${victoriaC}`);
}

repetirJugada();