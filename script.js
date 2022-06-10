let CANVAS__WIDTH = 1024;
let CANVAS__HEIGHT = 768;

import Actor from "./assets/Actor.js";
import Player from "./assets/player/Player.js";

const canvas = document.querySelector("canvas");
canvas.width = CANVAS__WIDTH;
canvas.height = CANVAS__HEIGHT;

const c = canvas.getContext("2d");
c.fillStyle = "white";

const player = new Player({
  position: { x: 40, y: 40 },
  size: { width: 120, height: 200 },
  context: c,
  texture: "./assets/player/textures/Stand/0.png",
});

function updateWorld(updateInterval) {}
function drawWorld() {
  player.draw();
}

function loop(currentRender) {
  const updateInterval = currentRender - lastRender;
  c.clearRect(0, 0, canvas.width, canvas.height);
  updateWorld(updateInterval);
  drawWorld();
  window.requestAnimationFrame(loop);
  lastRender = currentRender;
}

let lastRender = 0;
window.requestAnimationFrame(loop);
