import { createText, DebugStack } from './scripts/debug.js';
import {Player, playerEventListener} from "./scripts/player.js";
import {Viewport} from "./scripts/viewport.js";
import {UI, UIText, UIButton} from "./scripts/userInterface.js";


/*------------options-----------*/
let debugMode = true;



/*------------init------------*/
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
ctx.canvas.height = document.documentElement.clientHeight;
ctx.canvas.width = document.documentElement.clientWidth;
const time = {
  lastTime: Date.now(),
  dt: new Array(),
  fps: new Array(),
};
//debugging
let debugStack = new DebugStack(ctx, [
  createText('Delta Time', time.dt),
  createText('fps', time.fps),
])

//game stuff
let viewport = new Viewport(ctx, 640, 448);
let userInterface = new UI(viewport.x, (viewport.y[0]+viewport.height), 640,192,[
  new UIText("hello Testing", 0, 0, "red", 100)
])
viewport.updateSize(ctx, userInterface);
userInterface.updateSize(viewport);


let gamestack = new Array();
let eventHandlers = new Array();


//player
let player = new Player(ctx, 10,10, 50, 50, viewport);
gamestack.push(player)
eventHandlers.push(new playerEventListener(player))

/*---------gameloop--------*/
function draw() {
  //reseting canvas
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  //draw debug labels
  if(debugMode == true){
    debugStack.draw();
  }
  //draw
 for(const obj of gamestack){
    if(obj.pos.x + obj.size.width + viewport.x[0] < viewport.x[0] ||
      obj.pos.x+viewport.x[0] > viewport.x[0] + viewport.width ||
      obj.pos.y + obj.size.height +viewport.y[0]< viewport.y[0] ||
      obj.pos.y+viewport.y[0] > viewport.y[0] + viewport.height){
      continue;
    }
    obj.draw()
 }
 viewport.draw();
 userInterface.draw(ctx);
}
function update() {

}
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
    eventHandlers[0].update(e.key)
  });
  document.addEventListener("click", (e) =>{
    //eventHandlers[0].update(e.clientXm, e.clientY);
  });
  window.onresize = function(){
    ctx.canvas.height = window.innerHeight;
    ctx.canvas.width = window.innerWidth
    viewport.updateSize(ctx, userInterface)
  }
  requestAnimationFrame(gameLoop);
};
