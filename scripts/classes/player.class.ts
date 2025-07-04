import { Character } from "./character.superclass.ts";
import { World } from "./world.class";

export class Player extends Character {
  speed: number = 2;
  jumpForce: number = 10;
  imageSrc: string = "../../assets/spritesheets/player/player.png";
  img!: HTMLImageElement;
  ctx!: CanvasRenderingContext2D;
  spreadSheetX: number = 909.58;
  spreadSheetY: number = 909.16;
  counter: number = 0;

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
    this.ctx.drawImage(
      this.img,
      this.spreadSheetX * this.counter,
      909.16 * 3,
      this.spreadSheetX,
      this.spreadSheetY,
      50,
      50,
      100,
      100
    );
    this.counter++;
    if (this.counter === 14) {
      this.counter = 0;
    }
  }
}
