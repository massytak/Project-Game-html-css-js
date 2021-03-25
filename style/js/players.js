class players1{
    constructor(){
        const img=document.createElement('img');
        img.onload=()=>{
            this.img=img;
            const imgRatio=img.naturalWidth/img.naturalHeight;

            this.w=250;
            this.h=this.w/imgRatio;

            this.x=this.w/2;
            this.y=H/2-this.h/2;
        }
        img.src="img/player%201.svg";
    }

    //     const img1=document.createElement('img');
    //     img1.onload=()=>{
    //         this.img1=img1;
    //         const imgRatio=img1.naturalWidth/img1.naturalHeight;

    //         this.w=250;
    //         this.h=this.w/imgRatio;

    //         this.x=W-this.w/2;
    //         this.y=H/2-this.h/2;
    //     }
    //     img1.src="img/player2svg.svg";
    // }

drawPlayerOne(){
    console.log('l image nest pas encore charger')
    if (!this.img) return;
    ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
};
moveLeft() {
    this.x-=12;
    
    // TODO
  };
  moveRight() {
    this.x+=12;
   
    // TODO
  };
  moveUp(){
      this.y-=12;
      
};
moveDown(){
    this.y+=12;
    
};
}





class players2{
    constructor(){
        const img=document.createElement('img');
        img.onload=()=>{
            this.img=img;
            const imgRatio=img.naturalWidth/img.naturalHeight;

            this.w=250;
            this.h=this.w/imgRatio;

            this.x=(-W+this.w-this.w/2);
            this.y=H/2-this.h/2;
        }
        img.src="img/player 2.svg";
    }

    //     const img1=document.createElement('img');
    //     img1.onload=()=>{
    //         this.img1=img1;
    //         const imgRatio=img1.naturalWidth/img1.naturalHeight;

    //         this.w=250;
    //         this.h=this.w/imgRatio;

    //         this.x=W-this.w/2;
    //         this.y=H/2-this.h/2;
    //     }
    //     img1.src="img/player2svg.svg";
    // }


drawPlayerTwo(){
    console.log('l image nest pas encore charger')
    if (!this.img) return;
    ctx.scale(-1, 1);
    ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
    
     //ctx.setTransform(1, 0, 0, 1, 0, 0);
};
moveLeftp() {
    this.x-=12;
    
    // TODO
  };
  moveRightp() {
    this.x+=12;
   
    // TODO
  };
  moveUpp(){
      this.y-=12;
      
};
moveDownp(){
    this.y+=12;
    
};
}