class Player {
  constructor (posX, posY, width, height, color) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.color = color;

    this.dy = 0;
    this.jumpForce = 15;
    this.originalHeight = height;
    this.grounded = false;
    this.jumpTimer = 0;
  }

  drawPlayer (ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
    ctx.closePath();
  }
}

export default Player;