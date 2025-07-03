import { Player } from "./player.class.js";
export class World {
    canvas;
    ctx;
    width;
    height;
    gravity = 1;
    player;
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.width = canvas.width;
        this.height = canvas.height;
        this.player = new Player(this, 50, 500);
    }
    update() { }
    draw() {
        this.player.draw();
    }
}
