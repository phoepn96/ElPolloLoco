import { Player } from "./player.class.ts";

export class World {
  canvas!: HTMLCanvasElement;
  ctx!: CanvasRenderingContext2D;

  width!: number;
  height!: number;
  gravity: number = 1;

  player!: Player;

  constructor(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    this.canvas = canvas;
    this.ctx = ctx;
    this.width = canvas.width;
    this.height = canvas.height;
    this.player = new Player(this, 50, 500);
  }

  update(): void {}

  draw(): void {
    this.player.draw();
  }
}
