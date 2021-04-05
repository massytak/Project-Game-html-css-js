let player1;
let player2;
let oxyg;
let oxygs = [];
let gameover = true;
let points;
let decentHealth = 0;
let fullHealthP1 = 300;
let fullHealthP2 = 300;
let totalsBottel = 0;
let frams = -800;
let framsN = 1400;

var rightPressed = false;
var rightPressedP2 = false;
var leftPressed = false;
var leftPressedP2 = false;
var downPressed = false;
var downPressedP2 = false;
var upPressed = false;
var upPressedP2 = false;

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const W = ctx.canvas.width;
const H = ctx.canvas.height;
function fullscreen() {
  const img1 = document.createElement("button");
  img1.setAttribute("Id", "fullButton");
  let screenbutton = document.getElementById("fullButton");
  img1.innerHTML = "play full screen";
  drawButton(screenbutton, 20, 20);
}
function draw() {
  //
  // le plein ecran
  //   var elem = document.getElementById("canvas");
  // if (elem.requestFullscreen) {
  //   elem.requestFullscreen();
  // }
  //
  //1er déssiner le background en image importer
  const img2 = document.createElement("img");
  img2.onload = () => {};
  img2.src = "img/fond1.jpg";
  ctx.drawImage(img2, 0, 0, W, H);

  // fullscreen();
  //2ème déssiner les plangeur que je vais importer de la classe player
  player1.drawPlayerOne();
  player2.drawPlayerTwo();

  //
  //3ème déssiner les bouteille d'oxygène
  if (frames % 200 === 0) {
    oxygs.push(oxyg);
    totalsBottel += 1;
  }

  oxygs.forEach(function (oxyg) {
    oxyg.y += 6;
    oxyg.drawOxygeneBottle();
  });
  //

  //commande player 1 et player2
  //
  if (downPressed) {
    player1.moveDown();
  }
  if (upPressed) {
    player1.moveUp();
  }

  if (rightPressed) {
    player1.moveRight();
  }

  if (leftPressed) {
    player1.moveLeft();
  }

  if (upPressedP2) {
    player2.moveUp();
  }
  if (downPressedP2) {
    player2.moveDown();
  }
  if (rightPressedP2) {
    player2.moveLeftP2();
  }

  if (leftPressedP2) {
    player2.moveRightP2();
  }

  //4ème les barre de vie de chaque player1 qui incrémante si on touche l'oxygene
  //
  let addHealthP1 = 0;
  let addHealthP2 = 0;

  for (oxyg of oxygs) {
    if (oxyg.hits(player1)) {
      oxyg.clearBottel();
      addHealthP1 += 20;
      fullHealthP1 += addHealthP1;
    }
  }
  for (oxyg of oxygs) {
    if (oxyg.hitss(player2)) {
      console.log("touché");
      oxyg.clearBottel();
      addHealthP2 += 20;
      fullHealthP2 += addHealthP2;
    }
  }

  if (frames % 21 === 0) {
    decentHealth += 2;
  }

  let restOfHealthp1 = fullHealthP1 - decentHealth;
  let restOfHealthp2 = decentHealth - fullHealthP2;

  console.log("player 1", restOfHealthp1);
  if (restOfHealthp1 <= 100) {
    colorHealthOrange(10, 5, restOfHealthp1);
  }

  if (restOfHealthp1 > 100) {
    colorHealthgreen(10, 5, restOfHealthp1);
  }
  ctx.strokeRect(10, 5, 300, 30);
  ctx.strokeStyle = "red";

  console.log("p2", restOfHealthp2);
  if (restOfHealthp2 > -100) {
    colorHealthOrange(W - 10, 5, restOfHealthp2);
  }
  if (restOfHealthp2 <= -100) {
    colorHealthgreen(W - 10, 5, restOfHealthp2);
  }
  ctx.strokeRect(W - 10, 5, -300, 30);
  ctx.strokeStyle = "red";

  if (restOfHealthp2 > -100 || restOfHealthp1 <= 100) {
    playMusicFinal();
  } else {
    pauseMusicFinal();
  }

  if (restOfHealthp1 < 0 || restOfHealthp2 > 0) {
    gameover = false;
  }

  if (restOfHealthp2 > -30 || restOfHealthp1 <= 30) {
    if (frames % 12 === 0) {
      const img = document.createElement("img");
      img.onload = () => {};
      img.src = "img/danse du cercueil.jpg";
      ctx.drawImage(img, 0, 0, W, H);
    }
  }

  //5ème dessiner des requi qui défille aleatoirement dans l'espace de jeu
  //
  //6ème des bulle d'oxygen qui monte a la surface pour le look
}
function playMusic1() {
  const audio1 = document.querySelector(".music1");
  audio1.play();
}

