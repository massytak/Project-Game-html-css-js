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
}
