function random(minWidth, maxWidth) {
   return Math.floor(Math.random()*(maxWidth-minWidth+1)+minWidth);
  }
class oxygene {
  constructor(x, y) {
    const img = document.createElement("img");
    
    img.onload = () => {
        this.img = img;
        const ratio1 = img.naturalWidth / img.naturalHeight;
      this.w = 35;
      this.h = this.w/ratio1;
      this.x = x;
      this.y = y;
    };
    img.src="./img/oxygeneBottel.svg"
  };
  drawOxygeneBottle(){
    if (!this.img) return;
    ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
  }
  hits(player1) {
    return (
      (player1.x+player1.w >= this.x && player1.x <= this.x+this.w) 
      &&
      (player1.y <= this.y+this.h && player1.y+player1.h >= this.y)
    );
  };
  hitss(player2) {
    return (
      (-(player2.x) >= this.x && -(player2.x)-player2.w <= this.x+this.w) 
      &&
      (player2.y <= this.y+this.h && player2.y+player2.h >= this.y)
    );
  }
  clearBottel(){
    //   ctx.clearRect(this.x,this.y,this.w,this.h)
      delete oxygs.splice(0,1);
  }
}
