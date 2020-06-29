class Text {
  constructor (text, posX, posY, align, color, size) {
    this.text = text;
    this.posX = posX;
    this.posY = posY;
    this.align = align;
    this.color = color;
    this.size = size;
  }

  drawText (ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.font = this.size + "px Notable";
    ctx.textAlign = this.align;
    ctx.fillText(this.text, this.posX, this.posY);
    ctx.closePath();
  }
}

export default Text;