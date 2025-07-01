import { World } from "./classes/world.class.js";
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "red";
ctx.fillRect(10, 10, 100, 100);
const world = new World(canvas, ctx);
