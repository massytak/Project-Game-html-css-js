let player1;
let player2;
let oxyg;
let oxygs = [];
let gameover;
let points;
let decentHealth = 0;
let fullHealthP1 = 300;
let fullHealthP2=300;
let totalsBottel = 0;

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

  //   var elem = document.getElementById("canvas");
  // if (elem.requestFullscreen) {
  //   elem.requestFullscreen();
  // }
  //1er déssiner le background en image importer
  const img = document.createElement("img");
  img.onload = () => {};
  img.src = "img/fond1.jpg";
  ctx.drawImage(img, 0, 0, W, H);

  // fullscreen();
  //2ème déssiner les plangeur que je vais importer de la classe player1s
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
  let addHealthP2=0;

  for (oxyg of oxygs) {
    if (oxyg.hits(player1)) {
      oxyg.clearBottel();
      addHealthP1 += 9;
      
    }
    if (oxyg.hitss(player2)) {
      console.log("touché");
      oxyg.clearBottel();
      addHealthP2 += 9;
    }
    
  }
  
  fullHealthP1 += addHealthP1;
  fullHealthP1 += addHealthP1;
  if (frames % 32 === 0) {
    decentHealth += 6;
  }
  ctx.fillRect(10, 5, fullHealthP1 - decentHealth, 30);
  ctx.fillStyle = "#9EFF00";
  ctx.strokeRect(10,5,300,30);
  ctx.strokeStyle='red';

  ctx.fillRect(W-10, 5, -fullHealthP2+ decentHealth, 30);
  ctx.fillStyle = "#9EFF00";
  ctx.strokeRect(W-10,5,-300,30);
  ctx.strokeStyle='red';

  //5ème dessiner des requi qui défille aleatoirement dans l'espace de jeu
  //
  //6ème des bulle d'oxygen qui monte a la surface pour le look
}

let frames = 0;
function animation() {
  frames++;

  oxyg = new oxygene(random(0, W), 0);

 
  draw(); //on déssine  tout les element de départ
  if (gameover === false) {
    requestAnimationFrame(animation);
  }
}

function startsgame() {
  gameover = false;

  player1 = new Player("player1", W - W, H / 2);
  player2 = new Player("player-2", -W, H / 2);

  requestAnimationFrame(animation);
}

document.getElementById("start-button").onclick = function () {
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
