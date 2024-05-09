// 1 sera piedra
// 2 sera papel
// 3 sera tijera
const tirarPC = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
function eleccion(jugada) {
  let resultado = "";
  if (jugada == 1) {
    resultado = "piedra";
  } else if (jugada == 2) {
    resultado = "papel";
  } else if (jugada == 3) {
    resultado = "tijera";
  } else {
    resultado = "Opcion no valida";
  }
  return resultado;
}

let jugador = 0;
let triunfos = 0;
let perdidas = 0;

while (triunfos < 3 && perdidas < 3) {
  let pc = tirarPC(1, 3);
  let jugador = prompt(
    "Elige una opcion: 1 para piedra, 2 para papel, 3 para tijera"
  );

  alert("PC elige: " + eleccion(pc) + " Jugador elige: " + eleccion(jugador));

  //Combate
  if (pc == jugador) {
    alert("Empate");
  } else if (pc == 1 && jugador == 2) {
    //piedra vs papel
    alert("Ganaste");
    triunfos++;
  } else if (pc == 1 && jugador == 3) {
    //piedra vs tijera
    alert("Perdiste");
    perdidas++;
  } else if (pc == 2 && jugador == 1) {
    //papel vs piedra
    alert("Perdiste");
    perdidas++;
  } else if (pc == 2 && jugador == 3) {
    //papel vs tijera
    alert("Ganaste");
    triunfos++;
  } else if (pc == 3 && jugador == 1) {
    //tijera vs piedra
    alert("Ganaste");
    triunfos++;
  } else if (pc == 3 && jugador == 2) {
    //tijera vs papel
    alert("Perdiste");
    perdidas++;
  }
}
alert("Triunfos: " + triunfos + " Perdidas: " + perdidas);
