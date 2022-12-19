class DebugStack {
  constructor(ctx, stack) {
    this.ctx = ctx;
    this.stack = stack;
  }
  draw() {
    for (let i = 0; i<this.stack.length; i++) {
      ctx.fillStyle = 'green';
      ctx.fillText(`${e.text}: ${e.value}`,0, 10*i);
    }
  }
  createText(text, value) {
    return { text: text, value: value };
  }
}
export default DebugStack;
