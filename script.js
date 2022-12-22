import { createText, DebugStack } from './scripts/debug.js';
import {Player, playerEventListener} from "./scripts/player.js";
import {Viewport} from "./scripts/viewport.js";

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
let eventHandlers = new Array();
//debug labels
gamestack.push(
  new DebugStack(ctx, [
    createText('Delta Time', time.dt),
    createText('fps', time.fps),
  ])
);
//player
let player = new Player(ctx, 10,10, 50, 50,gamestack);
eventHandlers.push(new playerEventListener(player))

//viewport
let viewport = new Viewport(ctx, 100, 100);


/*---------gameloop--------*/
function draw() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  viewport.draw();
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
    //console.log(e.key)
    eventHandlers[0].update(e.key)
  });
  document.addEventListener('resize', ()=>{
    ctx.canvas.height = document.documentElement.clientHeight;
    ctx.canvas.width = document.documentElement.clientWidth;
  })
  requestAnimationFrame(gameLoop);
};
