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

  animatePlayer (keys, gravity, canvas, ctx) {

    // Jump logic
    if (keys['Space'] || keys['KeyW']) {
      this.playerJump();
    } else {
      this.jumpTimer = 0;
    }

    // Half Player logic
    if (keys['ShiftLeft'] || keys['KeyS']) {
      this.height = this.originalHeight / 2;
    } else {
      this.height = this.originalHeight;
    }

    this.posY += this.dy;

    // Gravity logic
    if (this.posY + this.height < canvas.height) {
      this.dy += gravity;
      this.grounded = false;
    } else {
      this.dy = 0;
      this.grounded = true;
      this.posY = canvas.height - this.height;
    }

    this.drawPlayer(ctx);
  }

  playerJump () {
    if (this.grounded && this.jumpTimer == 0) {
      this.jumpTimer = 1;
      this.dy = -this.jumpForce;
    } else if (this.jumpTimer > 0 && this.jumpTimer < 15) {
      this.jumpTimer++;
      this.dy = -this.jumpForce - (this.jumpTimer / 50);
    }
  }

  drawPlayer (ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
    ctx.closePath();
  }
}

export default Player;