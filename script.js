import { createText, DebugStack } from './scripts/debug.js';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

/*------------init------------*/
const time = {
  lastTime: Date.now(),
  dt: new Array(),
  fps: new Array(),
};
//stack
let gamestack = new Array();
//debug labels
gamestack.push(
  new DebugStack(ctx, [
    createText('Delta Time', time.dt),
    createText('fps', time.fps),
  ])
);

/*---------gameloop--------*/
function draw() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  gamestack.forEach((obj) => {
    obj.draw();
  });
  ctx.fillRect(100, 100, 100, 100);
}
function update() {}
function gameLoop(callback) {
  time.dt[0] = callback - time.lastTime;
  time.lastTime = callback;
  time.fps[0] = Math.trunc(1 / (time.dt[0] / 1000));

  update();
  draw();
  requestAnimationFrame(gameLoop);
}
// ---------init-----------
window.onload = function () {
  ctx.canvas.height = document.documentElement.clientHeight;
  ctx.canvas.width = document.documentElement.clientWidth;
  document.addEventListener('keydown', (e) => {

  });
  requestAnimationFrame(gameLoop);
};
