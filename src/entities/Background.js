
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
}

export default Background;
