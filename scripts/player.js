export class Player {
  constructor(ctx, x, y, width, height) {
    this.pos = { x, y };
    this.size = { width, height };
    this.ctx = ctx;
  }
  draw() {
    this.ctx.fillRect(
      this.pos.x,
      this.pos.y,
      this.size.width,
      this.size.height
    );
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
