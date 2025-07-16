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
        this.player = new Player(this, 50, 280);
    }
    update() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.player.update();
    }
    draw() {
        this.player.draw();
    }
}
