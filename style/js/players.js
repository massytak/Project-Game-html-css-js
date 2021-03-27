// class players1{
//     constructor(){
//         const img=document.createElement('img');
//         img.onload=()=>{
//             this.img=img;
//             const imgRatio=img.naturalWidth/img.naturalHeight;

//             this.w=250;
//             this.h=this.w/imgRatio;

//             this.x=this.w/2;
//             this.y=H/2-this.h/2;
//         }
//         img.src="img/player1.svg";
//     }

// drawPlayerOne(){
//     console.log('l image nest pas encore charger')
//     if (!this.img) return;
//     ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
// };
// moveLeft() {
//     this.x-=12;

//     // TODO
//   };
//   moveRight() {
//     this.x+=12;

//     // TODO
//   };
//   moveUp(){
//       this.y-=12;

// };
// moveDown(){
//     this.y+=12;

// };
// }

// class players2{
//     constructor(){
//         const img=document.createElement('img');
//         img.onload=()=>{
//             this.img=img;
//             const imgRatio=img.naturalWidth/img.naturalHeight;

//             this.w=250;
//             this.h=this.w/imgRatio;

//             this.x=(-W+this.w-this.w/2);
//             this.y=H/2-this.h/2;
//         }
//         img.src="img/player 2.svg";
//     }


// drawPlayerTwo(){
//     console.log('l image nest pas encore charger')
//     if (!this.img) return;
//     ctx.scale(-1, 1);
//     ctx.drawImage(this.img,this.x,this.y,this.w,this.h);

//      //ctx.setTransform(1, 0, 0, 1, 0, 0);
// };
// moveLeftp() {
//     this.x-=12;

//     // TODO
//   };
//   moveRightp() {
//     this.x+=12;

//     // TODO
//   };
//   moveUpp(){
//       this.y-=12;

// };
// moveDownp(){
//     this.y+=12;

// };
// };






//code Elodie
class Player {
  constructor(name, x, y) {
    const img = document.createElement("img");
    img.onload = () => {
      this.img = img;
      const ratio = img.naturalWidth / img.naturalHeight;
      this.name = name;
      this.w = 250;
      this.h = this.w / ratio;
      this.x = x;
      this.y = y;
    }
    img.src = `img/${name}.svg`;
  }
  drawPlayerOne() {
    console.log("l image nest pas encore charger");
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
  drawPlayerTwo() {
    console.log("l image nest pas encore charger");
    if (!this.img) return;
    ctx.scale(-1, 1);
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);

  }
};

var player1 = new Player(player1, 100, 100);
var player = new Player(player2svg, 100, 100);
