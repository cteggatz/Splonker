// is the bounds | the screen where objects are rendered
export class Viewport {
  constructor(ctx, width, height) {
    this.ctx = ctx;
    this.height = height;
    this.width = width;
    this.x = [(this.ctx.canvas.width-width)*0.5]
    this.y = [(this.ctx.canvas.height-height)*0.5]
  }
  draw() {
    this.ctx.fillStyle = 'black';
    //cleans up edges
    this.ctx.fillRect(this.x[0]-64, this.y[0]-64, 64, this.height+128);
    this.ctx.fillRect((this.x[0]+this.width), this.y-64, 64, this.height+128);
    this.ctx.fillRect(this.x[0], this.y[0]-64, this.width, 64);
    this.ctx.fillRect(this.x[0], this.y[0]+this.height, this.width, 64);
  }
  updateSize(ctx){
    this.ctx = ctx
    this.x[0] = (ctx.canvas.width-this.width) * 0.5;
    this.y[0] = (ctx.canvas.height-this.height) *0.5;
  }
}
