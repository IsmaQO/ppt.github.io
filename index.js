let selec = "";
let aux = 0;
let index = 0;
let userWinsInt = 0;
let botWinsInt = 0;

let btnPaper = document.getElementById("btnPaper");
let btnRock = document.getElementById("btnRock");
let btnScissor = document.getElementById("btnScissor");
let btnPlay = document.getElementById("btnPlay");
let btnReset = document.getElementById("btnReset");

let userImg = document.getElementById("userImg");
let botImg = document.getElementById("botImg");

let botWins = document.getElementById("botWins");
let userWins = document.getElementById("userWins");

let result = document.getElementById("result");

let alert = document.getElementById("alert");

let userCard = document.getElementById("userCard");
let botCard = document.getElementById("botCard");

function selecPaper() {
  selec = "Paper";
  userImg.src = "img/paper.png";
  btnPaper.disabled = true;
  btnRock.disabled = false;
  btnScissor.disabled = false;
  anim();
}

function selecRock() {
  selec = "Rock";
  userImg.src = "img/rock.png";
  btnPaper.disabled = false;
  btnRock.disabled = true;
  btnScissor.disabled = false;
  anim();
}

function selecScissor() {
  selec = "Scissor";
  userImg.src = "img/scissor.png";
  btnPaper.disabled = false;
  btnRock.disabled = false;
  btnScissor.disabled = true;
  anim();
}

function anim() {
  userImg.style.animation = "";
  setTimeout(function margin() {
    userImg.style.animation = "prueba 700ms";
  }, 1);
}

function animBot() {
  botImg.style.animation = "";
  setTimeout(function margin() {
    botImg.style.animation = "prueba 200ms";
  }, 1);
}

function play() {
  if (selec == "") {
    alertNt();
  } else {
    result.innerHTML = "Generando resultado";
    btnPlay.disabled = true;
    btnReset.disabled = true;
    btnPaper.disabled = true;
    btnRock.disabled = true;
    btnScissor.disabled = true;
    userCard.classList.remove("has-background-success-light");
    botCard.classList.remove("has-background-success-light");
    userCard.classList.remove("has-background-danger-light");
    botCard.classList.remove("has-background-danger-light");

    btnPlay.classList.add("is-loading");

    let interval = setInterval(function rotar() {
      aux++;
      if (index == 0) {
        botImg.src = "img/paper.png";
        result.innerHTML = "Generando resultado.";
        animBot();
        index++;
      } else if (index == 1) {
        botImg.src = "img/rock.png";
        result.innerHTML = "Generando resultado..";
        animBot();
        index++;
      } else if (index == 2) {
        botImg.src = "img/scissor.png";
        result.innerHTML = "Generando resultado...";
        animBot();
        index = 0;
      }
      if (aux == 7) {
        clearInterval(interval);
        aux = 0;
      }
    }, 250);
    setTimeout("random();", 2000);
  }
}

function random() {
  let x = Math.floor(Math.random() * 3);

  if (x == 0) {
    botImg.src = "img/paper.png";
    if (selec == "Paper") {
      result.innerHTML = "¡Empate!";
      btnRock.disabled = false;
      btnScissor.disabled = false;
    }
    if (selec == "Rock") {
      botWinsInt++;
      result.innerHTML = "¡BOT te ha ganado!";
      botCard.classList.add("has-background-success-light");
      userCard.classList.add("has-background-danger-light");
      btnPaper.disabled = false;
      btnScissor.disabled = false;
    }
    if (selec == "Scissor") {
      userWinsInt++;
      result.innerHTML = "¡Has ganado!";
      userCard.classList.add("has-background-success-light");
      botCard.classList.add("has-background-danger-light");
      btnPaper.disabled = false;
      btnRock.disabled = false;
    }
  } else if (x == 1) {
    document.getElementById("botImg").src = "img/rock.png";
    if (selec == "Paper") {
      userWinsInt++;
      result.innerHTML = "¡Has ganado!";
      userCard.classList.add("has-background-success-light");
      botCard.classList.add("has-background-danger-light");
      btnRock.disabled = false;
      btnScissor.disabled = false;
    }
    if (selec == "Rock") {
      result.innerHTML = "¡Empate!";
      btnPaper.disabled = false;
      btnScissor.disabled = false;
    }
    if (selec == "Scissor") {
      botWinsInt++;
      result.innerHTML = "¡BOT te ha ganado!";
      botCard.classList.add("has-background-success-light");
      userCard.classList.add("has-background-danger-light");
      btnPaper.disabled = false;
      btnRock.disabled = false;
    }
  } else if (x == 2) {
    botImg.src = "img/scissor.png";
    if (selec == "Paper") {
      botWinsInt++;
      result.innerHTML = "¡BOT te ha ganado!";
      botCard.classList.add("has-background-success-light");
      userCard.classList.add("has-background-danger-light");
      btnRock.disabled = false;
      btnScissor.disabled = false;
    }
    if (selec == "Rock") {
      userWinsInt++;
      result.innerHTML = "¡Has ganado!";
      userCard.classList.add("has-background-success-light");
      botCard.classList.add("has-background-danger-light");
      btnPaper.disabled = false;
      btnScissor.disabled = false;
    }
    if (selec == "Scissor") {
      result.innerHTML = "¡Empate!";
      btnPaper.disabled = false;
      btnRock.disabled = false;
    }
  }
  btnPlay.classList.remove("is-loading");
  btnPlay.disabled = false;
  btnReset.disabled = false;
  actWins();
}

function actWins() {
  userWins.innerHTML = "";
  botWins.innerHTML = "";
  userWins.innerHTML = userWinsInt;
  botWins.innerHTML = botWinsInt;
}

function reset() {
  btnPlay.disabled = false;
  btnReset.disabled = false;
  btnPaper.disabled = false;
  btnRock.disabled = false;
  btnScissor.disabled = false;
  botImg.src = "img/bot.png";
  userImg.src = "img/user.png";
  result.innerHTML = "Pulsa 'Jugar' para comenzar";
  selec = "";
  userWinsInt = 0;
  botWinsInt = 0;
  actWins();
  hide();
  userCard.classList.remove("has-background-success-light");
  botCard.classList.remove("has-background-success-light");
  userCard.classList.remove("has-background-danger-light");
  botCard.classList.remove("has-background-danger-light");
}

function alertNt() {
  alert.style.visibility = "visible";
  alert.style.height = "auto";
}

function hide() {
  alert.style.visibility = "hidden";
  alert.style.height = "0px";
}
