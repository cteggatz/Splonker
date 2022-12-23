import { createText, DebugStack } from './scripts/debug.js';
import {Player, playerEventListener} from "./scripts/player.js";
import {Viewport} from "./scripts/viewport.js";

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');


/*------------init------------*/
ctx.canvas.height = document.documentElement.clientHeight;
ctx.canvas.width = document.documentElement.clientWidth;
const time = {
  lastTime: Date.now(),
  dt: new Array(),
  fps: new Array(),
};
//debugging
let debugStack = new Array();
debugStack.push(
  new DebugStack(ctx, [
    createText('Delta Time', time.dt),
    createText('fps', time.fps),
  ])
);

//game stuff
let viewport = new Viewport(ctx, 640, 512);
let gamestack = new Array();
let eventHandlers = new Array();
function addToGameStack(obj){
  obj.pos.x += viewport.x[0];
  obj.pos.y += viewport.y[0];
  gamestack.push(obj)
}


//player
let player = new Player(ctx, 10,10, 50, 50);
addToGameStack(player);
eventHandlers.push(new playerEventListener(player))
console.log(player.pos)

let test = false;
/*---------gameloop--------*/
function draw() {
  //reseting canvas
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  debugStack.forEach((obj) => {
    obj.draw();
  })
  /*
  gamestack.forEach((obj) => {
    if(obj.pos.x+obj.player.width < viewport.x || ){
      
    }
  });
  viewport.draw();
  */
 for(const obj of gamestack){
    if(obj.pos.x + obj.size.width < viewport.x[0] ||
      obj.pos.x > viewport.x[0] + viewport.width ||
      obj.pos.y + obj.size.height < viewport.y[0] ||
      obj.pos.y > viewport.x[0] + viewport.width){
      if(!test){
        console.log(obj);
        test = true;
      }
      continue;
    }
    obj.draw()
 }
 viewport.draw();
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
  ctx.canvas.height = window.innerHeight;
  ctx.canvas.width = window.innerWidth;
  document.addEventListener('keydown', (e) => {
    //console.log(e.key)
    eventHandlers[0].update(e.key)
  });
  window.onresize = function(){
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.width = window.innerWidth
    viewport.updateSize(ctx)
  }
  requestAnimationFrame(gameLoop);
};
