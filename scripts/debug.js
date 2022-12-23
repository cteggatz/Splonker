//creates the debug information on the top right the screen

export class DebugStack {
  constructor(ctx, stack) {
    this.ctx = ctx;
    this.stack = stack;
  }
  //draws every text in _stack
  draw() {
    this.ctx.font = "10px Georgia";
    for (let i = 0; i<this.stack.length; i++) {
      this.ctx.fillStyle = 'red';
      this.ctx.fillText(`${this.stack[i].text}: ${this.stack[i].value}`,5, 12+i*12);
    }
    this.ctx.fillStyle = "white"
  }

}
//creates a label -> new String(text + ": " + value);
export function createText(text, value) {
  return { text: text, value: value };
}
export default DebugStack;
 
