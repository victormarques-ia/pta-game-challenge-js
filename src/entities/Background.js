
class Background {
  constructor (posX, posY, width, height, path) {
    this.posX = posX;
    this.posY = posY + 64;
    this.speedX = 0;
    this.width = width;
    this.height = height;
    this.path = path;
    this.image = new Image();
  }

  drawBackground (ctx) {
    this.image.src = this.path;
    ctx.beginPath();
    ctx.drawImage(this.image, this.posX, this.posY,this.width, this.height);
    ctx.drawImage(this.image, this.posX + this.width, this.posY,this.width, this.height);
    ctx.closePath();
  }
}

export default Background;
