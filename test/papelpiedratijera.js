let seleccion;
let aux = 0;
let index = 0;
let userWins = 0;
let botWins = 0;


var radios = document.getElementsByName("selec");

// revisa los radios del formulario
function revisarForm() {
  let int = 0;
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      int++;
    }
  }

  if (int == 0) {
    return false;
  } else {
    return true;
  }
}


// cuando se le da a jugar
function jugar() {
  // se revisa si se ha seleccionado algo
  if (!revisarForm()) {
    alert(); // si no hay nada seleccionado se informa
  } else {
    // se deshabilitan botones
    document.getElementById("play").disabled = true;
    document.getElementById("reset").disabled = true;
    // animacion de papel piedra y tijera
    let intervalo = setInterval(function girar() {
      aux++;
      document.getElementById("resul").style.color = "black";
      if (index == 0) {
        document.getElementById("img").src = "papelpiedratijera_img/papel.png";
        document.getElementById("resul").innerHTML = ".";
        index++;
      } else if (index == 1) {
        document.getElementById("img").src = "papelpiedratijera_img/piedra.png";
        document.getElementById("resul").innerHTML = "..";
        index++;
      } else if (index == 2) {
        document.getElementById("img").src =
          "papelpiedratijera_img/tijeras.png";
        document.getElementById("resul").innerHTML = "...";
        index = 0;
      }
      if (aux == 20) {
        clearInterval(intervalo);
        aux = 0;
      }
    }, 175);
    // comienza el juego
    setTimeout("juego()", 3500);
  }
}

function juego() {
  // se revisa que tiene seleccionado
  for (var i = 0, length = radios.length; i < length; i++) {
    if (radios[i].checked) {
      selec = radios[i].value;
    }
  }

  // se generan 1 numero aleatorios del 0 al 2
  let x = Math.floor(Math.random() * 3);

  // si es 0 sale papel
  if (x == 0) {
    document.getElementById("img").src = "papelpiedratijera_img/papel.png";
    if (selec == "papel") {
      document.getElementById("resul").innerHTML = "Empate";
      document.getElementById("resul").style.color = "#d49f19";
    } else if (selec == "piedra") {
      document.getElementById("resul").innerHTML = "La máquina gana";
      document.getElementById("resul").style.color = "#b81d1d";
    } else if (selec == "tijera") {
      document.getElementById("resul").innerHTML = "Has ganado";
      document.getElementById("resul").style.color = "#2fb81d";
    }
    // si es uno sale piedra
  } else if (x == 1) {
    document.getElementById("img").src = "papelpiedratijera_img/piedra.png";
    if (selec == "papel") {
      document.getElementById("resul").innerHTML = "Has ganado";
      document.getElementById("resul").style.color = "#2fb81d";
    } else if (selec == "piedra") {
      document.getElementById("resul").innerHTML = "Empate";
      document.getElementById("resul").style.color = "#d49f19";
    } else if (selec == "tijera") {
      document.getElementById("resul").innerHTML = "La máquina gana";
      document.getElementById("resul").style.color = "#b81d1d";
    }

    // si es dos sale tijera
  } else if (x == 2) {
    document.getElementById("img").src = "papelpiedratijera_img/tijeras.png";
    if (selec == "papel") {
      document.getElementById("resul").innerHTML = "La máquina gana";
      document.getElementById("resul").style.color = "#b81d1d";
    } else if (selec == "piedra") {
      document.getElementById("resul").innerHTML = "Has ganado";
      document.getElementById("resul").style.color = "#2fb81d";
    } else if (selec == "tijera") {
      document.getElementById("resul").innerHTML = "Empate";
      document.getElementById("resul").style.color = "#d49f19";
    }
  }
  //se habilitan los botones
  document.getElementById("play").disabled = false;
  document.getElementById("reset").disabled = false;
}


// funcion para resetear el juego
function reset() {
  document.getElementById("seleccion").reset();
  document.getElementById("resul").innerHTML = "Pulsa jugar para empezar";
  document.getElementById("resul").style.color = "black";
}

function alert() {
  document.getElementById("alert").style.opacity = 1;
}

function hide() {
  document.getElementById("alert").style.opacity = 0;
}
