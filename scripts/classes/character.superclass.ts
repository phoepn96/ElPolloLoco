import { World } from "./world.class";

export class Character {
  world!: World;
  x!: number;
  y!: number;

  constructor(
    world: World,
    startingPositionX: number,
    startingPositionY: number
  ) {
    this.world = world;
    this.x = startingPositionX;
    this.y = startingPositionY;
  }
}
