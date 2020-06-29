
class Enemy {
  constructor (posX, posY, width, height, color, gameSpeed) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;

    this.dx = -gameSpeed;
  }

  updateEnemy (ctx, gameSpeed) {
    this.posX += this.dx;
    this.drawEnemy(ctx);
    this.dx = -gameSpeed;
  }

  drawEnemy (ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
    ctx.closePath();
  }
}

export default Enemy;