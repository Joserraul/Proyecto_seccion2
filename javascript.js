function jugador(){
  let escoger;
  while (true) {
    escoger = prompt("Escoge entre piedra, papel o tijera").toLowerCase();
    if (escoger === "piedra" || eleccion === "papel" || "tijera"){
      break
    }
    alert("No valido, intentalo nuevamente")
  }
  return escoger;
}

function computadora(){
  const jugadas = ["piedra", "papel", "tijera"];
  const escogerAleatorio = Math.floor(Math.random() * 3);
  return jugadas [escogerAleatorio];
}

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

escoger();
computadora.ganador();