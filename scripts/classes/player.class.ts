import { Character } from "./character.superclass.ts";
import { World } from "./world.class";

export class Player extends Character {
  speed: number = 2;
  jumpForce: number = 10;
  imageSrc: string = "./assets/spritesheets/player/player.png";
  img!: HTMLImageElement;
  ctx!: CanvasRenderingContext2D;

  constructor(
    world: World,
    startingPositionX: number,
    startingPositionY: number
  ) {
    super(world, startingPositionX, startingPositionY);
    this.img = new Image();
    this.img.src = this.imageSrc;
    this.ctx = world.ctx;
  }

  update(): void {}

  draw(): void {
    this.ctx.drawImage(this.img, this.x, this.y);
  }
}
