let player1;
let player2;
let oxyg;
let gameover;
let points;
//
// let player1img= "/img/player1.svg";
// let player2img="/img/player2svg.svg";
//

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const W = ctx.canvas.width;
const H = ctx.canvas.height;

function draw() {
  //
  //1er déssiner le background en image importer
  const img = document.createElement("img");
  img.onload = () => {};
  img.src = "img/fond1.jpg";
  ctx.drawImage(img, 0, 0, W, H);

  //2ème déssiner les plangeur que je vais importer de la classe player1s
  player1.drawPlayerOne();
  player2.drawPlayerTwo();

  //
  //3ème déssiner les bouteille d'oxygène
  //
  //4ème les barre de vie de chaque player1 qui incrémante si on touche l'oxygene
  //
  //5ème dessiner des requi qui défille aleatoirement dans l'espace de jeu
  //
  //6ème des bulle d'oxygen qui monte a la surface pour le look
}

document.onkeydown = function (event) {
  console.log("touche appuyee", event);
  switch (event.key) {
    case "ArrowLeft":
      player1.moveLeft();
      // deplacer en gauche
      break;
    case "ArrowRight":
      player1.moveRight();
      // deplacer en droite
      break;
    case "ArrowUp":
      player1.moveUp();

      break;
    case "ArrowDown":
      player1.moveDown();

      break;
    case "Numpad8":
      player2.moveLeftp();
      // deplacer en gauche
      break;
    case "KeyD":
      player2.moveRightp();
      // deplacer en droite
      break;
    case "KeyW":
      player2.moveUpp();

      break;
    case "KeyS":
      player2.moveDownp();

      break;
  }
};

//   document.onkeydown = function (evente) {
//     console.log('touche appuyee', evente)
//     switch (evente.key){
//   case 'KeyA':
//         player2.moveLeftp();
//         // deplacer en gauche
//         break;
//       case 'KeyD':
//         player2.moveRightp()
//         // deplacer en droite
//         break;
//         case 'KeyW':
//             player2.moveUpp()

//         break;
//         case 'KeyS':
//             player2.moveDownp()

//         break;
//     }
// };

function animation() {
  console.log("lanimation a commencé");
  draw(); //on déssine  tout les element de départ
  if (gameover === false) {
    requestAnimationFrame(animation);
  }
}

function startsgame() {
  gameover = false;

//   player1 = new players1();
//   player2 = new players2();

    player1 = new Player("player1", this.w / 2, H / 2 - this.h / 2);
    player2 = new Player("player2svg",W - this.w / 2,H / 2 - this.h / 2);

  requestAnimationFrame(animation);
}

document.getElementById("start-button").onclick = function () {
  startsgame();
  //interface de depart avec titre et bouton
  //bouton pour cliquer start game
};

//
//
//start game si game over
//
