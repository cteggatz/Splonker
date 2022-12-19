console.log('hello');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const time = {
  lastTime: Date.now(),
  dt: 0,
};


/*---------gameloop--------*/
function draw() {
  ctx.fillStyle = "red";
  ctx.fillRect(0,0,110,110);
}
function update() {}
function gameLoop(callback) {
  time.dt = time.lastTime - callback;

  update();
  draw();
}
// ---------init-----------
window.onload = function () {
  ctx.canvas.height = document.documentElement.clientHeight;
  ctx.canvas.width = document.documentElement.clientWidth;

  requestAnimationFrame(gameLoop);
};
