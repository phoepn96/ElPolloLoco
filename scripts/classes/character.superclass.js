export class Character {
    world;
    x;
    y;
    constructor(world, startingPositionX, startingPositionY) {
        this.world = world;
        this.x = startingPositionX;
        this.y = startingPositionY;
    }
}
