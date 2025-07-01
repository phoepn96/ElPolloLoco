import { Character } from "./character.superclass";
import { World } from "./world.class";

export class Player extends Character {
  speed: number = 2;
  jumpForce: number = 10;

  constructor(
    world: World,
    startingPositionX: number,
    startingPositionY: number
  ) {
    super(world, startingPositionX, startingPositionY);
  }
}
