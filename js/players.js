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
    };
    img.src = `./img/${name}.svg`;
  }
  drawPlayerOne() {
    
    if (!this.img) return;
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
  drawPlayerTwo() {
    
    if (!this.img) return;
    ctx.scale(-1, 1);
    ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }
  moveLeft() {
    if (this.x > 0) {
      this.x -= 12;
    }
  }
  moveLeftP2() {
    if(this.x>-W){
    this.x -= 12;
    }
  }
  moveRight() {
    if(this.x<W-this.w){
    this.x += 12;
  }
  }
  moveRightP2() {
    if(this.x<(-this.w)){
    this.x += 12;
  }
  }
  moveUp() {
    if(this.y>0){
    this.y -= 12;
  }
  }
  moveDown() {
    if(this.y<H -this.h){
    this.y += 12;
  }
  }
}
