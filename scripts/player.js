export class Player {
  constructor(ctx, x, y, width, height, viewport) {
    this.pos = { x, y };
    this.size = { width, height };
    this.ctx = ctx;
    this.viewport = viewport
  }
  draw() {
    this.ctx.fillRect(
      this.pos.x + this.viewport.x[0],
      this.pos.y + this.viewport.y[0],
      this.size.width,
      this.size.height
    );
  }
  update(){

  }
  move(x, y) {
    this.pos.x += x;
    this.pos.y += y;
  }
}
export class playerEventListener {
  constructor(player) {
    this.player = player;
    this.commands = {
      defualt: () => {},
      w: () => {
        this.player.move(0, -10);
      },
      s: () => {
        this.player.move(0, 10);
      },
      d: () => {
        this.player.move(10, 0);
      },
      a: () => {
        this.player.move(-10, 0);
      },
    };
  }
  update(event) {
    (this.commands[event.toLowerCase()] || this.commands['defualt'])();
  }
}
