import { World } from "./classes/world.class.js";

const canvas = document.getElementById("canvas") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

const world = new World(canvas, ctx);

function gameLoop(): void {
  world.update();
  world.draw();

  requestAnimationFrame(gameLoop);
}
