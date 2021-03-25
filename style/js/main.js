let player1;
let player2;
let oxyg;
let gameover;
let points;



const canvas=document.getElementById('canvas');
const ctx=canvas.getContext('2d');



const W = ctx.canvas.width;
const H = ctx.canvas.height;


function draw(){
//
const img=document.createElement('img');
    img.onload=()=>{
    }
    img.src="img/fond1.jpg";
    ctx.drawImage(img,0,0,W,H);

player1.drawPlayerOne();
player2.drawPlayerTwo();

//player1.drawplayer1Tow();
//
//1er déssiner le background en image importer 
//
//2ème déssiner les plangeur que je vais importer de la classe player1s
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
    console.log('touche appuyee', event)
    switch (event.key){
      case 'ArrowLeft':
        player1.moveLeft();
        // deplacer en gauche
        break;
      case 'ArrowRight':
        player1.moveRight()
        // deplacer en droite
        break;
        case 'ArrowUp':
            player1.moveUp()

        break;
        case 'ArrowDown':
            player1.moveDown()

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

function animation(){
    console.log('lanimation a commencé')
    draw(); //on déssine  tout les element de départ 
    if (gameover===false){
requestAnimationFrame(animation);
}
}

function startsgame(){

    gameover=false;
    

    player1=new players1();
    player2=new players2();
    
    
    requestAnimationFrame(animation);
};

document.getElementById("start-button").onclick=function(){
    startsgame();
    //interface de depart avec titre et bouton 
    //bouton pour cliquer start game
};

//
//
//start game si game over 
//