function playMusicFinal() {
  const audioFinal = document.querySelector(".musicFinal");
  audioFinal.play();
}

function pauseMusicFinal() {
  const audioFinal = document.querySelector(".musicFinal");
  audioFinal.pause();
}

function colorHealthgreen(x, y, z) {
  ctx.fillStyle = "#9EFF00";
  ctx.fillRect(x, y, z, 30);
}

function colorHealthOrange(x, y, z) {
  ctx.fillStyle = "#FF5A00";
  ctx.fillRect(x, y, z, 30);
}

function gameoverp() {
  frams += 8;
  framsN -= 8;
  ctx.clearRect(0, 0, W, H);

  const img3 = document.createElement("img");
  img3.onload = () => {};
  img3.src = "img/danse du cercueil.jpg";
  ctx.drawImage(img3, 0, 0, W, H);


  
  ctx.font = "300px serif";
  ctx.fillStyle = "red";
  ctx.textBaseline = "hanging";
  if (frams <= 200) {
    ctx.fillText("G   M", frams + 16, 0);
  } else {
    ctx.fillText("G   M", 200, 0);
  }

  if (framsN >= 400) {
    ctx.fillText("A    E", framsN + 16, 0);
  } else {
    ctx.fillText("A    E", 400, 0);
  }

  if (framsN >= 400) {
    ctx.fillText("O     R", framsN + 16, 250);
  } else {
    ctx.fillText("O     R", 400, 250);
  }
  if (frams <= 200) {
    ctx.fillText("     VE", frams + 16, 250);
  } else {
    ctx.fillText("     VE", 200, 250);
  }

  ctx.font = "150px Syne Mono serif";
  ctx.fillStyle = "#FFA100";
  ctx.textBaseline = "hanging";

  if (framsN >= 550) {
    ctx.fillText("A noob is PLAYER1", 100, framsN + 16);
  } else {
    ctx.fillText("A noob is PLAYER1", 100, 550);
  }
  requestAnimationFrame(gameoverp);
}
//je dessine l'avant startgame
let index = 0;

const render = () => {
  index++;
  setInterval(function () {
    ctx.fillStyle = "#FF005E";
    ctx.font = "bold 40px Courier";
    ctx.fillText("cliquez pour jouer", W / 2 - 200, H / 2 + 300);
  }, 1000);
  setInterval(() => {
    ctx.clearRect(0, 0, W, H);
  }, 2000);
};

render();

let frames = 0;
function animation() {
  frames++;

  oxyg = new oxygene(random(0, W), 0);

  draw(); //on déssine  tout les element de départ

  console.log(gameover);

  if (!gameover === true) {
    cancelAnimationFrame(animation);
    gameoverp();
  } else {
    requestAnimationFrame(animation);
  }
}

function startsgame() {
  player1 = new Player("player1", W - W, H / 2);
  player2 = new Player("player-2", -W, H / 2);
  animation();
}
var t=document.getElementById("try-again");
t.onclick=function(){
  location.reload();
}
var b=document.getElementById("start-button");
b.onclick = function () {
   b.disabled=true;
  cancelAnimationFrame(render);
  frames=0;
  cancelAnimationFrame(animation)
  cancelAnimationFrame(gameoverp)
  playMusic1();
  startsgame();
};

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = true;
  } else if (e.keyCode == 37) {
    leftPressed = true;
  } else if (e.keyCode == 40) {
    downPressed = true;
  } else if (e.keyCode == 38) {
    upPressed = true;
  } else if (e.keyCode == 90) {
    upPressedP2 = true;
  } else if (e.keyCode == 83) {
    downPressedP2 = true;
  } else if (e.keyCode == 81) {
    leftPressedP2 = true;
  } else if (e.keyCode == 68) {
    rightPressedP2 = true;
  }
}
function keyUpHandler(e) {
  if (e.keyCode == 39) {
    rightPressed = false;
  } else if (e.keyCode == 37) {
    leftPressed = false;
  } else if (e.keyCode == 40) {
    downPressed = false;
  } else if (e.keyCode == 38) {
    upPressed = false;
  } else if (e.keyCode == 90) {
    upPressedP2 = false;
  } else if (e.keyCode == 83) {
    downPressedP2 = false;
  } else if (e.keyCode == 81) {
    leftPressedP2 = false;
  } else if (e.keyCode == 68) {
    rightPressedP2 = false;
  }
}
