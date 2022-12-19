export class DebugStack {
  constructor(ctx, stack) {
    this.ctx = ctx;
    this.stack = stack;
  }
  draw() {
    this.ctx.font = "10px Georgia";
    for (let i = 0; i<this.stack.length; i++) {
      this.ctx.fillStyle = 'red';
      this.ctx.fillText(`${this.stack[i].text}: ${this.stack[i].value}`,5, 12);
    }
    this.ctx.fillStyle = "white"
    //console.log("drawn")
  }

}
export function createText(text, value) {
  return { text: text, value: value };
}
export default DebugStack;
 
