import { Character } from "./character.superclass";
import { World } from "./world.class";

export class Player extends Character {
  constructor(
    world: World,
    startingPositionX: number,
    startingPositionY: number
  ) {
    super(world, startingPositionX, startingPositionY);
  }
}
