export class Viewport {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.x = (this.ctx.canvas.width - this.width) / 2;
    this.y = (this.ctx.canvas.height - this.height) / 2;
    if(this.y < 0 || this.x < 0){
      console.log("[!]Error: viewport cannot be bigger then canvas")
      throw "viewport cannot be bigger then canvas"
    }
  }
  draw() {
    this.ctx.fillStyle = 'red';
    this.ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}
